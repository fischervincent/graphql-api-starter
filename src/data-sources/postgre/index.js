import postgreConnection from "../../db/postgre";
import UserDataSource from "./user";
import NotificationDataSource from "./notification";

export default {
  user: new UserDataSource(postgreConnection),
  notification: new NotificationDataSource(postgreConnection)
};
