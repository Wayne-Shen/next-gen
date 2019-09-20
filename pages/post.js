import React from "react";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Markdown from 'markdown-to-jsx';
import {makeStyles} from "@material-ui/styles";
import Axios from "axios";


const useStyles = makeStyles(() => ({
        root: {
            // fontFamily: 'Arial',
            fontSize: 20
            // '&:hover': {
            //     textDecoration: 'none'
            // }
        },
    }))
;


const Post = (props) => {

    // let body;
    // useEffect(async () => {
    //     const response = await Axios.get('https://api.wayneshen.me/posts');
    //     body = response.data[0].body;
    // })

    const children = `
    
`;

    const classes = useStyles();

    // Prism.highlightAll();

    return <>
        <Container maxWidth="md">
            <Box my={9}>
                <Typography>{props.slug}</Typography>
                <div className={
                    classes.root
                }>
                    <Markdown children={props.item}>

                    </Markdown></div>
            </Box>
        </Container>
    </>;
}

Post.getInitialProps = async ({query}) => {

    const slug = query.slug;
    const response = await Axios.get(`https://api.wayneshen.me/posts?slug=${slug}`);

    if (slug) {
        return {
            title: slug,
            slug: slug,
            item: response.data[0].body
        };
    }

    // else {
    //     await Router.push('/about')
    // }
}

export default Post;