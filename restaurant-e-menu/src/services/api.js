import axios from "axios";

const API_BASE_URL = "http://localhost:3001";

export const fetchCategories = async () => {
  const response = await axios.get(`${API_BASE_URL}/categories`);
  return response.data;
};

export const fetchMenuItems = async () => {
  const response = await axios.get(`${API_BASE_URL}/menuItems`);
  return response.data;
};
