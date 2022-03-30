import React from "react";
import Container from "@material-ui/core/Container";
import { Grid } from "@material-ui/core";
import { useStyles } from "./containerStyles";

export const StyledContainerForTabs = ({ children }) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Container
        maxWidth={false}
        className={classes.mainContainer}
        disableGutters={true}
      >
        <Grid
          className={classes.gridContainer}
          container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={2}
        ></Grid>
        {children}
      </Container>
    </React.Fragment>
  );
};
