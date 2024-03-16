import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { goalAtom, roundAtom } from "../atom";

const Container = styled.div`
  width: 260px;
  display: flex;
  justify-content: space-around;
`;
const FieldsBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;
const FieldTitle = styled.h3`
  text-transform: uppercase;
  font-weight: 600;
  font-size: 18px;
  color: ${(props) => props.theme.textColor};
`;
const FieldText = styled.p`
  font-weight: 600;
  font-size: 18px;
  color: rgba(255, 255, 255, 0.5);
`;

function Footer() {
  const round = useRecoilValue(roundAtom);
  const goal = useRecoilValue(goalAtom);

  return (
    <Container>
      <FieldsBox>
        <FieldText>{round}/4</FieldText>
        <FieldTitle>round</FieldTitle>
      </FieldsBox>
      <FieldsBox>
        <FieldText>{goal}/12</FieldText>
        <FieldTitle>goal</FieldTitle>
      </FieldsBox>
    </Container>
  );
}

export default Footer;
