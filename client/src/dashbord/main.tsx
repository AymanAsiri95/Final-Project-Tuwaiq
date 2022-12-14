
//   import Genral from "./extra/genral";
//   import Tenet from "./extra/tenet";
import DashGrid from "./grid";
import AllBuilding from "./allB/all-building";
import Custmer from "./allB/custmer";

import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

  import { Divider } from '@chakra-ui/react'
  export default function Dashbord() {
    return (
        <>

<Tabs>
  <TabList>
    <Tab>احصائيات عامة</Tab>
    <Tab>تصفع جميع العقارات</Tab>
    <Tab>تصفح جميع العملاء</Tab>
  </TabList>

  <TabPanels>
    <TabPanel>
                    <DashGrid/>
    </TabPanel>
    <TabPanel>
                   <AllBuilding/>
    </TabPanel>
    <TabPanel>
    <Custmer/>
    </TabPanel>
  </TabPanels>
</Tabs>
        </>
 )}