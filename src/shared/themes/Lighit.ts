import { createTheme } from "@mui/material"

export const LightTheme = createTheme({
    palette: {
        primary:{
            main: "#43A565",
            dark: "#43A565"[800],
            light: "#43A565"[400],
            contrastText: "#ffff",
        },
        secondary:{
            main: "#000000",
            dark: "#000000"[800],
            light: "#000000"[400],
            contrastText: "#ffff", 
        },
        background: {
            default: "#ffff",
            paper:  "#FFFFFF"
        }
        
    }
})