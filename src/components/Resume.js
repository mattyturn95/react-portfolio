import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Box } from '@material-ui/core';
import Navbar from './Navbar';


// CSS STYLES

const useStyles = makeStyles(theme => ({
    mainContainer: {
        background: '#233'
    },
    timeLine: {
        position: "relative",
        padding: "1rem",
        margin: "0 auto",
        "&:before": {
            content: "''",
            position: "absolute",
            height: '100%',
            border: "1px solid tan",
            right: "40px",
            top: 0,
        },
        "&:after": {
            content: "''",
            display: "table",
            clear: "both"
        },
        [theme.breakpoints.up("md")]: {
            padding: "2rem",
            "&:before": {
                left: "calc(50% - 1px)",
                right: "auto"
            }
        }
    },
    timeLineItem: {
        padding: "1rem",
        borderBottom: " 2px solid tan ",
        position: "relative",
        margin: "1rem 3rem 1rem 1rem",
        clear: "both",
        "&:after": {
            content: "''",
            position: "absolute",
        },
        "&:before": {
            content: "''",
            position: "absolute",
            right: "-0.625rem",
            top: "calc(50% - 5px)",
            borderColor: "tomato tomato transparent transparent",
            borderWidth: "0.625rem",
            transform: "rotate(45deg)"
        },
        [theme.breakpoints.up("md")]: {
            width: "44%",
            margin: "1rem ",
            "&:nth-of-type(2n)": {
                float: "right",
                margin: "1rem",
                bordercolor: "tan"
            },
            "&:nth-of-type(2n):before": {
                right: "auto",
                left: "-0.625rem",
                borderColor: "transparent transparent tomato tomato"

            }

        }



    },
    timeLineYear: {
        textAlign: "center",
        maxWidth: "9.375rem",
        margin: "0 3rem 0 auto",
        fontSize: "1.8rem",
        background: "tomato",
        color: "white",
        lineHeight: 1,
        padding: "0.5rem 0 1rem",
        "&:before": {
            display: "none"
        },
        [theme.breakpoints.up("md")]: {
            textAlign: "center",
            margin: "0 auto",
            "&:nth-of-type(2n)": {
                float: "none",
                margin: "0 auto"
            },
            "&:nth-of-type(2n):before": {
                display: "none"
            }
        }
    },
    heading: {
        color: "tomato",
        padding: "3rem 0",
        textTransform: "uppercase"
    },
    subHeading: {
        color: "white",
        padding: "0",
        textTransform: "uppercase"
    }


}));

const Resume = () => {
    const classes = useStyles();
    return (
        <div>
            <Navbar />
            <Box component="header" className={classes.mainContainer}>
                <Typography variant="h4" align="center" className={classes.heading}>
                    work experience / Education
                </Typography>
                <Box component="div" className={classes.timeLine}>
                    <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                        2016
                    </Typography>
                    <Box component="div" className={classes.timeLineItem}>
                        <Typography variant="h5" align="center" className={classes.subHeading}>
                            Sales Executive
                        </Typography>
                        <Typography variant="body1" align="center" style={{ color: "tomato" }}>
                            Burquip International, Cape Town, South Africa
                        </Typography>
                        <Typography variant="subtitle1" align="center" style={{ color: "tan" }}>
                            Responsible for dealing with customer accounts and overseeing the retail of the products that the company had to offer.
                        </Typography>

                    </Box>
                    <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                        2017
                    </Typography>
                    <Box component="div" className={classes.timeLineItem}>
                        <Typography variant="h5" align="center" className={classes.subHeading}>
                            Manager
                        </Typography>
                        <Typography variant="body1" align="center" style={{ color: "tomato" }}>
                            Basic Bistro, Stellenbosch South Africa
                        </Typography>
                        <Typography variant="subtitle1" align="center" style={{ color: "tan" }}>
                            Whilst studying towards a BBA in Marketing at the Institute of Marketing and Management school of Stellenbosch, I was working part-time as the Second manager for a busy restaurant in the heart of Stellenbosch
                        </Typography>
                    </Box>
                    <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                        2017
                    </Typography>
                    <Box component="div" className={classes.timeLineItem}>
                        <Typography variant="h5" align="center" className={classes.subHeading}>
                            BBA In Marketing and Management
                        </Typography>
                        <Typography variant="body1" align="center" style={{ color: "tomato" }}>
                            IMM Institute for Marketing and Management
                        </Typography>
                        <Typography variant="subtitle1" align="center" style={{ color: "tan" }}>
                            Stellenbosch, South Africa
                        </Typography>

                    </Box>
                    <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                        2018
                    </Typography>
                    <Box component="div" className={classes.timeLineItem}>
                        <Typography variant="h5" align="center" className={classes.subHeading}>
                            Diploma In Full Stack Web Development
                        </Typography>
                        <Typography variant="body1" align="center" style={{ color: "tomato" }}>
                            Code Institute - Dublin
                        </Typography>
                        <Typography variant="subtitle1" align="center" style={{ color: "tan" }}>
                            Grade 2nd class honours
                        </Typography>
                    </Box>
                    <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                        2019
                    </Typography>
                    <Box component="div" className={classes.timeLineItem}>
                        <Typography variant="h5" align="center" className={classes.subHeading}>
                            The Hanger Boutique Waterford
                        </Typography>
                        <Typography variant="body1" align="center" style={{ color: "tomato" }}>
                            Website Design
                        </Typography>
                        <Typography variant="subtitle1" align="center" style={{ color: "tan" }}>
                            Designed & developed a boutique clothing store Website.
                        </Typography>
                    </Box>
                    <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                        2019-2020
                    </Typography>
                    <Box component="div" className={classes.timeLineItem}>
                        <Typography variant="h5" align="center" className={classes.subHeading}>
                            Udemy Courses
                        </Typography>
                        <Typography variant="body1" align="center" style={{ color: "tomato" }}>
                            Short Courses
                        </Typography>
                        <Typography variant="subtitle1" align="center" style={{ color: "tan" }}>
                            - React the complete guide <br/>
                            - Better way towards Less & Sass <br/>
                            - 2020 Complete Python Bootcamp <br/>
                            - MongoDb The complete developers guide <br />
                        </Typography>
                    </Box>
                </Box>
            </Box>

        </div>
    )
}

export default Resume
