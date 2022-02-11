import apiRequest from '../../helpers/apiRequest';

export const GetUser= async (id) => {
  const res = await apiRequest({
    method: 'get',
    url: `user/${id}`
  });

  return res;
};
