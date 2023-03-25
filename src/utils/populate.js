import { toast } from 'react-toastify';
import { getPatients } from './request';

export const populatePatientsGrid = (setPatients) => { // eslint-disable-line
  getPatients(1, 50)
    .then((data) => {
      setPatients(data.sort((a, b) => (a.nome > b.nome ? 1 : -1)));
    })
    .catch((error) => {
      toast.error(error);
    });
};
