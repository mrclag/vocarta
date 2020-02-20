import React, { useState } from 'react';
import { connect } from 'react-redux';
import { signIn } from '../../store/actions/authActions.js';

import styled from 'styled-components';

const SignIn = ({ history, signIn, authError }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hovered, setHovered] = useState(false);

  const onSubmit = e => {
    e.preventDefault();
    signIn({ email, password });
  };

  return (
    <LoginWrapper>
      <form onSubmit={onSubmit}>
        <div className="auth-title">Sign In</div>
        <br />
        <hr />
        <br />
        <div className="input-field">
          <input
            type="email"
            value={email}
            id="email"
            placeholder="Email"
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div className="input-field">
          <input
            type="password"
            value={password}
            id="password"
            placeholder="Password"
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <div>
          <LoginButton
            hovered={hovered}
            onMouseOver={() => setHovered(true)}
            onMouseOut={() => setHovered(false)}
          >
            Login
          </LoginButton>
          <div>{authError ? <p>{authError}</p> : null}</div>
        </div>
      </form>
    </LoginWrapper>
  );
};

const mapStateToProps = state => {
  return {
    authError: state.auth.authError
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signIn: creds => dispatch(signIn(creds))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);

const LoginButton = styled.button`
  color: ${props => (props.hovered ? 'white' : '#107bbd')};
  margin-top: 5px;
  height: 35px;
  width: 100%;
  background-color: ${props => (props.hovered ? '#107bbd' : 'white')};
  border-radius: 5px;
  border: 1px solid #107bbd;
  outline: none;
  cursor: pointer;
`;

const LoginWrapper = styled.div``;