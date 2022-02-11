import apiRequest from '../../helpers/apiRequest';

export const GetProgram = async (id) => {
  const res = await apiRequest({
    method: 'get',
    url: `program/${id}`
  });

  return res;
};
