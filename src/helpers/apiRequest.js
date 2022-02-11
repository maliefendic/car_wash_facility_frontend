import axiosInstance from './axiosInstance';

export default async (request) => {
  request.method = request.method || 'get';

  request.url = `${process.env.REACT_APP_HOST}${request.url}`;

  request.data = request.data || {};
  if (request.data && request.method === 'get') {
    request.data = null;
  }
  request.headers = {
    ...request.headers
  };

  return axiosInstance(request);
};
