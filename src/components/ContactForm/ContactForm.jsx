import { Component } from 'react';
import { nanoid } from 'nanoid';
import { PropTypes } from 'prop-types';
export class ContactForm extends Component {
  static propTypes = {
    contacts: PropTypes.array.isRequired,
  };
  state = {
    name: '',
    number: '',
  };

  onChangeInput = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  addContact = e => {
    e.preventDefault();
    if (
      this.props.contacts.some(
        contact => this.state.name.toLowerCase() === contact.name.toLowerCase()
      )
    ) {
      alert(`${this.state.name} is alredy in contacts`);
      return;
    }
    const newContact = {
      id: nanoid(),
      name: this.state.name,
      number: this.state.number,
    };

    this.props.data(newContact);
    this.setState({
      number: '',
      name: '',
    });
  };

  render() {
    const { name, number } = this.state;
    return (
      <>
        <form action="" onSubmit={this.addContact}>
          <input
            onChange={this.onChangeInput}
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <input
            type="tel"
            name="number"
            onChange={this.onChangeInput}
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <button>Add contact</button>
        </form>
      </>
    );
  }
}
