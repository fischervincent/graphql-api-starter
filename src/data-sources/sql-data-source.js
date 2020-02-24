import { DataSource } from "apollo-datasource";

export class SQLDataSource extends DataSource {
  constructor(knexConnection) {
    super();

    this.knexConnection = knexConnection;
  }
}
