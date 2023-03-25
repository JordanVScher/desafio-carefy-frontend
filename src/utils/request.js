import axios from 'axios';

const baseUrl = 'http://localhost:3500';
const patientUrl = `${baseUrl}/patient`;

export const getUsers = async (page, limit) => { // eslint-disable-line
  const { data } = await axios.get(`${patientUrl}?page=${page}&limit=${limit}`);
  return data;
};
