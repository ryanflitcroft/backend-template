const pool = require("../utils/pool");

module.exports = class Order {
  id;
  product;
  quantity;

  constructor(row) {
    this.id = row.id;
    this.product = row.product;
    this.quantity = row.quantity;
  }

  static async insert({ product, quantity }) {
    const { rows } = await pool.query(
      `
      INSERT INTO
        orders(product, quantity)
      VALUES
        ($1, $2)
      RETURNING
        *
      `,
      [product, quantity]
    );

    return new Order(rows[0]);
    // TODO: Implement me ***
  }

  static async getAll() {
    const { rows } = await pool.query(
      `
      SELECT
        *
      FROM
        orders
      `
    );

    return rows.map((item) => new Order(item));
    // TODO: Implement me xxx
  }

  static async getById(id) {
    const { rows } = await pool.query(
      `
      SELECT
        *
      FROM
        orders
      WHERE
        id=$1
      `,
      [id]
    );

    if (!rows[0]) return null;
    return new Order(rows[0]);
    // TODO: Implement me ***
  }

  static async updateById(id, { product, quantity }) {
    // TODO: Implement me
  }

  static async deleteById(id) {
    const { rows } = await pool.query(
      `
      DELETE FROM
        orders
      WHERE
        id=$1
      RETURNING
        *
      `,
      [id]
    );

    if (!rows[0]) return null;
    return new Order(rows[0]);
    // TODO: Implement me
  }
};
