import { Link } from "react-router-dom";
import styled from "styled-components";

function Nav() {
  return (
    <Container>
      <Link to="/">홈으로</Link>
      <Link to="/question">질문</Link>
      <Link to="/question/create">글쓰기</Link>
    </Container>
  );
}

const Container = styled.nav`
  width: 100vw;
  height: 10vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
export default Nav;
