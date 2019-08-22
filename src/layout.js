import React from 'react';
import { Container } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../src/theme';
import SearchAppBar from "./components/sp-head";

class Layout extends React.Component {
    render() {
        const { children } = this.props;
        console.log(children.props.title);
        return (
            <Container>
                <Head>
                    <title>{children.props.title}</title>
                </Head>
                <ThemeProvider theme={theme}>
                    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                    <CssBaseline />

                    <SearchAppBar />
                    {children}
                </ThemeProvider>
            </Container>
        );
    }
}

export default Layout;
