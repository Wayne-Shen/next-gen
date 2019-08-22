import React from 'react';
import App from 'next/app';
import Layout from '../src/layout';

class MyApp extends App {
    componentDidMount() {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles.parentNode.removeChild(jssStyles);
        }
    }

    render() {
        const { Component, pageProps } = this.props;
        return (
            <Layout title={pageProps.title}>
                <Component {...pageProps} />
            </Layout>
        );
    }
}

export default MyApp;
