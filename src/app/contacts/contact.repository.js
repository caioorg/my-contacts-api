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

  async delete(id) {
    return new Promise((resolve) => {
      contacts.filter((contact) => contact.id !== id);
      resolve();
    });
  }
}

module.exports = new ContactRepository();
