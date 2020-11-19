import React, {Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import InputBase from '@material-ui/core/InputBase';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {fade, makeStyles} from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import LogoutIcon from '@material-ui/icons/PowerSettingsNew';


import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import FavoitesIcon from '@material-ui/icons/Favorite';
import MoviesIcon from '@material-ui/icons/Movie';
import SeriesIcon from '@material-ui/icons/Theaters';
import GenreIcon from '@material-ui/icons/NavigateNext';


import {HOME_PAGE_ROUTE, FAVORITES_PAGE_ROUTE, LOGIN_PAGE_ROUTE, MOVIES_PAGE_ROUTE, SERIES_PAGE_ROUTE, ACTION_GENRE_PAGE_ROUTE, DRAMA_GENRE_PAGE_ROUTE, COMEDY_GENRE_PAGE_ROUTE, ROMANCE_GENRE_PAGE_ROUTE, CRIME_GENRE_PAGE_ROUTE, THRILLER_GENRE_PAGE_ROUTE, FAMILY_GENRE_PAGE_ROUTE, SEARCH_PAGE_ROUTE} from '../../pages/applicationRoutes'


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
    title: {
        flexGrow: 1,
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    },
    searchIcon: {
        width: theme.spacing(7),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 7),
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: 150,
            '&:focus': {
                width: 400,
            },
        },
    },
    list: {
        width: 250
    }
}));


function AppHeader(props) {

    const [state, setState] = React.useState({
        isOpened: false,
        search: ''
    });

    const toggleDrawer = (open) => event => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({...state, isOpened: open});
    };

    const openLogin = (e) => {
        props.history.push(LOGIN_PAGE_ROUTE);
    };

    const openHome = (e) => {
        props.history.push(HOME_PAGE_ROUTE);
    };

    const openFavorites = (e) => {
        props.history.push(FAVORITES_PAGE_ROUTE);
    };

    const openMovies = (e) => {
        props.history.push(MOVIES_PAGE_ROUTE);
    };
    const openSeries = (e) => {
        props.history.push(SERIES_PAGE_ROUTE);
    };

    const openAction = (e) => {
        props.history.push(ACTION_GENRE_PAGE_ROUTE);
    };

    const openDrama = (e) => {
        props.history.push(DRAMA_GENRE_PAGE_ROUTE);
    };

    const openRomance = (e) => {
         props.history.push(ROMANCE_GENRE_PAGE_ROUTE);
    };

    const openComedy = (e) => {
         props.history.push(COMEDY_GENRE_PAGE_ROUTE);
    };

    const openCrime = (e) => {
         props.history.push(CRIME_GENRE_PAGE_ROUTE);
    };

    const openThriller = (e) => {
         props.history.push(THRILLER_GENRE_PAGE_ROUTE);
    };

    const openFamily = (e) => {
         props.history.push(FAMILY_GENRE_PAGE_ROUTE);
    };

    const classes = useStyles();

    const sideList = () => (
        <div
            className={classes.list}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
            style={{marginTop: '64px'}}
        >
            <List>
                <ListItem button key="home" onClick = {openHome}>
                    <ListItemIcon ><HomeIcon/></ListItemIcon>
                    <ListItemText primary="Home" />
                </ListItem>
                <ListItem button key="favorites" onClick = {openFavorites}>
                    <ListItemIcon ><FavoitesIcon/></ListItemIcon>
                    <ListItemText primary="Favourites" />
                </ListItem>
                <ListItem button key="movies" onClick = {openMovies}>
                    <ListItemIcon ><MoviesIcon/></ListItemIcon>
                    <ListItemText primary="Movies" />
                </ListItem>
                <ListItem button key="series" onClick = {openSeries}>
                    <ListItemIcon ><SeriesIcon/></ListItemIcon>
                    <ListItemText primary="Series" />
                </ListItem>
                <hr/>
                <ListItem button key="action" onClick = {openAction}>
                    <ListItemIcon ><GenreIcon/></ListItemIcon>
                    <ListItemText primary="Action" />
               </ListItem>
               <ListItem button key="comedy" onClick = {openComedy}>
                    <ListItemIcon ><GenreIcon/></ListItemIcon>
                    <ListItemText primary="Comedy" />
               </ListItem>
               <ListItem button key="drama" onClick = {openDrama}>
                    <ListItemIcon ><GenreIcon/></ListItemIcon>
                    <ListItemText primary="Drama" />
               </ListItem>
               <ListItem button key="romance" onClick = {openRomance}>
                    <ListItemIcon ><GenreIcon/></ListItemIcon>
                    <ListItemText primary="Romance" />
               </ListItem>
               <ListItem button key="crime" onClick = {openCrime}>
                    <ListItemIcon ><GenreIcon/></ListItemIcon>
                    <ListItemText primary="Crime" />
               </ListItem>
               <ListItem button key="thriller" onClick = {openThriller}>
                    <ListItemIcon ><GenreIcon/></ListItemIcon>
                    <ListItemText primary="Thriller" />
               </ListItem>
               <ListItem button key="family" onClick = {openFamily}>
                    <ListItemIcon ><GenreIcon/></ListItemIcon>
                    <ListItemText primary="Family" />
               </ListItem>
               <hr/>
               <ListItem button key="logout" onClick = {openLogin}>
                   <ListItemIcon ><LogoutIcon/></ListItemIcon>
                   <ListItemText primary="Logout" />
               </ListItem>

            </List>
        </div>
    );

     const onClose = (event) => {
            if(event.target.value.trim() == "")
                props.history.push({pathname: HOME_PAGE_ROUTE});
            else {
                props.history.push(SEARCH_PAGE_ROUTE, { title: event.target.value });
                }
        };

    return (
        <div>
            <AppBar position="fixed" className={classes.appBar} style={{zIndex: 1400}}>
                <Toolbar>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="open drawer"
                        onClick={toggleDrawer(true)}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography className={classes.title} variant="h6" noWrap>
                        Movie Store
                    </Typography>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon/>
                        </div>
                        <InputBase
                            placeholder="Search…"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{'aria-label': 'search'}}
                            onClick={onClose}
                        />
                    </div>
                    <Drawer open={state.isOpened} onClose={toggleDrawer(false)}>
                        {sideList()}
                    </Drawer>
                </Toolbar>
            </AppBar>

        </div>
    );
}

export default AppHeader;