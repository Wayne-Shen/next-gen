import React from "react";

class Post extends React.Component {
    static async getInitialProps({query}) {

        console.log('SLUG', query.slug);
        return {
            slug: query.slug
        };
    }

    render = slug => {
        console.log(slug);
        return <h1>My blog post {slug} </h1>;
    }
}

export default Post;