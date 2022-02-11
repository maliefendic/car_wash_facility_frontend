import apiRequest from '../../helpers/apiRequest';

export const GetPrograms = async (page, limit, search) => {
  const res = await apiRequest({
    method: 'get',
    url: `programs?page=${1}&pageSize=${100}&search=${""}`
  });

  return res;
};
