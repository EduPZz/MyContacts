const { v4 } = require('uuid');

let contacts = [
  {
    id: v4(),
    name: 'Eduardo',
    email: 'eduardo@gmail.com',
    phone: '1231092834',
    category_id: v4(),
  },
  {
    id: v4(),
    name: 'Jose',
    email: 'jose@gmail.com',
    phone: '1231092834',
    category_id: v4(),
  },
];

class ContactRepository {
  findAll() {
    // listar todos os registros
    return new Promise((resolve) => {
      resolve(contacts);
    });
  }

  findById(id) {
    return new Promise((resolve) => {
      resolve(
        contacts.find((contact) => contact.id === id),
      );
    });
  }

  findByEmail(email) {
    return new Promise((resolve) => {
      resolve(
        contacts.find((contact) => contact.email === email),
      );
    });
  }

  delete(id) {
    return new Promise((resolve) => {
      contacts = contacts.filter((contact) => contact.id !== id);
      resolve();
    });
  }

  create({
    name, email, phone, category_id,
  }) {
    return new Promise((resolve) => {
      const contact = {
        id: v4(),
        name,
        email,
        phone,
        category_id,
      };

      contacts.push(contact);
      resolve(contact);
    });
  }

  update(id, {
    name, email, phone, category_id,
  }) {
    return new Promise((resolve) => {
      const updatedContact = {
        id,
        name,
        email,
        phone,
        category_id,
      };

      contacts = contacts.map((contact) => (
        contact.id === id ? updatedContact : contact
      ));

      resolve(updatedContact);
    });
  }
}

module.exports = new ContactRepository();
