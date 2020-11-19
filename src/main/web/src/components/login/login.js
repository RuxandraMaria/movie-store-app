import React from "react";
import loginImg from "../../resources/login.svg";
import "../../styles/register.css";
import {HOME_PAGE_ROUTE} from '../../pages/applicationRoutes';
import { useHistory } from "react-router-dom";
import { createBrowserHistory as history} from 'history';



export default class Login extends React.Component {
    constructor(props) {
        super(props);
         this.state={
          username:'',
          password:''
          }
    }

    setUsername(username){
        this.state.username = username;
    }

    setPassword(password){
        this.state.password = password;
    }

    render() {
        return (
            <div className="base-container" ref={this.props.containerRef}>
                <div className="header">Login</div>
                <div className="content">
                    <div className="image">
                        <img src={loginImg} />
                    </div>
                    <div className="form">
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input type="text" name="username" placeholder="username" onChange={event => this.setUsername(event.target.value)}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" placeholder="password" onChange={event => this.setPassword(event.target.value)}/>
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <button type="button" className="btn" onClick={() => {
                            history().push(HOME_PAGE_ROUTE);
                            window.location.reload();
                        }}>
                        Login
                    </button>
                </div>
            </div>
        );
    }
}