export const getUserRoles = () => {
  const user = JSON.parse(localStorage.getItem("okta-token-storage") || "{}");
  if (!user) return;
  const {
    accessToken: {
      claims: { groups },
    },
  } = user;
  return groups;
};
