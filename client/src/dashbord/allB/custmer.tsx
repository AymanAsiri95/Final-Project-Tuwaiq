import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableContainer,
  } from '@chakra-ui/react'

  
  export default function Custmer() {
    return (
<TableContainer>
  <Table size='sm'>
    <Thead>
      <Tr>
      <Th>ID</Th>
        <Th>Building العقار</Th>
        <Th>الوحدات</Th>
        <Th > اسم العميل</Th>
        <Th>تاريخ العقد من الى</Th>
        <Th>قيمه العقد</Th>
        <Th >-</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>  
       <Td>1</Td>
        <Td>x</Td>
        <Td>x</Td>
        <Td>x</Td>
        <Td>x</Td>
        <Td>x</Td>
        <Td>x</Td>
      </Tr>
      <Tr>
       <Td>x</Td>
        <Td>x</Td>
<Td>x</Td>
<Td>x</Td>
<Td>x</Td>
<Td>x</Td>
<Td>x</Td>
      </Tr>
    </Tbody>

  </Table>
</TableContainer> 
 )}