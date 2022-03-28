import { makeStyles } from "@material-ui/core/styles";
import image from "../../farmbg.jpg";


export const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1,
    },
    appbar: {
        background: '#33cc33',
        boxShadow: 'none',
        color: 'white'
    },
    gridContainer: {
        justifyContent: "center",
        padding: "4em 1em 0 1em",
    },
    mainContainer: {
        backgroundImage: `url(${image})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        height: "92vh",
        marginTop: "8px",
    },
}));