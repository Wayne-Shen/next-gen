import * as React from "react";
import Link from "../link";
import Box from "@material-ui/core/Box";
import {makeStyles} from "@material-ui/styles";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles(() => ({
        link: {
            fontSize: 30,
            // '&:hover': {
            //     textDecoration: 'none'
            // }
        },
    }))
;

export default function PostCard(props) {
    const classes = useStyles();

    return (
        <Box>
            {/*<Avatar alt="Remy Sharp" src="https://pic.36krcnd.com/201908/27074733/qsdsqn3uzurbuun6!heading"/>*/}
            <Link underline="none" href={"/post?slug=" + props.post.slug} color="primary"
                  className={classes.link}>
                {props.post.name}
            </Link>
            <Divider absolute={true}/>
        </Box>
    );
}
