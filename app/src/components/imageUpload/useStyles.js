import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    clearButton: {
        width: "-webkit-fill-available",
        position: "absolute",
        top: "5px",
        right: "5px",
        // borderRadius: "15px",
        // padding: "5px 5px",
        color: "#e60000",
        // fontSize: "10px",
        // fontWeight: 900,
    },
    root: {
        maxWidth: 345,
        flexGrow: 1,
    },
    media: {
        height: 400,
    },
    paper: {
        padding: theme.spacing(2),
        margin: 'auto',
        maxWidth: 500,
    },
    imageCard: {
        margin: "auto",
        maxWidth: 400,
        height: 500,
        backgroundColor: 'transparent',
        boxShadow: '0px 9px 70px 0px rgb(0 0 0 / 30%) !important',
        borderRadius: '15px',
    },
    imageCardEmpty: {
        height: 'auto',
    },
    noImage: {
        margin: "auto",
        width: 400,
        height: "400 !important",
    },
    input: {
        display: 'none',
    },
    uploadIcon: {
        background: 'white',
    },
    tableContainer: {
        backgroundColor: 'transparent !important',
        boxShadow: 'none !important',
    },
    table: {
        // backgroundColor: 'transparent !important',
        border: 5,
        borderColor: "white"
    },
    tableHead: {
        // backgroundColor: 'transparent !important',
    },
    tableRow: {
        backgroundColor: 'transparent !important',
    },
    tableCell: {
        fontSize: '18px',
        backgroundColor: 'transparent !important',
        borderColor: 'transparent !important',
        color: '#000000a6 !important',
        fontWeight: 'bolder',
        padding: '1px 24px 1px 16px',
    },
    tableCell1: {
        fontSize: '14px',
        backgroundColor: 'transparent !important',
        borderColor: 'transparent !important',
        color: '#000000a6 !important',
        fontWeight: 'bolder',
        padding: '1px 24px 1px 16px',
    },
    tableBody: {
        backgroundColor: 'transparent !important',
    },
    text: {
        color: 'white !important',
        textAlign: 'center',
    },
    buttonGrid: {
        maxWidth: "416px",
        width: "fit-content",
    },
    detail: {
        backgroundColor: 'white',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
    },
    loader: {
        color: '#3399ff !important',
    }
}));