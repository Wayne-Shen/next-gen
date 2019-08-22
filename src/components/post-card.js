import * as React from "react";
import Link from "../link";

import Divider from "@material-ui/core/Divider";
import {Card, CardHeader, Paper} from "@material-ui/core";
import Box from "@material-ui/core/Box";

export default class PostCard extends React.Component {
    render() {
        return (
            <Box>
            <Card>
                <CardHeader>
                    <Link href={"/post?slug=" + this.props.name} color="primary">
                        Card content.
                    </Link>
                </CardHeader>
            </Card>

                <Link href={"/post?slug=" + this.props.name} color="primary">
                    Read More...
                </Link>
            </Box>
        );
    }
}
