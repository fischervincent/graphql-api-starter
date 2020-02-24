export default async ({ userId }, _, { dataSources }) => {
  const notifications = await dataSources.postgre.notification.getNotificationByUserId(
    userId
  );
  return notifications;
};
