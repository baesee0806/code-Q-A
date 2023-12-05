import styled from "styled-components";

const QuestionCreate = () => {
  return (
    <Container>
      <div>질문 title</div>
      <div>
        <select>
          <option value="1">스택</option>
        </select>
      </div>
      <div>editor</div>
      <div>
        <button>질문하기</button>
        <button>초기화</button>
      </div>
    </Container>
  );
};

const Container = styled.main`
  width: 100dvw;
  height: 100dvh;
`;

export default QuestionCreate;
