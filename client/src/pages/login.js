import React from "react";
import axios from "axios";



export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            loginErrors: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handlechange = this.handleChange.bind(this);

    }
    handleChange(event) {
        event.preventDefault();
        this.setState({
            [event.target.name]: event.target.value

        });
    }

    handleSubmit(event) {
        const { email, password, } = this.state;
        axios
            .post(
                "/Login",
                {
                    user: {
                        email: email,
                        password: password
                    }
                },
                { withCredentials: true }
            )
            .then(response => {
                if (response.data.logged_in) {
                    this.props.handleSuccesfulAuth(response.data);
                }
            })
            .catch(error => {
                console.log("login error", error);
            });

    }


    render() {
        return (
          <div>
            <input name="email" />
    <input name="password" />
    <button>Submit</button>
            </div>
        );
      }
    

}

export default Login;
