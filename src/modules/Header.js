import styled from "styled-components/macro";

export default function Header({ title }) {
  return (
    <HeaderBox>
      <h1>{title}</h1>
    </HeaderBox>
  );
}

const HeaderBox = styled.header`
  background-color: hotpink;
  padding: 0.5rem;
  margin-bottom: 1rem;
  h1 {
    margin: 0;
    color: ivory;
  }
`;
