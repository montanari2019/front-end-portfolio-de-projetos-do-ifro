import { createTheme } from "@mui/material"

export const DarkTheme = createTheme({
    palette: {
        primary:{
            main: "#43A565",
            dark: "#43A565"[800],
            light: "#43A565"[400],
            contrastText: "#ffff",
        },
        secondary:{
            main: "#FFFFFF",
            dark: "#FFFFFF"[800],
            light: "#FFFFFF"[400],
            contrastText: "#ffff", 
        },
        background: {
            default: "#292B2F",
            paper:  "#303134"
        }
        
    }
})