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

  const loginHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      });
      if (error) {
        throw error;
      }
      if (data) {
        localStorage.setItem("id", data.user.id);
        setEmail("");
        setPassword("");
        loginState(false);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Modal wid={500} hei={400}>
      <Container onSubmit={(e) => loginHandler(e)}>
        <Title>로그인</Title>
        <InputBox>
          <InputLabel htmlFor="email">Email</InputLabel>
          <Input
            type="email"
            id="email"
            value={email}
            onChange={onChangeEmail}
          />
        </InputBox>
        <InputBox>
          <InputLabel htmlFor="password">Password</InputLabel>
          <Input
            type="password"
            id="password"
            value={password}
            onChange={onChangePassword}
          />
        </InputBox>
        <LoginBtn type="submit">로그인</LoginBtn>
        <ClosedBtn onClick={() => loginState(false)}>X</ClosedBtn>
      </Container>
    </Modal>
  );
}

const Container = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Title = styled.h1`
  height: 50px;
`;
const InputBox = styled.div`
  width: 300px;
  height: 60px;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;
const InputLabel = styled.label`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 10px;
`;
const Input = styled.input`
  width: 100%;
  height: 40px;
  border: 1px solid #83a2ff;
  border-radius: 10px;
  padding-left: 10px;
  font-size: 1.5rem;
  outline: none;
`;

const LoginBtn = styled.button`
  width: 100px;
  height: 40px;
  border: none;
  border-radius: 15px;
  color: white;
  background-color: #83a2ff;
  font-size: 1.5rem;
  margin-top: 15px;
  font-weight: 700;
  cursor: pointer;
  &:hover {
    background-color: #5c7aff;
    transition: 0.3s ease-in-out;
  }
`;
const ClosedBtn = styled.button`
  position: relative;
  top: -290px;
  left: 210px;
  border: none;
  background-color: transparent;
  font-size: 2rem;
  cursor: pointer;
`;
export default Login;
