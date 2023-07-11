import { Component } from "react";
import ContactForm from "./Form/ContactForm";
import Filter from "./Filters/Filter";
import ContactList from './ContactList/ContactList';

class App extends Component {
  state = {
    contacts: [],
    filter: "",
  };

  createUser = (contact) => {
    this.setState(prevState => {
      const exist = prevState.contacts.find(
        ({ name }) => name.toLowerCase() === contact.name.toLowerCase()
      );
        if (exist) {
          alert(`${contact.name} is already in contacts.`);
          return;
        }
        return { contacts: [...prevState.contacts, contact] };
    });
  };

  handleFilterChange = (e) => {
    this.setState({ filter: e.target.value });
  };

  handlerDelete = (id) => {
    const { contacts } = this.state;
    const updatedContacts = contacts.filter((contact) => contact.id !== id);
      this.setState({
        contacts: updatedContacts,
    });
  };

  render() {
    const { contacts, filter } = this.state;
    const filtere = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    return (
      <div className="container"
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 30,
          color: '#010101'
        }}
      > <h1>Phonebook</h1>
        <ContactForm 
          addContact ={this.createUser}
          contacts={contacts}
          />
          <h2>Contacts</h2>
        <Filter filter={filter}
          handleFilterChange={this.handleFilterChange}
          contacts={contacts}
          />
        <ContactList
          contacts={filtere}
          handlerDelete={this.handlerDelete}
        />
      </div>
    );
  }
  
};
export default App
