import React from "react";
import TabsUnstyled from "@mui/base/TabsUnstyled";
import { Tab, TabPanel, TabsList } from "./tabStyles";
import { ImageUpload } from "../imageUpload/imageUpload";
// import { StyledContainer } from "../container/container";
import { StyledContainerForTabs } from "../container/containerForTabs";

export function UnstyledTabsCustomized(props) {
  return (
    <TabsUnstyled defaultValue={0}>
      <TabsList>
        <Tab>Potato Disease Classification</Tab>
        <Tab disabled={true}>Tomato Disease Classification</Tab>
        <Tab disabled={true}>Pepper Bell Disease Classification</Tab>
      </TabsList>
      <TabPanel value={0}>
        <StyledContainerForTabs>
          <ImageUpload />
        </StyledContainerForTabs>
      </TabPanel>
      <TabPanel value={1}>
        <h1>Comming Soon...</h1>
      </TabPanel>
      <TabPanel value={2}>
        <h1>Comming Soon...</h1>
      </TabPanel>
    </TabsUnstyled>
  );
}
