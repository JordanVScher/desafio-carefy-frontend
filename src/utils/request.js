import axios from 'axios';
import { BACKEND_URL } from '../config/env';

const baseUrl = BACKEND_URL;
const patientUrl = `${baseUrl}/patient`;
const authUrl = `${baseUrl}/auth`;

const headers = {
  Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
};

export const getPatients = async (page, limit) => {
  const { data } = await axios.get(`${patientUrl}?page=${page}&limit=${limit}`, { headers });
  return data;
};

export const deletePatient = async (id) => {
  const { data } = await axios.delete(`${patientUrl}/${id}`, { headers });
  return data;
};

export const updatePatient = async (id, newData) => {
  const { data } = await axios.patch(`${patientUrl}/${id}`, newData, { headers });
  return data;
};

export const createPatient = async (newData) => {
  const { data } = await axios.post(`${patientUrl}`, newData, { headers });
  return data;
};

export const getAccessToken = async (code) => {
  const { data } = await axios.get(`${authUrl}/getAccessToken?code=${code}`);
  return data;
};
