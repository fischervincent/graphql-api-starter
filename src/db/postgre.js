import knex from "knex";

export default knex({
  client: "pg",
  version: "7.2",
  connection: {
    host: process.env.POSTGRE_HOST,
    user: process.env.POSTGRE_USER,
    password: process.env.POSTGRE_PASSWORD,
    database: process.env.POSTGRE_DATABASE,
    port: parseInt(process.env.POSTGRE_PORT, 10) || 5432
  }
});
