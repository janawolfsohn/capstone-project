import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components/macro";
import CardGrid from "../common/CardGrid";
import Header from "../modules/Header";
import { StarIcon } from "../common/icons";
import JournalEntry from "./JournalEntry";
import JournalForm from "./JournalForm";
import useJournalForm from "./useJournalForm";
import { isTheSameDay } from "../lib/date";

JournalPage.propTypes = {
  entries: PropTypes.arrayOf(PropTypes.object).isRequired,
  addEntry: PropTypes.func.isRequired,
  today: PropTypes.instanceOf(Date),
};

export default function JournalPage({ entries, addEntry, today = new Date() }) {
  const { formIsVisible, showForm, onSave, onCancel } = useJournalForm(
    addEntry
  );
  const hasEntryForToday = entries.some(({ date }) =>
    isTheSameDay(date, today)
  );

  return (
    <>
      <Header title="Journal" />
      <StyledCardGrid>
        {formIsVisible ? (
          <JournalForm onCancel={onCancel} onSave={onSave} />
        ) : (
          <>
            <Button disabled={hasEntryForToday} onClick={showForm}>
              Rate Today <StarIcon />
            </Button>
            {entries.map((entry, index) => (
              <JournalEntry hasDateHeader entry={entry} key={index} />
            ))}
          </>
        )}
      </StyledCardGrid>
    </>
  );
}

const StyledCardGrid = styled(CardGrid)`
  justify-items: center;
`;

const Button = styled.button`
  background-color: var(--orange-main);
  color: white;
  border: none;
  border-radius: 5px;
  box-shadow: var(--shadow-orange);
  padding: 12px;
  fill: white;
  font-weight: 700;
  font-size: 100%;
  line-height: 1.5;
  width: 200px;

  :disabled {
    background-color: var(--orange-25);
    box-shadow: none;
  }

  svg {
    height: 12px;
    width: 12px;
  }
`;
