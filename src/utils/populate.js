import { toast } from 'react-toastify';
import { deletePatient, getPatients } from './request';

export const populatePatientsGrid = (setPatients) => { // eslint-disable-line
  getPatients(1, 50)
    .then((data) => {
      setPatients(data.sort((a, b) => (a.nome > b.nome ? 1 : -1)));
    })
    .catch((error) => {
      toast.error(error);
    });
};

export const handleDelete = async (setOnEdit, setPatients, patients, idToDelete) => {
  deletePatient(idToDelete)
    .then((data) => {
      const newArray = patients.filter((patient) => patient._id.toString() !== idToDelete);

      setPatients(newArray);
      toast.success(data);
    })
    .catch((error) => toast.error(error));

  setOnEdit(null);
};
