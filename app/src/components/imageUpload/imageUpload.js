import { useState, useEffect, useRef } from "react";
import Typography from "@material-ui/core/Typography";
import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import {
  // IconButton,
  Paper,
  CardActionArea,
  CardMedia,
  Grid,
  TableContainer,
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  CircularProgress,
} from "@material-ui/core";
import { DropzoneArea } from "material-ui-dropzone";
// import Clear from "@material-ui/icons/Clear";
import { useStyles } from "./useStyles";
import axios from "axios";

/* TODO
 Use multiple tabs for the other models
 Add notification on image add and on image clear
 Add notification when prediction ends
 Create an account on AWS or Google Cloud to upload the tf model
 Try and use Heroku with AWS s3 bucket (with Cruise)
*/

export const ImageUpload = () => {
  const classes = useStyles();
  const SelectedFile = useRef(null);
  const [preview, setPreview] = useState(undefined);
  const [data, setData] = useState(undefined);
  const [image, setImage] = useState(false);
  const [isLoading, setIsloading] = useState(false);

  const sendFile = async () => {
    if (image) {
      console.log("Sending File...");
      let formData = new FormData();
      formData.append("file", SelectedFile.current);
      let res = await axios({
        method: "post",
        url: process.env.REACT_APP_API_URL,
        data: formData,
      });
      console.log(`Status is ${res.status}`);
      if (res.status === 200) {
        setIsloading(false);
        setData(res.data);
      }
    }
  };

  const clearData = () => {
    setData(null);
    setImage(false);
    SelectedFile.current = null;
    setPreview(null);
  };

  useEffect(() => {
    if (!SelectedFile.current) {
      setPreview(undefined);
      return;
    }
    // console.log(SelectedFile.current)
    const objectUrl = URL.createObjectURL(SelectedFile.current);
    setPreview(objectUrl);
  }, [SelectedFile.current]);

  useEffect(() => {
    if (!preview) {
      return;
    }
    setIsloading(true);
    sendFile();
  }, [preview]);

  const onSelectFile = (files) => {
    if (!files || files.length === 0) {
      SelectedFile.current = undefined;
      setImage(false);
      setData(undefined);
      return;
    }
    SelectedFile.current = files[0];
    setImage(true);
  };

  return ( 
    <React.Fragment>
      <Grid item xs={12}>
            <Card
              className={`${classes.imageCard} ${
                !image ? classes.imageCardEmpty : ""
              }`}
            >
              {image && (
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image={preview}
                    component="image"
                    title=""
                    onClick={clearData}
                  />
                  {/* <IconButton
                    size="medium"
                    className={classes.clearButton}
                    component={Clear}
                    onClick={clearData}
                    variant="contained"
                  ></IconButton> */}
                </CardActionArea>
              )}
              {!image && (
                <CardContent className={classes.content}>
                  <DropzoneArea
                    acceptedFiles={["image/*"]}
                    dropzoneText={
                      "Drag and drop an image of a potato plant leaf here"
                    }
                    onChange={onSelectFile}
                  />
                </CardContent>
              )}
              {data && (
                <CardContent className={classes.detail}>
                  <TableContainer
                    component={Paper}
                    className={classes.tableContainer}
                  >
                    <Table
                      className={classes.table}
                      size="small"
                      aria-label="simple table"
                    >
                      <TableHead className={classes.tableHead}>
                        <TableRow className={classes.tableRow}>
                          <TableCell className={classes.tableCell1}>
                            Label:
                          </TableCell>
                          <TableCell
                            align="right"
                            className={classes.tableCell1}
                          >
                            Confidence:
                          </TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody className={classes.tableBody}>
                        <TableRow className={classes.tableRow}>
                          <TableCell
                            component="th"
                            scope="row"
                            className={classes.tableCell}
                          >
                            {data.class}
                          </TableCell>
                          <TableCell
                            align="right"
                            className={classes.tableCell}
                          >
                            {(parseFloat(data.confidence) * 100).toFixed(2)}%
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </TableContainer>
                </CardContent>
              )}
              {isLoading && (
                <CardContent className={classes.detail}>
                  <CircularProgress
                    color="secondary"
                    className={classes.loader}
                  />
                  <Typography className={classes.title} variant="h6" noWrap>
                    Predicting...
                  </Typography>
                </CardContent>
              )}
            </Card>
          </Grid>
          {data && (
            <Grid item className={classes.buttonGrid}>
            </Grid>
          )}
    </React.Fragment>
  );
};
