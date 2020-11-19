import React from "react";
import loginImg from "../../resources/login.svg";
import "../../styles/register.css";
import customAxios from "../../httpRequests/customAxios";

const REQUEST_HEADER_WITH_CREDENTIAL = { headers: { "Content-Type":"application/json", "Accept":"application/json"}, origin: "https://localhost:8090"};

export default class Register extends React.Component {
    constructor(props) {
        super(props);
        this.user =  {
            accountNonExpired: true,
            accountNonLocked: true,
            credentialsNonExpired: true,
            enabled: true,
            password: "",
            username: ""
        };
    }

    setUsername(username){
        this.user.username = username;
    }

    setPassword(password){
        this.user.password = password;
    }

    async onRegister(){
        await  customAxios.post('/register', JSON.stringify(this.user), REQUEST_HEADER_WITH_CREDENTIAL);

    }

    render() {
        return (
            <div className="base-container" ref={this.props.containerRef}>
                <div className="header">Register</div>
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
                            <label htmlFor="email">Password</label>
                            <input type="password" name="password1" placeholder="password" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Retype password</label>
                            <input type="password" name="password" placeholder="password" onChange={event => this.setPassword(event.target.value)}/>
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <button type="button" className="btn" onClick={this.onRegister.bind(this)}>
                        Register
                    </button>
                </div>
            </div>
        );
    }
}