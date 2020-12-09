import Header from "../modules/Header";
import Profilbild from "../img/profilbild.jpg";
import styled from "styled-components/macro";

export default function Einstellungen() {
  return (
    <>
      <Header title="Einstellungen" />
      
        <div>
          <Profilimg src={Profilbild} alt="Profilbild-Icon" />
        </div>
        <Text> Farbschema </Text>
        <Text> Your Name: Jana</Text>
    </>
  );
}

const Profilimg = styled.img`
  border-radius: 200px;
  -moz-border-radius: 100px;
  -webkit-border-radius: 100px;
  background: "transparent";
  width: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  width: 15em;
`;
const Text = styled.p`

  text-align: center;
  font-family: Helvetica, sans-serif;
  font-size: 1.5em;
  
  border-style: solid;
  border-width: 4px;
  border-color: lightpink;
  border-radius: 10px;
`
