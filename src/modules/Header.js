import styled from "styled-components/macro";

export default function Header() {
  return (
    <HeaderBox>
      <h1>Hallo "Jana"</h1>
    </HeaderBox>
  );
}

const HeaderBox = styled.div`
background-color: hotpink;
`;
