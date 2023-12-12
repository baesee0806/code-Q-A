import { useParams } from "react-router-dom";
import styled from "styled-components";

const My = () => {
  const { userId } = useParams();

  return (
    <Container>
      <UserInfoWrap>
        <Title>유저 정보</Title>
        <UserInfo>
          <div>유저 아이디 : </div>
          <div>유저 이메일 : </div>
        </UserInfo>
      </UserInfoWrap>
      <UserQuestionWrap>
        <Title>##님의 질문</Title>
        <Box>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <div>▶︎</div>
        </Box>
      </UserQuestionWrap>
      <UserCommentWrap>
        <Title>##님의 답변</Title>
        <Box>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <div>▶︎</div>
        </Box>
      </UserCommentWrap>
    </Container>
  );
};

const Container = styled.div`
  width: 80%;
  min-height: 800px;
  margin: 30px auto 0 auto;
`;
const UserInfoWrap = styled.div`
  width: 100%;
  display: flex;
  padding-bottom: 20px;
  margin-bottom: 10px;
  border-bottom: 1px solid #9d9b9b;
`;
const Title = styled.div`
  width: 20%;
  height: 20%;
  font-size: 2rem;
  margin-bottom: 10px;
`;
const UserInfo = styled.div`
  width: 80%;
  font-size: 1.5rem;
`;
const UserQuestionWrap = styled.div`
  min-height: 300px;
  padding-bottom: 20px;
  margin-bottom: 10px;
  border-bottom: 1px solid #9d9b9b;
`;
const UserCommentWrap = styled.div`
  min-height: 300px;
  margin-bottom: 50px;
`;
const Box = styled.div`
  height: 80%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 30px;
`;
const Card = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
  cursor: pointer;
  background-color: #2f2f2f;
`;
export default My;
