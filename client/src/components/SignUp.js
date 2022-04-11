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
          console.log(result.message);
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
        <BUTTON>
          <button>SignUp</button>
        </BUTTON>
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
const FORM = styled.form`
  background-color: whitesmoke;
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
const BUTTON = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
`;
