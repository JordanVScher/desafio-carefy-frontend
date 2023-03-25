import { toast } from 'react-toastify';
import { getUsers } from './request';

export const populateUserGrid = (setUsers) => { // eslint-disable-line
  getUsers(1, 50)
    .then((data) => {
      setUsers(data.sort((a, b) => (a.nome > b.nome ? 1 : -1)));
    })
    .catch((error) => {
      toast.error(error);
    });
};
