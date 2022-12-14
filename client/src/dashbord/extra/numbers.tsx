import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react'


  export default function Numb() {
    return (
<TableContainer>
  <Table  border='1px' borderColor='gray.200' variant='simple'>
   
    <Thead>
      <Tr>
        <Th>اسم العقار</Th>
        <Th>عدد الوحدات</Th>
        <Th >الأرباح والخسائر المتوقع</Th>
        <Th >income الاجمالي الدخل</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td>عماره الياسمين</Td>
        <Td>8</Td>
        <Td >380000</Td>
        <Td >380000</Td>
      </Tr>
      <Tr>
        <Td>برج الطحاء</Td>
        <Td>180</Td>
        <Td >13500000</Td>
        <Td >380000</Td>
      </Tr>
      <Tr>
        <Td>شقق الملقا</Td>
        <Td>45</Td>
        <Td >1350000</Td>
        <Td >380000</Td>
      </Tr>
      <Tr>
        <Td>دبلوكسات النرجس</Td>
        <Td>18</Td>
        <Td >135000</Td>
        <Td >380000</Td>
      </Tr>
      <Tr>
        <Td>اجمالي الدخل</Td>
        <Td></Td>
        <Td color='red.500' >13500000</Td>
        <Td ></Td>
      </Tr>
    </Tbody>

  </Table>

  
</TableContainer>
    
 )}