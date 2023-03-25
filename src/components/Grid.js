// import React from 'react';
import { FaTrash, FaEdit } from 'react-icons/fa';
import {
  Table, Thead, Tbody, Tr, Th, Td,
} from '../styles/grid';

const users = [
  { id: 1, nome: 'foobar', email: 'foobar@foobar.com' },
];

function Grid() {
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
        {users.map((item) => (
          <Tr key={item.id}>
            <Td width="30%">{item.nome}</Td>
            <Td width="30%">{item.email}</Td>
            <Td alignCenter width="5%">
              <FaEdit />
            </Td>
            <Td alignCenter width="5%">
              <FaTrash />
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>

  );
}

export default Grid;
