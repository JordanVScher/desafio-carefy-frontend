import { FaTrash, FaEdit } from 'react-icons/fa';
import { handleDelete } from '../utils/actions';
import {
  Table, Thead, Tbody, Tr, Th, Td,
} from '../styles/grid';

function Grid({ patients, setPatients, setOnEdit }) {
  const handleEdit = (item) => {
    setOnEdit(item);
  };

  return (
    <Table>
      <Thead>
        <Tr>
          <Th>Nome</Th>
          <Th>E-mail</Th>
          <Th />
          <Th />
        </Tr>
      </Thead>
      <Tbody>
        {patients.map((item) => (
          <Tr key={item._id}>
            <Td width="30%">{item.name}</Td>
            <Td width="30%">{item.email}</Td>
            <Td alignCenter width="5%">
              <FaEdit onClick={() => handleEdit(item)} />
            </Td>
            <Td alignCenter width="5%">
              <FaTrash onClick={() => handleDelete(setOnEdit, setPatients, patients, item._id)} />
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>

  );
}

export default Grid;
