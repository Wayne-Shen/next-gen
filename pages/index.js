import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import MuiLink from '@material-ui/core/Link';
import Link from '../src/link';
import Axios from 'axios';
import ProTip from "../src/pro-tip";
import PostCard from "../src/components/post-card";

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <MuiLink color="inherit" href="https://material-ui.com/">
                Your Website
            </MuiLink>{' '}
            {new Date().getFullYear()}
            {'. Built with '}
            <MuiLink color="inherit" href="https://material-ui.com/">
                Material-UI.
            </MuiLink>
        </Typography>
    );
}

Index.getInitialProps = async ({req}) => {
    console.log('start from client');
    const posts = await Axios.get('https://api.wayneshen.me/posts');
    return {title: 'Home', posts: posts.data};
};
export default function Index(props) {
    let posts = <div/>;


    return (
        <>
            <Container maxWidth="sm">
                <Box my={9}>
                    {posts}
                    <PostCard name="hello"/>
                    <PostCard name="Again"/>

                    <Link href="/about" color="secondary">
                        Go to the about page
                    </Link>
                    <ProTip/>
                    <Copyright/>
                </Box>
            </Container>
        </>
    );
}
