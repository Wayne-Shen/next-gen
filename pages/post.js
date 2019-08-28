import React from "react";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Markdown from 'markdown-to-jsx';
import {makeStyles} from "@material-ui/styles";
import Prism from 'prismjs';


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

    const children = `
    
# Live demo 加入一些中文

Changes are automatically rendered as you type. 输入的时候会自动更新。

* Implements [GitHub Flavored Markdown](https://github.github.com/gfm/)
* Renders actual, "native" React DOM elements
* Allows you to escape or skip HTML (try toggling the checkboxes above)
* If you escape or skip the HTML, no \`dangerouslySetInnerHTML\` is used! Yay!

## HTML block below

<blockquote>
  This blockquote will change based on the HTML settings above.
</blockquote>

## How about some code?
\`\`\`js
var React = require('react');
var Markdown = require('react-markdown');

React.render(
  <Markdown source="# Your markdown here" />,
  document.getElementById('content')
);
\`\`\`

Pretty neat, eh?

## Tables?

| Feature   | Support |
| --------- | ------- |
| tables    | ✔ |
| alignment | ✔ |
| wewt      | ✔ |

## More info?

Read usage information and more on [GitHub](//github.com/rexxars/react-markdown)

---------------

A component by [Espen Hovlandsdal](https://espen.codes/)`;

    const classes = useStyles();

    // Prism.highlightAll();

    return <>
        <Container maxWidth="md">
            <Box my={9}>
                <Typography>{props.slug}</Typography>
                <div className={
                    classes.root
                }>
                    <Markdown children={children}>

                    </Markdown></div>
            </Box>
        </Container>
    </>;
}

Post.getInitialProps = async ({query}) => {

    const slug = query.slug;

    if (slug) {
        return {
            title: slug,
            slug: slug
        };
    }

    // else {
    //     await Router.push('/about')
    // }
}

export default Post;