import React from "react";
import { ImageUpload } from "./components/imageUpload/imageUpload";
import { StyledContainer } from "./components/container/container";
import { UnstyledTabsCustomized } from "./components/customizedTabs/customizedTabs";

function App() {
  return (
    <React.Fragment>
      <UnstyledTabsCustomized />
    </React.Fragment>
    // <StyledContainer>
    //   <ImageUpload />
    // </StyledContainer>
  );
}

export default App;
