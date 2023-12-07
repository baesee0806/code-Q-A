import { useCallback, useState } from "react";
import Modal from "./Modal";
import styled from "styled-components";
import { supabase } from "../supabase/configure";
import { useSetRecoilState } from "recoil";
import { loginModalState } from "../recoil/atom/loginModalState";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const loginState = useSetRecoilState(loginModalState);

  const onChangeEmail = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      e.preventDefault();
      setEmail(e.target.value);
    },
    []
  );
  const onChangePassword = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      e.preventDefault();
      setPassword(e.target.value);
    },
    []
  );
  //   const signHandler = async () => {
  //     try {
  //       const { data, error } = await supabase.auth.signUp({
  //         email: email,
  //         password: password,
  //         options: {
  //           data: {
  //             first_name: "bae",
  //             age: 28,
  //           },
  //         },
  //       });
  //       console.log(data);

  //       if (error) {
  //         throw error;
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  const signHandler = async () => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      });
      if (error) {
        throw error;
      }
      setEmail("");
      setPassword("");
      loginState(false);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Modal wid={700} hei={600}>
      <Container>
        <h1>로그인</h1>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={onChangeEmail}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={onChangePassword}
          />
        </div>
        <button onClick={signHandler}>로그인</button>
        <button onClick={() => loginState(false)}>X</button>
      </Container>
    </Modal>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default Login;
