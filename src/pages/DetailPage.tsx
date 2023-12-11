import styled from "styled-components";
import { useParams } from "react-router-dom";
import "@toast-ui/editor/dist/toastui-editor-viewer.css";
import { Viewer } from "@toast-ui/react-editor";

function DetailPage() {
  const { docId } = useParams();
  const markdown =
    '# This is a H1\n## This is a H2\n[Link to google](https://google.com)\n\n![image](https://user-images.githubusercontent.com/52653793/126897516-9b9b9b7a-5b9a-4b0a-9b0a-9b0b9b0b9b0b.png)\n\n> This is a blockquote\n\n- list\n- list\n- list\n\n```js\nconsole.log("hello world");\n```\n\n**This is a bold text**\n\n*This is a italic text*';

  return (
    <Container>
      <Title>Title</Title>
      <Line />
      <InfoBox>
        <User>작성자</User>
        <Dot>·</Dot>
        <CreatedAt>작성일</CreatedAt>
        <Dot>·</Dot>
        <IsCheck>채택 상태</IsCheck>
      </InfoBox>
      <ViewerBox>
        <Viewer initialValue={markdown} />
      </ViewerBox>
      <div>
        <div>댓글</div>
      </div>
    </Container>
  );
}
const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;
const Line = styled.hr`
  width: 80%;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 30px;
  border: 1px solid;
  border-color: rgba(0, 0, 0, 0.1);
`;
const Title = styled.div`
  width: 100%;
  height: 50px;
  font-size: 2rem;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;

const InfoBox = styled.div`
  width: 80%;
  margin: 0 auto 30px auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
const User = styled.div`
  width: 100px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
`;
const CreatedAt = styled.div`
  width: 100px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
`;
const Dot = styled.div`
  font-size: 3rem;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const IsCheck = styled.div`
  width: 100px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
`;
const ViewerBox = styled.div`
  width: 80%;
  min-height: 800px;
  margin: 0 auto;
`;
export default DetailPage;
