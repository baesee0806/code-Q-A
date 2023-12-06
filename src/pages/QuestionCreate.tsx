import styled from "styled-components";
import ToastEditor from "../components/ToastEditor";
import Select from "react-select";
const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];
const QuestionCreate = () => {
  return (
    <Container>
      <Title type="text" placeholder="Title" />
      <SelectContainer>
        <SelectBox>
          <SelectTitle htmlFor="stack">스택</SelectTitle>
          <Selects options={options} />
        </SelectBox>
        <SelectBox>
          <SelectTitle htmlFor="importance">중요도</SelectTitle>
          <Selects options={options} />
        </SelectBox>
      </SelectContainer>
      <ToastEditor />
      <ButtonBox>
        <Btn>질문하기</Btn>
        <Btn>초기화</Btn>
      </ButtonBox>
    </Container>
  );
};

const Container = styled.main`
  width: 100dvw;
  height: 100dvh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Title = styled.input`
  width: 80%;
  height: 50px;
  border: 1px solid black;
  border-radius: 10px;
  padding: 0 20px 0;
  font-size: 2rem;
  margin-top: 30px;
  margin-bottom: 30px;
`;
const SelectContainer = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;
const SelectBox = styled.div`
  width: 49%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const Selects = styled(Select)`
  width: 100%;
`;
const SelectTitle = styled.label`
  width: 70px;
  font-size: 1.5rem;
  font-weight: bold;
  line-height: 50px;
  margin-right: 10px;
`;
const ButtonBox = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const Btn = styled.button`
  width: 300px;
  height: 50px;
  border: none;
  border-radius: 10px;
  font-size: 1.5rem;
  font-weight: bold;
  background-color: #482308;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: #f5f5f5;
    color: #482308;
    border: 1px solid #482308;
  }
`;
export default QuestionCreate;
