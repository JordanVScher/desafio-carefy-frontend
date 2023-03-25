// import React from 'react';
import { FaTrash, FaEdit } from 'react-icons/fa';

import {
  Table, Thead, Tbody, Tr, Th, Td,
} from '../styles/grid';

function Grid({ patients }) {
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
          <Tr key={item.id}>
            <Td width="30%">{item.name}</Td>
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
