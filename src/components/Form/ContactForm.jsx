import React, { Component } from "react";
import PropTypes from "prop-types";
import css from './Form.module.css';
import { nanoid } from "nanoid";

class ContactForm extends Component {
    state = {
        name: '',
        number: '',
        id: '',
      }

    handlerChenge = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
      }

    handlerSubmit = (e) => {
        e.preventDefault()
        this.props.addContact({ id: nanoid(), name: this.state.name, number: this.state.number });
        this.reset();
        };
        reset = () => {
            this.setState({ name: '', number: '' });
        };
      

    render() {
        const { name, number } = this.state;
            return (
            <form className={css.container} onSubmit={this.handlerSubmit}>
                <label htmlFor={nanoid()}>Name</label>
                    <input
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        onChange={this.handlerChenge}
                        value={name}
                    />
                <label htmlFor={nanoid()}>Number</label>
                    <input
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                        onChange={this.handlerChenge}
                        value={number}
                    />
                <button className={css.formBtn}>Add contact</button>
            </form>
        )
    }
}
ContactForm.propTypes = {
    addContact: PropTypes.func.isRequired,
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      })
    ).isRequired,
  };
export default ContactForm