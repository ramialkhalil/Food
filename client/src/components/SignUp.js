import { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const SignUp = () => {
  const [userName, setUserName] = useState(null);
  const [password, setPassword] = useState(null);
  const [repeatPassword, setRepeatPassword] = useState(null);
  const [email, setEmail] = useState(null);
  const [error, setError] = useState(null);
  const history = useHistory();

  const setFormData = () => {
    setUserName(document.querySelector("input[name='uname']").value);
    setPassword(document.querySelector("input[name='pass']").value);
    setRepeatPassword(document.querySelector("input[name='psw-repeat']").value);
    setEmail(document.querySelector("input[name='email']").value);
  };

  const signUpHandler = (e) => {
    e.preventDefault();
    fetch(`/api/add-user`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userName: userName,
        password: password,
        repeatPassword: repeatPassword,
        email: email,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.data) {
          history.push(`/login`);
        } else if (result.status === 400) {
          setError(result.message);
        }
      });
  };

  return (
    <>
      <FORM onChange={setFormData} onSubmit={(e) => signUpHandler(e)}>
        <DIV>
          <label>Username </label>
          <input type="text" name="uname" placeholder="Username" required />
        </DIV>
        <DIV>
          <label>Password </label>
          <input type="password" name="pass" placeholder="Password" required />
        </DIV>
        <DIV>
          <label>Repeat Password</label>
          <input
            type="password"
            name="psw-repeat"
            placeholder="Repeat Password"
            required
          />
        </DIV>
        <DIV>
          <label>Email</label>
          <input type="email" name="email" placeholder="Email" required />
        </DIV>
        {userName && password && repeatPassword && email ? (
          <BUTTONDIV>
            <BUTTON>SignUp</BUTTON>
          </BUTTONDIV>
        ) : (
          <BUTTONDIV>
            <BUTTON disabled>SignUp</BUTTON>
          </BUTTONDIV>
        )}
        {error && <ERROR>{error}</ERROR>}
      </FORM>
    </>
  );
};
export default SignUp;

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
`;
