import axios from "axios";

const api = axios.create({});

export const updateApiHeaders = (token) => {
  api.defaults.headers["Authorization"] = `Bearer ${token}`;
};

export const removeApiHeaders = () => {
  api.defaults.headers["Authorization"] = null;
};

export const getDataByIdApi = async (route, id, params) => {
  const response = await api.get(`${route}/${id}`, params);

  return response;
};

export const getDataApi = async (route, params) => {
  const response = await api.get(route, params);

  return response;
};

export const postDataApi = async (route, data) => {
  const response = await api.post(route, data);

  return response;
};

export const putDataApi = async (route, id, data) => {
  const response = await api.put(`${route}/${id}`, data);

  return response;
};
