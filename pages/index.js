import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import MuiLink from '@material-ui/core/Link';
import PostCard from '../src/components/post-card';
import Axios from 'axios';

function Copyright() {
    return (
        <Typography variant='body2' color='textSecondary' align='center'>
            {'Copyright © '}
            <MuiLink color='inherit' href='https://wayneshen.me'>
                Wayne Shen
            </MuiLink>{' '}
            {new Date().getFullYear()}
            {'. Built with '}
            <MuiLink color='inherit' href='https://strapi.io/'>
                striapi
            </MuiLink>
            {' & '}
            <MuiLink color='inherit' href='https://nextjs.org/'>
                nextjs
            </MuiLink>
            {' & '}
            <MuiLink color='inherit' href='https://material-ui.com/'>
                material-ui
            </MuiLink>
        </Typography>
    );
}

Index.getInitialProps = async () => {
    let posts;
    posts = await Axios.get('https://api.wayneshen.me/posts');
    return {title: 'Home', posts: posts.data};
};
export default function Index(props) {
    const posts = props.posts;

    const postCards = posts.map((item) =>
        <PostCard key={item.slug} post={item}/>
    );

    return (
        <>
            <Container maxWidth='md'>
                <Box my={12}>
                    {postCards}
                    {/*<ProTip/>*/}
                    <Copyright/>
                </Box>
            </Container>
        </>
    );
}
