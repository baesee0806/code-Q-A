import { useState } from "react";
import styled from "styled-components";

const QuestionAnswer = () => {
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const [a, setA] = useState(0);

  const b = () => {
    setA(a + 1);
  };

  console.log(a);

  return (
    <Container>
      <SearchContainer>
        <SearchIcon>🔍</SearchIcon>
        <Search type="text" />
      </SearchContainer>
      <OptionSection>
        <OptionContainer>
          <OptionSelect>
            <option value="">최신순</option>
          </OptionSelect>
          <OptionSelect>
            <option value="">Javascript</option>
          </OptionSelect>
          <OptionSelect>
            <option value="">채택 여부</option>
          </OptionSelect>
        </OptionContainer>
      </OptionSection>
      <ContentSection>
        {data.map((item, index) => {
          return (
            <Card key={index} onClick={b}>
              <CardImage src="https://picsum.photos/300/300" />
              <CardInfo>
                <CardTitle>제목</CardTitle>
                <CardAuthor>작성자</CardAuthor>
                <CardDate>작성일</CardDate>
                <CardAnswer>답변수</CardAnswer>
              </CardInfo>
            </Card>
          );
        })}
      </ContentSection>
    </Container>
  );
};

const Container = styled.main`
  width: 100vw;
  height: 100vh;
`;
// 검색
const SearchContainer = styled.div`
  height: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SearchIcon = styled.div`
  font-size: 2rem;
  position: relative;
  left: 50px;
`;
const Search = styled.input`
  width: 50%;
  height: 30%;
  padding-left: 60px;
  padding-right: 60px;
  border: 1px solid #482308;
  border-radius: 30px;
  font-size: 2rem;
`;

// card 정렬 option

const OptionSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const OptionContainer = styled.div`
  width: 80%;
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const OptionSelect = styled.select`
  width: 400px;
  height: 100%;
  padding: 10px;
  border-radius: 10px;
  border: none;
  background-color: #f5f5f5;
  color: #444;
  font-size: 1rem;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;

// 질문 card
const ContentSection = styled.section`
  width: 100%;
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

const CardInfo = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.2);
  color: white;
`;

const Card = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
  margin: 0 50px 100px 80px;
  &:hover ${CardInfo} {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%;
`;

const CardTitle = styled.div`
  width: 100%;
  height: 30%;
  background: rgba(0, 0, 0, 0.2);
  text-align: center;
  line-height: 100px;
`;
const CardAuthor = styled.div`
  width: 100%;
  height: 20%;
  background: rgba(0, 0, 0, 0.2);
  text-align: center;
  line-height: 70px;
`;
const CardDate = styled.div`
  width: 100%;
  height: 20%;
  background: rgba(0, 0, 0, 0.2);
  text-align: center;
  line-height: 70px;
`;
const CardAnswer = styled.div`
  width: 100%;
  height: 30%;
  background: rgba(0, 0, 0, 0.2);
  text-align: center;
  line-height: 100px;
`;

export default QuestionAnswer;
