import styled from "styled-components";

interface ModalProps {
  wid?: Number;
  hei?: Number;
}
interface ModalPropsChildren extends ModalProps {
  children: React.ReactNode;
}

function Modal({ children, wid, hei }: ModalPropsChildren) {
  return (
    <Container>
      <ModalContainer wid={wid} hei={hei}>
        {children}
      </ModalContainer>
    </Container>
  );
}
const Container = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 50%);
  z-index: 101;
`;
const ModalContainer = styled.div<ModalProps>`
  width: ${(props) => props.wid + "px" || "500px"};
  height: ${(props) => props.hei + "px" || "500px"};
  background: #fff;
`;
export default Modal;
