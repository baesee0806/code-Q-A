import styled from "styled-components";
import { useParams } from "react-router-dom";
import "@toast-ui/editor/dist/toastui-editor-viewer.css";
import { Viewer } from "@toast-ui/react-editor";
import { useQuery } from "react-query";
import { detailData } from "../apis/getQuestion";
import { getDate } from "../apis/getDate";
interface Datas {
  id: number;
  created_at: Date;
  user_id: string;
  title: string;
  content: string;
  language: string;
  importance: number;
  check: boolean;
  view: number;
}
function DetailPage() {
  const { docId } = useParams();

  const { data, status } = useQuery(
    ["detailData", docId as string],
    () => detailData(docId as string),
    {
      refetchOnWindowFocus: false,
    }
  );

  if (status === "error") return <div>error...</div>;

  return (
    <Container>
      {data &&
        data.map((item: Datas) => (
          <div key={item.id}>
            <Title>{item.title}</Title>
            <Line />
            <InfoBox>
              <User>작성자 : {item.user_id}</User>
              <CreatedAt>작성일 : {getDate(item.created_at)}</CreatedAt>
              <IsCheck>{item.check ? "채택 완료" : "채택 전"}</IsCheck>
            </InfoBox>
            <ViewerBox>
              <Viewer initialValue={item.content} />
            </ViewerBox>
          </div>
        ))}

      <CommentBox>
        <h2>##개의 댓글</h2>
        <CommentInfoWrap>
          <CommentInfoBox>
            <div>user</div>
            <Dot>·</Dot>
            <div>create at</div>
            <Dot>·</Dot>
            <div>채택 하기</div>
          </CommentInfoBox>
          <CommentBtnBox>
            <Btn>수정</Btn>
            <Btn>삭제</Btn>
          </CommentBtnBox>
        </CommentInfoWrap>
        <Content>
          <Viewer initialValue={`1`} />
        </Content>
      </CommentBox>
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
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
const CreatedAt = styled.div`
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  margin-left: 20px;
`;
const Dot = styled.div`
  font-size: 2rem;
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
  font-size: 1rem;
`;
const ViewerBox = styled.div`
  width: 80%;
  min-height: 500px;
  margin: 0 auto;
  .toastui-editor-contents {
    p {
      font-size: 1.2rem;
      line-height: 1.8rem;
      margin-bottom: 1rem;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      padding: 2rem 0 1rem 0;
      border-bottom: none;
      margin: 0;

      &:first-of-type {
        padding-top: 0;
      }
    }

    h1 {
      font-size: 2.4rem;
    }
    h2 {
      font-size: 2.1rem;
    }
    h3 {
      font-size: 1.9rem;
    }
    h4 {
      font-size: 1.7rem;
    }
    h5 {
      font-size: 1.5rem;
    }
    h6 {
      font-size: 1.3rem;
    }

    ul,
    ol {
      margin-bottom: 1rem;
      padding-left: 2rem;
      li {
        margin-bottom: 0.5rem;
        p {
          margin-bottom: 0;
        }
        ::before {
          content: "";
          margin-top: 0.75rem;
          margin-left: -1.25rem;
          width: 0.4375rem;
          height: 0.4375rem;
          border-radius: 100%;
          background-color: black;
        }
      }
    }
  }
`;
const CommentBox = styled.div`
  width: 80%;
  margin: 0 auto 30px auto;
  border-bottom: 1px solid;
`;

const CommentInfoWrap = styled.div`
  width: 100%;
  min-height: 50px;
  border-radius: 10px;
  background-color: #ffffff;
  display: flex;
  justify-content: space-between;
`;
const CommentInfoBox = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 10px;
  align-items: center;
  width: 20%;
`;
const CommentBtnBox = styled.div`
  width: 20%;
  display: flex;
  gap: 20px;
  justify-content: flex-end;
  align-items: center;
`;
const Btn = styled.button`
  width: 50px;
  height: 30px;
  border-radius: 10px;
  background-color: #ffffff;
  border: none;
  outline: none;
  cursor: pointer;
  &:hover {
    color: red;
  }
`;
const Content = styled.div`
  padding: 5px 5px 5px 0;
  min-height: 100px;
  .toastui-editor-contents {
    p {
      font-size: 1.2rem;
      line-height: 1.8rem;
      margin-bottom: 1rem;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      padding: 2rem 0 1rem 0;
      border-bottom: none;
      margin: 0;

      &:first-of-type {
        padding-top: 0;
      }
    }

    h1 {
      font-size: 2.4rem;
    }
    h2 {
      font-size: 2.1rem;
    }
    h3 {
      font-size: 1.9rem;
    }
    h4 {
      font-size: 1.7rem;
    }
    h5 {
      font-size: 1.5rem;
    }
    h6 {
      font-size: 1.3rem;
    }

    ul,
    ol {
      margin-bottom: 1rem;
      padding-left: 2rem;
      li {
        margin-bottom: 0.5rem;
        p {
          margin-bottom: 0;
        }
        ::before {
          content: "";
          margin-top: 0.75rem;
          margin-left: -1.25rem;
          width: 0.4375rem;
          height: 0.4375rem;
          border-radius: 100%;
          background-color: black;
        }
      }
    }
  }
`;
export default DetailPage;
