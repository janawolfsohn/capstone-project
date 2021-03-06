import { useState } from "react";
import styled from "styled-components/macro";

export default function Login() {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  return (
    <>
      <header>
        <h1>Halllllooo</h1>
      </header>
      <FormStyled action="/home">
        <label htmlFor="email" />
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={onChange}
          value={loginData.email}
        />

        <label htmlFor="password" />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={onChange}
          value={loginData.password}
        />
        <SignInWrapper>
         
          <button onClick={() => console.log("click")}>Sign in</button>
        </SignInWrapper>
      </FormStyled>

      <FooterStyled>
        <p>Havn't an account yet?</p>
        <a href="/create-account">Sign up.</a>
      </FooterStyled>
    </>
  );

  function onChange(event) {
    setLoginData({
      ...loginData,
      [event.target.name]: event.target.value,
    });
  } 

}

const FormStyled = styled.form`
  margin: 2em;
  padding: 4.5em 2em 3.6em;
  box-shadow: 4px 4px 18px hsla(0, 0%, 0%, 0.3);
  border-radius: 20px;

  input {
    width: 100%;
    margin-bottom: 2em;
    padding: 0.7em 0;
    border: 0;
    border-bottom: 1px solid #d3d3d3;
  }

  input::placeholder {
    font-size: 1.2em;
    color: #d3d3d3;
  }
`;

const SignInWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  p {
    font-size: 1.9em;
    margin: 0;
  }

  button {
    background-color: transparent;
    border: none;
  }
`;

const FooterStyled = styled.footer`
  position: fixed;
  display: flex;
  justify-content: center;
  bottom: 1em;
  width: 100%;

  p {
    margin: 0;
    padding-right: 0.5em;
    font-size: 0.9em;
  }

  a {
    text-decoration: none;
    color: #029fe3;
    font-size: 0.9em;
  }
`;
