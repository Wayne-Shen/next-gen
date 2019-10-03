import React, {useEffect} from "react";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/styles";
import Axios from "axios";
import ReactMarkdown from "react-markdown";
import Prism from "prismjs";
import 'prismjs/components/prism-json';
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-java';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-yaml';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-http';


const useStyles = makeStyles(() => ({
        root: {
            // fontFamily: 'Arial',
            fontSize: 18
            // '&:hover': {
            //     textDecoration: 'none'
            // }
        },
    }))
;


const Post = (props) => {

    useEffect(() => {
        Prism.highlightAll();
    });
    const classes = useStyles();

    return <>
        <Container maxWidth="md">
            <Box my={9}>
                <Typography>{props.slug}</Typography>
                <div className={
                    classes.root
                }>
                    <ReactMarkdown source={props.item}/>
                </div>
            </Box>
        </Container>
    </>;
};

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
};

export default Post;