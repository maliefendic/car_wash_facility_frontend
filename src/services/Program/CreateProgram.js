import apiRequest from '../../helpers/apiRequest';

export const CreateProgram = async (data) => {
  const res = await apiRequest({
    method: 'post',
    url: `program`,
    data
  });

  return res;
};
