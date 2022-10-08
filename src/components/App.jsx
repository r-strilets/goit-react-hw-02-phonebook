import { Component } from 'react';

import { ContactForm } from './ContactForm/ContactForm';
export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  getNewContactsArray = newContact => {
    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, newContact],
      };
    });
  };

  contactsFilter = e => {
    this.setState({
      filter: e.target.value,
    });
  };
  render() {
    const filteredContacts = this.state.contacts.filter(contact =>
      contact.name
        .toLowerCase()
        .includes(this.state.filter.toString().toLowerCase())
    );
    console.log(this.state.contacts);
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm data={this.getNewContactsArray} />
        <h2>Contacts</h2>
        <h3>Find contacts by name</h3>
        <input type="text" onChange={this.contactsFilter} />
        <ul>
          {filteredContacts.map(contact => (
            <li key={contact.id}>
              {contact.name}: {contact.number}
            </li>
          ))}
        </ul>
      </>
    );
  }
}
