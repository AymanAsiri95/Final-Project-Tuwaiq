import { Grid, GridItem } from '@chakra-ui/react'



import Genral from "./extra/genral";
import Tenet from "./extra/tenet";
import Numb from "./extra/numbers";
import Map from "./extra/uselessmap";


export default function DashGrid() {
  return (
      

<>
    <Grid templateColumns='repeat(2, 1fr)' gap={10}>
      
  <GridItem colSpan={2} h='1'  />
  < Genral />  < Numb /> 
  <GridItem colStart={2} colEnd={2} h='1'  />
  < Tenet />
  < Map />
</Grid>



</>
      




   
)}