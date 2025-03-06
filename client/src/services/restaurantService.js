import { getRequest } from './api.js';

export const fetchRestaurants = async () => {
  return await getRequest('restaurants');
};

export const fetchRestaurantMenu = async (restaurantId) => {
  return await getRequest(`restaurants/${restaurantId}/menu`);
};
