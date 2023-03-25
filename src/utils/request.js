import axios from 'axios';
import { BACKEND_URL } from '../config/env';

const baseUrl = BACKEND_URL;
const patientUrl = `${baseUrl}/patient`;

export const getPatients = async (page, limit) => {
  const { data } = await axios.get(`${patientUrl}?page=${page}&limit=${limit}`);
  return data;
};

export const deletePatient = async (id) => {
  const { data } = await axios.delete(`${patientUrl}/${id}`);
  return data;
};
