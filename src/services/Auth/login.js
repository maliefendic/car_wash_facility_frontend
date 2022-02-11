import apiRequest from '../../helpers/apiRequest';

export const LoginAPI = async (email, password) => {
  const data = {
    email,
    password
  };
  const res = await apiRequest({
    method: 'post',
    url: `auth/login`,
    data
  });

  return res;
};
