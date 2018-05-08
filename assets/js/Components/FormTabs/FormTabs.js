import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import FormType1 from '../FormType1/FormType1';
import FormType2 from '../FormType2/FormType2';


const FormTabs = () => (
  <Tabs>
     <div>
    <TabList>
      <Tab>Page 1</Tab>
      <Tab>Page 2</Tab>
      <Tab>Page 3</Tab>  
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
      <FormType2 />  
    </TabPanel>
  </Tabs>
);

export default FormTabs