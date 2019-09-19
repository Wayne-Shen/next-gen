import * as React from "react";
import Link from "../link";
import Box from "@material-ui/core/Box";
import {makeStyles} from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import ButtonBase from "@material-ui/core/ButtonBase";
import {Hidden} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(() => ({
        root: {
            flexGrow: 1,
            marginBottom: 20,
        },
        link: {
            fontSize: 20,
            // '&:hover': {
            //     textDecoration: 'none'
            // }
        },

        tag: {
            fontSize: '0.875rem',
            color:'#ff9933',
            // '&:hover': {
            //     textDecoration: 'none'
            // }
        },
        paper: {
            padding: 5,
        },

        img: {
            margin: 'auto',
            display: 'block',
            maxWidth: '100%',
            maxHeight: '100%',
        },
    }))
;

export default function PostCard(props) {
    const classes = useStyles();

    return (

        <div className={classes.root}>
            <Paper className={classes.paper}>
                <Grid container>
                    <Hidden xsDown>
                        <Grid item xs={12} sm={4}>
                            <ButtonBase className={classes.image}>
                                <img className={classes.img} alt="complex"
                                     src="https://material-ui.com/static/images/grid/complex.jpg"/>
                            </ButtonBase>
                        </Grid>
                    </Hidden>
                    <Grid item xs={12} sm={8}>
                        <Box>

                            <Link underline="none" href={"/post?slug=" + props.post.slug} color="primary"
                                  className={classes.link}>
                                {props.post.name}
                            </Link>
                            <Typography variant="button" component="h5">
                                <Link underline="none" href={"/post?slug=" + props.post.slug} color="textPrimary"
                                      className={classes.tag}>
                                    {props.post.tag}
                                </Link> @ {props.post.date}
                            </Typography>
                            <Typography variant="subtitle1" component="h5">
                                {props.post.info}
                            </Typography>
                        </Box>

                    </Grid>
                </Grid>
            </Paper>

        </div>

    );
}
