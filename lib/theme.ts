import { grey } from "@material-ui/core/colors"
import {createMuiTheme} from "@material-ui/core/styles"


const darkTheme = createMuiTheme({
    palette: {
        primary: {
            main: grey[200]
        },
        secondary: {
            main: grey[400]
        },
        type: "dark"
    }
})

const lightTheme = createMuiTheme({
    palette: {
        primary: {
            main: grey[800]
        },
        secondary: {
            main: grey[900]
        },
        type: "light"
    }
})

export {darkTheme, lightTheme}