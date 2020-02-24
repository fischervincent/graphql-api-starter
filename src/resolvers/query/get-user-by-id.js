export default async (_, { id }, { dataSources }) => {
  const user = await dataSources.postgre.user.getUserById(id);
  return user;
};
