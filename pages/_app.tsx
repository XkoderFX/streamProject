import React from "react";
import App from "next/app";
import { CssBaseline, ThemeProvider } from "@material-ui/core";
import { darkTheme, lightTheme } from "../lib/theme";

const app: React.FC<{ Component: any; pageProps: any }> = ({
    Component,
    pageProps,
}) => {
    return (
        <ThemeProvider theme={false ? darkTheme : lightTheme}>
            <CssBaseline />
            <Component {...pageProps} />
        </ThemeProvider>
    );
};

export default app;
