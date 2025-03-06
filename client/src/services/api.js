import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export const getRequest = async (endpoint, params = {}) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/${endpoint}`, { params });
    return response.data;
  } catch (error) {
    console.error(`GET request error on ${endpoint}: `, error);
    throw error;
  }
};

export const postRequest = async (endpoint, data) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/${endpoint}`, data);
    return response.data;
  } catch (error) {
    console.error(`POST request error on ${endpoint}: `, error);
    throw error;
  }
};
