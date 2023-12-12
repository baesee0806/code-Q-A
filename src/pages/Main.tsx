import { Link } from "react-router-dom";
import styled from "styled-components";

const Main = () => {
  return (
    <Container>
      <Title>누구나 질문하고 답변해 보세요!</Title>
      <Section>
        <Answer to="/question">답변하러 가기</Answer>
        <Question to="/question/create">질문 하러가기</Question>
      </Section>
    </Container>
  );
};

export default Main;

const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`;
const Title = styled.h1`
  position: absolute;
  z-index: 100;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 3rem;
  color: #482308;
  border-radius: 10px;
  padding: 1rem;
`;
const Section = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
`;
const Answer = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  text-decoration-line: none;
  color: #482308;
  font-size: 2rem;
  &:hover {
    color: #a1724e;
    font-size: 3rem;
    font-weight: bolder;
    transition: all 0.5s ease-in-out;
    background-color: rgba(255, 255, 255, 0.7);
  }
  &:not(:hover) {
    transition: all 0.5s ease-in-out;
  }
`;
const Question = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  text-decoration-line: none;
  color: #482308;
  font-size: 2rem;
  &:hover {
    color: #a1724e;
    font-size: 3rem;
    font-weight: bolder;
    transition: all 0.5s ease-in-out;
    background-color: rgba(255, 255, 255, 0.7);
  }
  &:not(:hover) {
    transition: all 0.5s ease-in-out;
  }
`;
