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
  async findAll(orderBy = "ASC") {
    const direction = orderBy?.toUpperCase() === "DESC" ? "DESC" : "ASC";
    const rows = db.query(`SELECT * FROM contacts ORDER BY name ${direction}`);
    return rows;
  }

  async findById(id) {
    const [row] = db.query("SELECT * FROM contacts WHERE id = $1", [id]);
    return row;
  }

  async findByEmail(email) {
    const [row] = db.query("SELECT * FROM contacts WHERE email = $1", [email]);
    return row;
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
    const [row] = await db.query(
      `
      UPDATE contacts
      SET name = $1, email = $2, phone = $3, category_id = $4
      WHERE id = $5
      RETURNING *
    `,
      [name, email, phone, category_id, id]
    );
    return row;
  }
}

module.exports = new ContactRepository();
