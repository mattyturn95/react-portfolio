import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import {
    Typography,
    Avatar,
    Grid,
    Box
} from '@material-ui/core';
import avatar from '../../src/images/profileavatar.png';
import github from '../../src/images/github.png'
import Typed from 'react-typed';

// CSS STYLES

const useStyles = makeStyles(theme => ({
    avatar: {
        width: theme.spacing(15),
        height: theme.spacing(15),
        margin: theme.spacing(1)
    },
    title: {
        color: 'tomato',
    },
    subTitle: {
        color: 'tan',
        marginBottom: '3rem'
    },
    typedContainer: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: 'translate(-50%, -50%)',
        width: '100vw',
        textAlign: "center",
        zIndex: 1
    },
    headerLinkGithub: {
        color: 'tomato',
        textAlign: "center"
    }



}))

const Header = () => {
    const classes = useStyles()
    return (
        // TYPED CONTAINER FOR HEADER SECTION
        <Box className={classes.typedContainer} >
            <Grid container justify="center">
                <Avatar className={classes.avatar} src={avatar} alt="Image alt" />
            </Grid>
            <Typography className={classes.title} variant="h4">
                <Typed strings={["MATTHEW TURNER"]} typeSpeed={50} />
            </Typography>
            <br />
            <Typography className={classes.subTitle} variant="h5">
                <Typed strings={["FULL STACK WEB DEVELOPER",]} typeSpeed={50} />
            </Typography>
            <Typography className={classes.subTitle} variant="h5">
                <Typed strings={["HTML", "CSS", "PYTHON", "JAVA-SCRIPT", "DJANGO", "MYSQL", "LESS", "&", "SASS", "API'S", "REACT", "HEROKU", "GITHUB", "WORDPRESS"]} typeSpeed={50} backSpeed={60} loop />
            </Typography>



            {/* <Grid container justify="center">
                <a href="" target="_blank" > <Avatar className={classes.avatar} src={github} alt="Image alt" width="60" height="60" /></a>

            </Grid>
            <Grid container justify="center">
                <p className={classes.headerLinkGithub}>Have a look at the source code for my Portfolio</p>
            </Grid> */}



        </Box>

    )
}

export default Header
