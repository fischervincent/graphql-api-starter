import { SQLDataSource } from "../sql-data-source";

export default class UserDataSource extends SQLDataSource {
  async getUserById(id) {
    const user = await this.knexConnection.raw(
      `
        SELECT
          "user".id
        FROM
          "USER" "user"
        WHERE
          "user".id = ${id}
    `
    );

    return user;
  }

  async getAll(limit = 10) {
    const users = await this.knexConnection.raw(`
        SELECT
          "user".id
        FROM
          "USER" "user"
        LIMIT ${limit}
    `);
    return users.rows;
  }
}
