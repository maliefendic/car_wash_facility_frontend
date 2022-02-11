import apiRequest from '../../helpers/apiRequest';

export const GetUsers = async (page, limit, search, orderBy, order) => {
  const res = await apiRequest({
    method: 'get',
    url: `users?page=${
      page
    }&pageSize=${limit}&search=${search}&orderBy=${orderBy}&orderType=${order}`
  });

  return res;
};
