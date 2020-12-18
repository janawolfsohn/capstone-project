import Header from "../modules/Header";
import React from "react";
import styled from "styled-components/macro";

export default function Wissen() {
  let data = [
    {
      title: "Energie tanken(Übung)",
      content: `Diese Übung eignet sich gut als mentaler Einstieg für alle anderen Meditationen.

      Atmen Sie mehrere Male tief ein. Stellen Sie sich beim Einatmen jedes Mal vor, dass mit der Luft zugleich ein Energieschwall in den Körper eindringt. Schließen Sie die Augen und fühlen Sie, wie die Energie die einzelnen Körperteile erreicht – die Ohren, die Augen, die Nase, die Stirn, das Kinn, den Hals, die Schultern, den Oberkörper, die Arme, den Unterleib, die Beine, die Füße und ganz zum Schluss die Zehen.

      Die visualisierte Energie strömt immer dann in das betreffende Körperteil, wenn Sie tief einatmen.
      
      `,
    },
    {
      title: "Feuer-Meditation(Übung)",
      content: `Sie stellen sich vor, dass Sie von einem Meer aus Feuer umgeben sind. Obwohl die Flammen um Sie herum unruhig züngeln, geht von Ihnen keine Gefahr aus.

      Atmen Sie tief ein und aus. Beim Einatmen ziehen Sie die Hitze in Ihren Körper. Sie spüren, wie Sie sich langsam erwärmen.

      Nach mehreren Atemzügen stellen Sie sich diesmal beim Ausatmen vor, die Wärme wieder abzugeben. Die Körpertemperatur fühlt sich nun wieder normal an.`,
    },
    {
      title: "Rosen-Meditation(Übung)",
      content: `Setzen Sie sich entspannt hin, sodass die Fußsohlen den Boden berühren.
      Legen Sie Ihre Hände an Ihr Herz.

      Schließen Sie nun die Augen und atmen Sie einige Male tief ein und aus.
      
      Dann stellen Sie sich eine Rosenknospe in Ihrem Herzen vor. Anfangs ist sie noch geschlossen, doch mit jedem tiefen Atemzug öffnen sich die Blütenblätter ein klein wenig mehr, bis sie sich schließlich in voller Blütenpracht zeigt. Nehmen Sie (in Ihrer Vorstellung) wahr, wie die Rose nun Ihren Körper und den Raum mit einem bezaubernden Duft erfüllt.
      `,
    },
  ];

  return (
    <>
      <Header title="Wissen" />
      Hier steht etwas Wissenswertes!
      {data.map((item) => (
        <Details>
          <summary>{item.title}</summary>
          <p>{item.content}</p>
        </Details>
      ))}
    </>
  );
}

const Details = styled.details`
  padding: 1rem;
`;
