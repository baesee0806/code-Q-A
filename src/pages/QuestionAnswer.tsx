import styled from "styled-components";

const QuestionAnswer = () => {
  return (
    <Container>
      <SearchContainer>
        <SearchIcon>🔍</SearchIcon>
        <Search type="text" />
      </SearchContainer>
      <ContentSection>
        <Card>
          <CardImage
            src="https://images.velog.io/images/hang_kem_0531/post/05903636-878d-4e75-bf8b-aaddfcecbcce/js-logo.png"
            alt="card img"
          />
          <CardInfo>
            <CardTitle>{"title"}</CardTitle>
            <CardAuthor>{"author"}</CardAuthor>
            <CardDate>{"date"}</CardDate>
            <CardAnswer>{"answer"}</CardAnswer>
          </CardInfo>
        </Card>
      </ContentSection>
    </Container>
  );
};

const Container = styled.main`
  width: 100vw;
  height: 100vh;
`;
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
const ContentSection = styled.section`
  width: 100%;
  height: 70%;
  padding: 30px;
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

  &:hover ${CardInfo} {
    display: flex;
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
