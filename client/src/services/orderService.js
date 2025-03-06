import { postRequest } from './api.js';

export const createOrder = async (orderData) => {
  return await postRequest('orders', orderData);
};
