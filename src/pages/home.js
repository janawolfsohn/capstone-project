import styled from "styled-components/macro";
import Header from "../modules/Header";

export default function Home() {
  const today = new Date();
  const day = today.getDate();
  const month = today.getMonth() + 1;

  return (
    <>
      <Header title="Hallo Jana" />
      <Calendar>
        <div>
          <h3>
            {day}.{month}
          </h3>
        </div>
        <div>
          <h3>
            {day + 1}.{month}
          </h3>
          <p>3 Todos</p>
        </div>
        <div>
          <h3>
            {day + 2}.{month}
          </h3>
        </div>
        <div>
          <h3>
            {day + 3}.{month}
          </h3>
        </div>
        <div>
          <h3>
            {day + 4}.{month}
          </h3>
        </div>
      </Calendar>
      <Today>
        <h3>Was steht heute an?</h3>
        <p>Für Heute sind keine Aufgaben geplant.
          
        </p>
      </Today>
    </>
  );
}

const Calendar = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Today = styled.div`
  border: 1px dotted purple;
  margin: 1rem 2rem;
  padding: 1rem;
`;
