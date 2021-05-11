import React, { Fragment, useState, useEffect } from "react";
import { connect } from "react-redux";
import { loadUser, login } from "./actions/techActions";

const Login = (props) => {
  useEffect(() => {
    props.loadUser();
    if (props.isLogin) {
      props.history.push("/");
    }
    // eslint-disable-next-line
  }, [props.isLogin, props.history]);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { email, password } = user;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("submit", email, password);
    if (email === "" || password === "") {
      alert("Please enter all the fields.");
    } else {
      props.login({
        email,
        password,
      });
    }
  };

  return (
    <Fragment>
      <form onSubmit={onSubmit}>
        <div className="row">
          <div className="input-field">
            <input type="email" name="email" onChange={onChange} />
            <label htmlFor="email" className="active">
              Email
            </label>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <input type="password" name="password" onChange={onChange} />
            <label htmlFor="password" className="active">
              Password
            </label>
          </div>
        </div>
        <input
          type="submit"
          value="Login"
          className="waves-effect blue waves-light btn"
        />
      </form>
    </Fragment>
  );
};
const mapStateToProps = (state) => ({
  isLogin: state.tech.isLogin,
});
export default connect(mapStateToProps, { login, loadUser })(Login);
