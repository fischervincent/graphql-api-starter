import { SQLDataSource } from "../sql-data-source";

export default class NotificationDataSource extends SQLDataSource {
  async getNotificationByUserId(userId) {
    const notifications = await this.knexConnection.raw(
      `
        SELECT
          "notification".id, "notification".subject, "notification".content
        FROM
          "NOTIFICATION" "notification"
        WHERE
          "notification"."userId" = ${userId}
    `
    );
    return notifications.rows[0];
  }
}
