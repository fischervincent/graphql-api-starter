import notifications from "./notification";
import getUsers from "./query/get-users";
import getUserById from "./query/get-user-by-id";

export default {
  Query: {
    getUsers,
    getUserById
  },
  User: {
    notifications
  }
};
