const { uuid } = require("uuidv4");

const contacts = [
  {
    id: uuid(),
    name: "Caio",
    email: "caioalmeidasilva96@gmail.com",
    phone: "12312341234",
    category_id: uuid(),
  },
];

class ContactRepository {
  async findAll() {
    return new Promise((resolve) => {
      resolve(contacts);
    });
  }
}

module.exports = new ContactRepository();
