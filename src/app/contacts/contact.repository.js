const { v4 } = require("uuid");

let contacts = [
  {
    id: v4(),
    name: "Caio",
    email: "caioalmeidasilva96@gmail.com",
    phone: "12312341234",
    category_id: v4(),
  },
];

class ContactRepository {
  async findAll() {
    return new Promise((resolve) => {
      resolve(contacts);
    });
  }

  async findById(id) {
    return new Promise((resolve) => {
      resolve(contacts.find((contact) => contact.id === id));
    });
  }

  async findByEmail(email) {
    return new Promise((resolve) => {
      resolve(contacts.find((contact) => contact.email === email));
    });
  }

  async delete(id) {
    return new Promise((resolve) => {
      contacts.filter((contact) => contact.id !== id);
      resolve();
    });
  }

  async create({ name, email, phone, category_id }) {
    return new Promise((resolve) => {
      const newContact = { id: v4(), name, phone, email, category_id };
      contacts.push(newContact);
      resolve(newContact);
    });
  }

  async updated(id, { name, email, phone, category_id }) {
    return new Promise((resolve) => {
      const updatedContact = { id, name, phone, email, category_id };

      contacts = contacts.map((contact) =>
        contact.id === id ? updatedContact : contact
      );

      resolve(updatedContact);
    });
  }
}

module.exports = new ContactRepository();
