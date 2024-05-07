import axios from "axios";

export const axiosInstanceUserManagement = axios.create({
  baseURL: process.env.REACT_APP_USER_MANAGEMENT_BASE_URL,
});

export const axiosInstanceCartManagement = axios.create({
  baseURL: process.env.REACT_APP_CART_MANAGEMENT_BASE_URL,
});

export const axiosInstanceProduct = axios.create({
  baseURL: process.env.REACT_APP_PRODUCT_BASE_URL,
});
