export default async (_, { limit }, { dataSources }) => {
  const users = await dataSources.postgre.user.getAll(limit);
  return users;
};
