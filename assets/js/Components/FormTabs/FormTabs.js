import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import FormType1 from '../Forms/FormType1';
import FormType2 from '../Forms/FormType2';
import FormEU from '../Forms/FormEU'

const FormTabs = () => (
  <Tabs>
     <div>
    <TabList>
      <Tab>Page 1</Tab>
      <Tab>Page 2</Tab>
      <Tab>Page 3</Tab>
      <Tab>EU</Tab>    
    </TabList>
    </div>
    <TabPanel>
      <FormType1 />
    </TabPanel>
    <TabPanel>
      <FormType2 />
    </TabPanel>
    <TabPanel>
      <FormType1 /> 
    </TabPanel>
    <TabPanel>
      <FormEU /> 
    </TabPanel>
  </Tabs>
);

export default FormTabs