import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Login from '../../pages/login.page'

import HomePage from '../../pages/home.page';
import FamilyPage from '../../pages/family.page';
import AppHeader from './AppHeader';
import {withRouter} from 'react-router-dom';

const HOME_PAGE_ROUTE = "/home";
const LOGIN_PAGE_ROUTE = "/login";
const FAMILY_GENRE_PAGE_ROUTE = "/family";

export default class App extends Component {

    render() {
        return (
            <div>
                <AppHeader history={this.props.history}/>
            </div>

        );
    }
}