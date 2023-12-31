import React from "react";

// Import CSS stylesheet
import '../../Style/Log.css'; 

// Function which includes form for users to register for an account
const AuthForm = ({ user, isLogin, onChange, onSubmit }) => {
  return (
    <form onSubmit={onSubmit} autoComplete="off">
      {!isLogin ? (
        <div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="first-name-input"
              value={user.firstName}
              onChange={onChange}
              name="firstName"
              placeholder="First Name"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="last-name-input"
              value={user.lastName}
              onChange={onChange}
              name="lastName"
              placeholder="Last Name"
              required
            />
          </div>{" "}
        </div>
      ) : (
        <></>
      )}
      <div>
        <div className="form-group">
          <input
            type="email"
            className="form-control"
            id="email-input"
            value={user.email}
            onChange={onChange}
            name="email"
            placeholder="Email"
            required
          />
        </div>{" "}
        <div className="form-group">
          <input
            type="password"
            className="form-control"
            id="password-input"
            value={user.password}
            onChange={onChange}
            name="password"
            min="0"
            placeholder="Password"
            required
          />
        </div>
        <div className="form-group">
        <button type="submit" className="btn btn-primary" autoComplete="off">
          {isLogin ? "Login" : "Register"}
        </button>
        </div>
      </div>
    </form>
  );
};

export default AuthForm;
