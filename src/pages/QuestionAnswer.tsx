import styled from "styled-components";
import { supabase } from "../supabase/configure";
import Select from "react-select";
import JS from "../assets/images/JS.png";
import TS from "../assets/images/TS.png";
import HTML from "../assets/images/HTML.png";
import CSS from "../assets/images/CSS.png";
import { useNavigate } from "react-router-dom";
// interface Datas {
//   id: number;
//   created_at: Date;
//   user_id: string;
//   title: string;
//   content: string;
//   language: string;
//   importance: number;
//   check: boolean;
// }

const QuestionAnswer = () => {
  const navigate = useNavigate();
  const data1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  // const user = async () => {
  //   const { data, error } = await supabase.auth.getUser();
  //   console.log(data);
  // };
  // user();
  // const d = async () => {
  //   const { data: question, error } = await supabase
  //     .from("question")
  //     .select("*");
  //   console.log(question);
  // };
  // useEffect(() => {
  //   d();
  // }, []);

  return (
    <Container>
      <SearchContainer>
        <SearchIcon>🔍</SearchIcon>
        <Search type="text" />
      </SearchContainer>
      <OptionSection>
        <OptionContainer>
          <Selects
            options={options}
            defaultValue={options[0]}
            isSearchable={false}
          />
          <Selects
            options={options}
            defaultValue={options[0]}
            isSearchable={false}
          />
          <Selects
            options={options}
            defaultValue={options[0]}
            isSearchable={false}
          />
        </OptionContainer>
      </OptionSection>
      <ContentSection>
        {data1.map((item, index) => {
          return (
            <Card
              key={index}
              onClick={() => {
                navigate(`/question/${index}`);
              }}
            >
              <CardImage src={JS} />
              <CardExplain>
                content
                Explanation....ㅇㄹㅁㄴㅇㄹㅁㅇㄴㄹㅇㄴㄹㅇㄴㄹㅇㄴㄹㅇㄴㄹㅇㄴ
              </CardExplain>
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
  height: 20%;
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

const Selects = styled(Select)`
  width: 300px;
  height: 50px;
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
  cursor: pointer;
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
const CardExplain = styled.div`
  color: #c1c1c1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
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
