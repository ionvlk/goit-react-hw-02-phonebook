import PropTypes from 'prop-types';
import css from './ContactItem.module.css';

function ContactItem({ id, name, number, onDeleteContact }) {
  return (
    <li>
      {name}: {number}{' '}
      <button
        className={css.button}
        type="button"
        onClick={() => onDeleteContact(id)}
      >
        Delete
      </button>
    </li>
  );
}

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactItem;