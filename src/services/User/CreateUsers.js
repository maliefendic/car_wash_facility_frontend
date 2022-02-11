import apiRequest from '../../helpers/apiRequest';

export const CreateUsers = async (data) => {
  const res = await apiRequest({
    method: 'post',
    url: `auth/register`,
    data
  });

  return res;
};
