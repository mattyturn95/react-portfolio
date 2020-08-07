import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Box,
    Card,
    Grid,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography
} from '@material-ui/core';
import Navbar from './Navbar';
import project1 from '../images/image.png';
import project2 from '../images/hangerlogo.png';
import project3 from '../images/openweather.png';
import project4 from '../images/aot.png';
import project5 from '../images/whiskeydrop.png';
import project6 from '../images/hikeroutes.png';
import project7 from '../images/portfolio.png';
import project8 from '../images/myrecipe.png';
import project9 from '../images/snakegame.png';
import project10 from '../images/profileavatar.png';

const useStyles = makeStyles({
    mainContainer: {
        background: "#233",
        height: "100%"
    },
    cardContainer: {
        maxWidth: 345,
        margin: "3rem ",
        margin: "5rem auto"
    },
    a: {
        textDecoration: "none"
    }
})

const Portfolio = () => {
    const classes = useStyles();
    return (
        // PORTFOLIO CARDS 
        <Box component="div" className={classes.mainContainer}>
            <Navbar />
            <Grid container justify="center">
                {/* project-1 */}
                <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="project1"
                                height="auto"
                                image={project1}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    Covid-19 Tracker App
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Lorem ipsum dolar immut lorem ipsum dolar imotLorem ipsum dolar immut lorem ipsum dolar imotLorem ipsum dolar immut lorem ipsum dolar imot
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <a href="https://covid-19-tracker-app-19.herokuapp.com/" target="_blank" classname={classes.navlink}><Button size="small" color="primary">
                                    Live Preview
                                </Button></a>
                                <a href="https://github.com/mattyturn95/covid-19-react-app" target="_blank" classname={classes.navlink}><Button size="small" color="secondary">
                                    Source Code
                                </Button></a>

                            </CardActions>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContainer}>
                        <cardActionArea>
                            <CardMedia
                                component="img"
                                alt="project1"
                                height="auto"
                                image={project7}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    Wordpress Portfolio
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Lorem ipsum dolar immut lorem ipsum dolar imotLorem ipsum dolar immut lorem ipsum dolar imotLorem ipsum dolar immut lorem ipsum dolar imot
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <a href="https://matthewturnerwebdesign.com/" target="_blank" classname={classes.navlink}><Button size="small" color="primary">
                                    Live Preview
                                </Button></a>


                            </CardActions>
                        </cardActionArea>
                    </Card>

                </Grid>
                <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContainer}>
                        <cardActionArea>
                            <CardMedia
                                component="img"
                                alt="project2"
                                height="auto"
                                image={project10}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    React Portfolio
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Lorem ipsum dolar immut lorem ipsum dolar imotLorem ipsum dolar immut lorem ipsum dolar imotLorem ipsum dolar immut lorem ipsum dolar imot
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <a href="https://thehanger.ie/" target="_blank" classname={classes.navlink}><Button size="small" color="primary">
                                    Live Preview
                                </Button></a>
                                <a href="https://thehanger.ie/" target="_blank" classname={classes.navlink}><Button size="small" color="primary">
                                    Live Preview
                                </Button></a>
                                


                            </CardActions>
                        </cardActionArea>
                    </Card>
                </Grid>
                {/* project-2 */}
                <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContainer}>
                        <cardActionArea>
                            <CardMedia
                                component="img"
                                alt="project2"
                                height="auto"
                                image={project2}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    The Hanger Boutqiue
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Lorem ipsum dolar immut lorem ipsum dolar imotLorem ipsum dolar immut lorem ipsum dolar imotLorem ipsum dolar immut lorem ipsum dolar imot
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <a href="https://thehanger.ie/" target="_blank" classname={classes.navlink}><Button size="small" color="primary">
                                    Live Preview
                                </Button></a>


                            </CardActions>
                        </cardActionArea>
                    </Card>
                </Grid>
                {/* project-3 */}
                <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContainer}>
                        <cardActionArea>
                            <CardMedia
                                component="img"
                                alt="project1"
                                height="auto"
                                image={project3}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    Weather App / React
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Lorem ipsum dolar immut lorem ipsum dolar imotLorem ipsum dolar immut lorem ipsum dolar imotLorem ipsum dolar immut lorem ipsum dolar imot
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <a href="https://weather-app-react-1.herokuapp.com/" target="_blank" classname={classes.navlink}><Button size="small" color="primary">
                                    Live Preview
                                </Button></a>
                                <a href="https://mattyturn95.github.io/react-weather-app/" target="_blank" classname={classes.navlink}><Button size="small" color="secondary">
                                    Source Code
                                </Button></a>

                            </CardActions>
                        </cardActionArea>
                    </Card>
                </Grid>
                {/* project-4 */}
                <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContainer}>
                        <cardActionArea>
                            <CardMedia
                                component="img"
                                alt="project1"
                                height="auto"
                                image={project4}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    August Oak Tree
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Lorem ipsum dolar immut lorem ipsum dolar imotLorem ipsum dolar immut lorem ipsum dolar imotLorem ipsum dolar immut lorem ipsum dolar imot
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <a href="https://mattyturn95.github.io/august-oak-tree-milestone-project/index.html" target="_blank" classname={classes.navlink}><Button size="small" color="primary">
                                    Live Preview
                                </Button></a>
                                <a href="https://github.com/mattyturn95/august-oak-tree-milestone-project" target="_blank" classname={classes.navlink}><Button size="small" color="secondary">
                                    Source Code
                                </Button></a>

                            </CardActions>
                        </cardActionArea>
                    </Card>

                </Grid>
                <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContainer}>
                        <cardActionArea>
                            <CardMedia
                                component="img"
                                alt="project1"
                                height="auto"
                                image={project5}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    Whiskey Drop Test Landing
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Lorem ipsum dolar immut lorem ipsum dolar imotLorem ipsum dolar immut lorem ipsum dolar imotLorem ipsum dolar immut lorem ipsum dolar imot
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <a href="https://mattyturn95.github.io/whiskey-drop/" target="_blank" classname={classes.navlink}><Button size="small" color="primary">
                                    Live Preview
                                </Button></a>
                                <a href="https://github.com/mattyturn95/whiskey-drop" target="_blank" classname={classes.navlink}><Button size="small" color="secondary">
                                    Source Code
                                </Button></a>

                            </CardActions>
                        </cardActionArea>
                    </Card>

                </Grid>
                <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContainer}>
                        <cardActionArea>
                            <CardMedia
                                component="img"
                                alt="project1"
                                height="auto"
                                image={project6}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    Hike Routes - Rate and insert your own
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Lorem ipsum dolar immut lorem ipsum dolar imotLorem ipsum dolar immut lorem ipsum dolar imotLorem ipsum dolar immut lorem ipsum dolar imot
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <a href="https://hike-routes-ms3-code-institute.herokuapp.com/" target="_blank" classname={classes.navlink}><Button size="small" color="primary">
                                    Live Preview
                                </Button></a>
                                <a href="https://github.com/mattyturn95/august-oak-tree-milestone-project" target="_blank" classname={classes.navlink}><Button size="small" color="secondary">
                                    Source Code
                                </Button></a>

                            </CardActions>
                        </cardActionArea>
                    </Card>

                </Grid>
                <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContainer}>
                        <cardActionArea>
                            <CardMedia
                                component="img"
                                alt="project1"
                                height="auto"
                                image={project8}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    React Recipe App
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Lorem ipsum dolar immut lorem ipsum dolar imotLorem ipsum dolar immut lorem ipsum dolar imotLorem ipsum dolar immut lorem ipsum dolar imot
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <a href="https://food-recipes-app-react.herokuapp.com/" target="_blank" classname={classes.navlink}><Button size="small" color="primary">
                                    Live Preview
                                </Button></a>


                            </CardActions>
                        </cardActionArea>
                    </Card>

                </Grid>
                <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContainer}>
                        <cardActionArea>
                            <CardMedia
                                component="img"
                                alt="project1"
                                height="auto"
                                image={project9}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    Simple Snake Game
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Lorem ipsum dolar immut lorem ipsum dolar imotLorem ipsum dolar immut lorem ipsum dolar imotLorem ipsum dolar immut lorem ipsum dolar imot
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <a href="https://mattyturn95.github.io/Snake-Game/" target="_blank" classname={classes.navlink}><Button size="small" color="primary">
                                    Live Preview
                                </Button></a>
                                <a href="https://github.com/mattyturn95/Snake-Game" target="_blank" classname={classes.navlink}><Button size="small" color="secondary">
                                    Source Code
                                </Button></a>

                            </CardActions>
                        </cardActionArea>
                    </Card>

                </Grid>
            </Grid>
        </Box>
    )
}

export default Portfolio
