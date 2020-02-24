export default async ({ userId }, _, { dataSources }) => {
  const user = await dataSources.postgre.user.getUserById(userId);
  return user;
};
