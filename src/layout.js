import React from 'react';
import {Container} from 'next/app';
import Head from 'next/head';
import {ThemeProvider} from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../src/theme';
import SearchAppBar from "./components/sp-head";
import {InitAnalytics, LogPageView} from './utilities/analytics';

class Layout extends React.Component {

    componentDidMount() {

        if (!window.GA_INITIALIZED) {
            InitAnalytics();
            window.GA_INITIALIZED = true
        }
        LogPageView();
    }

    render() {
        const {children} = this.props;
        return (
            <Container>
                <Head>
                    <title>{children.props.title}</title>
                </Head>
                <ThemeProvider theme={theme}>
                    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                    <CssBaseline/>

                    <SearchAppBar/>
                    {children}
                </ThemeProvider>
            </Container>
        );
    }
}

export default Layout;
