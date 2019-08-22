import Typography from '@material-ui/core/Typography';
import * as React from "react";

export default class PostCard extends React.Component {
    render() {
        return (
            <Typography variant="h4" component="h1" gutterBottom>
                Hello, {this.props.name}
            </Typography>
        );
    }
}
