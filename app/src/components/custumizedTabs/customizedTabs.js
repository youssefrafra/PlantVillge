import * as React from 'react';
import TabsUnstyled from '@mui/base/TabsUnstyled';
import {Tab, TabPanel, TabsList, } from "tabStyles";
import { ImageUpload } from '../imageUpload/imageUpload';


export default function UnstyledTabsCustomized(props) {
  return (
    <TabsUnstyled defaultValue={0}>
      <TabsList>
        <Tab>One</Tab>
        <Tab>Two</Tab>
        <Tab>Three</Tab>
      </TabsList>
      <TabPanel value={0}>First content</TabPanel>
      <TabPanel value={1}>Second content</TabPanel>
      <TabPanel value={2}>Third content</TabPanel>
    </TabsUnstyled>
  );
}