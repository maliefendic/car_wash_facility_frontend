import apiRequest from '../../helpers/apiRequest';

export const GetProgramSteps = async () => {
  const res = await apiRequest({
    method: 'get',
    url: `program-steps`
  });

  return res;
};
