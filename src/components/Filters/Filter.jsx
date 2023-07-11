import PropTypes from "prop-types";
import css from './Filter.module.css';

const Filter = ({handleFilterChange, filter}) => {
        return (
            <div className={css.containerFilter}>
                <label htmlFor="fiind">Find contacts by name</label>
                    <input type="text"
                        onChange={handleFilterChange}
                        value={filter}
                />
            </div>
            )
}
Filter.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};
export default Filter