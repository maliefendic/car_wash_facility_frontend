import apiRequest from '../../helpers/apiRequest';

export const Order = async (data) => {
 console.log(data)
  const res = await apiRequest({
    method: 'post',
    url: `order`,
    data
  });

  return res;
};
