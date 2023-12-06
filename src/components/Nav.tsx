import { Link } from "react-router-dom";
import styled from "styled-components";
import { IoHomeSharp } from "react-icons/io5";
import { FaQuestionCircle } from "react-icons/fa";
import { TfiWrite } from "react-icons/tfi";

function Nav() {
  return (
    <Container>
      <NavLogoBox>
        <NavItem to="/">
          <IoHomeSharp />
        </NavItem>
      </NavLogoBox>
      <NavItemBox>
        <NavItem to="/question">
          <FaQuestionCircle />
        </NavItem>
        <NavItem to="/question/create">
          <TfiWrite />
        </NavItem>
        <NavItem to="/login">로그인</NavItem>
      </NavItemBox>
    </Container>
  );
}

const Container = styled.nav`
  width: 100%;
  height: 10vh;
  bottom: 0;
  z-index: 99;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: none;
`;

const NavLogoBox = styled.div`
  margin-left: 30px;
`;
const NavItemBox = styled.div`
  width: 30%;
  margin-right: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavItem = styled(Link)`
  background: none;
  color: #000000;
  font-size: 3rem;
  text-decoration: none;
`;

export default Nav;
