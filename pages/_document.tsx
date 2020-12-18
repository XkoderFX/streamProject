import { ServerStyleSheets } from "@material-ui/core";
import { NextPageContext } from "next";
import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
    static async getInitialProps(ctx: NextPageContext) {
        const initialProps = await Document.getInitialProps(ctx as any); // BUG: may not receive without convert the context to any;
        const originalRenderPage = ctx.renderPage;



        const sheets = new ServerStyleSheets();

        ctx

        return { ...initialProps };
    }

    render() {
        return (
            <Html>
                <Head></Head>
                <body>
                    <Main></Main>
                    <NextScript></NextScript>
                </body>
            </Html>
        );
    }   
}
