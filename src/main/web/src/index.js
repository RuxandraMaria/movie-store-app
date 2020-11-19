import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/App';
import HomePage from "./pages/home.page";
import Login from "./pages/login.page";
import Movies from "./pages/movies.page";
import Series from "./pages/series.page";
import FovoritesPage from "./pages/favorites.page"
import ActionGenre from "./pages/action.page"
import ComedyGenre from "./pages/comedy.page"
import RomanceGenre from "./pages/romance.page"
import DramaGenre from "./pages/drama.page"
import CrimeGenre from "./pages/crime.page"
import ThrillerGenre from "./pages/thriller.page"
import FamilyGenre from "./pages/family.page"
import Search from "./pages/search.page"

import {BrowserRouter as Router, Route} from 'react-router-dom';
import { MuiThemeProvider } from 'material-ui/styles';
import * as ROUTES from './pages/applicationRoutes';


console.log(ROUTES.LOGIN_PAGE_ROUTE);

const routes =
    (
    <MuiThemeProvider>
        <Router>
            <Route path={ROUTES.PLATFORM} component={App}/>
            <Route path={ROUTES.HOME_PAGE_ROUTE} component={HomePage}/>
            <Route path={ROUTES.LOGIN_PAGE_ROUTE} component={Login}/>
            <Route path={ROUTES.FAVORITES_PAGE_ROUTE} component={FovoritesPage}/>
            <Route path={ROUTES.MOVIES_PAGE_ROUTE} component={Movies}/>
            <Route path={ROUTES.SERIES_PAGE_ROUTE} component={Series}/>
            <Route path={ROUTES.ACTION_GENRE_PAGE_ROUTE} component={ActionGenre}/>
            <Route path={ROUTES.DRAMA_GENRE_PAGE_ROUTE} component={DramaGenre}/>
            <Route path={ROUTES.ROMANCE_GENRE_PAGE_ROUTE} component={RomanceGenre}/>
            <Route path={ROUTES.COMEDY_GENRE_PAGE_ROUTE} component={ComedyGenre}/>
            <Route path={ROUTES.CRIME_GENRE_PAGE_ROUTE} component={CrimeGenre}/>
            <Route path={ROUTES.THRILLER_GENRE_PAGE_ROUTE} component={ThrillerGenre}/>
            <Route path={ROUTES.FAMILY_GENRE_PAGE_ROUTE} component={FamilyGenre}/>
            <Route path={ROUTES.SEARCH_PAGE_ROUTE} component={Search}/>
        </Router>
    </MuiThemeProvider>);


ReactDOM.render(routes,
  document.getElementById('root')
);
