const { v4 } = require("uuid");
const db = require("../../infrastructure/database/connection");

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
    const [row] = await db.query(
      `
      INSERT INTO contacts(name, email, phone, category_id)
      VALUES($1, $2, $3. $4)
      RETURNING *
    `,
      [name, email, phone, category_id]
    );

    return row;
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
