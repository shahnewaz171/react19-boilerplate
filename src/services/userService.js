export const getUserProfile = async (userId) => {
  await new Promise((resolve) => setTimeout(resolve, 100));

  return {
    userId,
    name: 'Shahnewaz',
    email: 'shahnewaz@gmail.com'
  };
};
