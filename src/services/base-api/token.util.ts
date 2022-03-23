export const getUserToken = () => {
  const userToken = localStorage.getItem("okta-token-storage");
  if (!userToken) {
    return null;
  }

  const { accessToken } = JSON.parse(userToken);
  if (accessToken) {
    return accessToken.accessToken;
  }
};
