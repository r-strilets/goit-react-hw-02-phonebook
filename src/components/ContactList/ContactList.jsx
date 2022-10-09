import { Component } from 'react';
import { PropTypes } from 'prop-types';
export class ContactList extends Component {
  static propTypes = {
    filteredContacts: PropTypes.array.isRequired,
  };

  render() {
    const { filteredContacts, deleteContact } = this.props;
    return (
      <>
        <ul>
          {filteredContacts.map(contact => (
            <li key={contact.id}>
              {contact.name}: {contact.number}{' '}
              <button onClick={e => deleteContact(contact.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </>
    );
  }
}
