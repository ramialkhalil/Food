import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { FoodContext } from "./FoodContext";

const Login = () => {
  const { setUser } = useContext(FoodContext);
  const [userName, setUserName] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState(null);
  const history = useHistory();

  const setFormData = () => {
    setUserName(document.querySelector("input[name='uname']").value);
    setPassword(document.querySelector("input[name='pass']").value);
  };

  const loginHandler = (e) => {
    e.preventDefault();
    fetch(`/api/check-user`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userName: userName,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.data) {
          localStorage.setItem("login", JSON.stringify(result.data));
          setUser(result.data);
          history.push(`/profile`);
        } else if (result.status === 400) {
          setError(result.message);
        }
      });
  };

  const signUpHandler = (e) => {
    e.preventDefault();
    history.push("/signUp");
  };

  return (
    <>
      <FORM onChange={setFormData}>
        <DIV>
          <label>Username </label>
          <input type="text" name="uname" required />
        </DIV>
        <DIV>
          <label>Password </label>
          <input type="password" name="pass" required />
        </DIV>
        {userName && password ? (
          <BUTTONDIV>
            <BUTTON onClick={(e) => loginHandler(e)}>Login</BUTTON>
            <BUTTON onClick={(e) => signUpHandler(e)}>SignUp</BUTTON>
          </BUTTONDIV>
        ) : (
          <BUTTONDIV>
            <BUTTON disabled onClick={(e) => loginHandler(e)}>
              Login
            </BUTTON>
            <BUTTON onClick={(e) => signUpHandler(e)}>SignUp</BUTTON>
          </BUTTONDIV>
        )}
        {error && <ERROR>{error}</ERROR>}
      </FORM>
    </>
  );
};

export default Login;

const ERROR = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: red;
`;

const BUTTON = styled.button`
  font-size: 16px;
  font-weight: bold;
  color: white;
  background-color: green;
  border: solid green;
  border-radius: 10px;
  cursor: pointer;
  &:disabled {
    opacity: 0.25;
    cursor: not-allowed;
  }
`;

const FORM = styled.form`
  background-color: #8fbc8f;
  color: white;
  padding: 10px;
  width: 320px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
`;

const DIV = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: end;
  gap: 10px;
  padding: 10px;
`;

const BUTTONDIV = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  gap: 10px;
`;
