import React from "react";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import {Typography} from "@material-ui/core";

class Post extends React.Component {
    static async getInitialProps({query}) {

        console.log('SLUG', query.slug);
        return {
            slug: query.slug
        };
    }

    render = (props) => {
        console.log(this.slug);
        return <>
            <Container maxWidth="sm">
                <Box my={9}>

                    {/*<Typography>{props.slug}</Typography>*/}
                </Box>
            </Container>
        </>;
    }
}

export default Post;