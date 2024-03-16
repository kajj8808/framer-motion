import styled from "styled-components";

const Title = styled.h1`
  color: ${(props) => props.theme.textColor};
  font-weight: 600;
  font-size: 38px;
`;

function Header() {
  return <Title>Pomodoro</Title>;
}

export default Header;
