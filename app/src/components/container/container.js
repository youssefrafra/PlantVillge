import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Avatar from "@material-ui/core/Avatar";
import Container from "@material-ui/core/Container";
import leaf from "../../leaf.png";
import { Grid } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { useStyles } from "./containerStyles";

export const StyledContainer = ({ children }) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <AppBar position="static" className={classes.appbar}>
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            Potato Disease Classification
          </Typography>
          <div className={classes.grow} />
          <Avatar variant="square" alt="Leaf Logo" src={leaf}></Avatar>
        </Toolbar>
      </AppBar>
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
