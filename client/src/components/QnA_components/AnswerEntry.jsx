import React, { useState } from 'react';
import axios from 'axios';

const AnswerEntry = ({ answer }) => {
  const [helpful, setHelpful] = useState(answer.helpfulness);
  const [click, setClick] = useState(false);
  const [reported, setReported] = useState(false);

  const handleHelpfulness = (id, help) => {
    const updateHelpful = {
      updateHelpful: help + 1,
    };
    axios.put(`/api/qa/answers/${answer.answer_id}/helpful`, updateHelpful)
      .catch((err) => console.error(err));
  };

  const handleAnswerReport = () => {
    const report = {
      reported: true,
    };
    axios.put(`/api/qa/answers/${answer.answer_id}/report`, report)
      .catch((err) => console.error(err));
  };

  const handleHelpfulClick = () => {
    handleHelpfulness();
    setHelpful(helpful + 1);
    setClick(true);
  };

  const handleReportClick = () => {
    handleAnswerReport(answer.answer_id, reported);
    setReported(true);
  };

  const date = new Date(answer.date).toString().slice(4, 16);

  return (
    <div>
      <div>
        <span className="bolder">A: </span>
        {answer.body}
      </div>
      <div className="userContainer">
        <span className="text-muted">{`${answer.answerer_name}, `}</span>
        <span className="text-muted">{`${date} | `}</span>
        {!click ? (
          <span
            onClick={handleHelpfulClick}
            onKeyDown={handleHelpfulClick}
            role="button"
            tabIndex={0}
          >
            {'Helpful? '}
            <u>Yes</u>
            {`(${helpful}) `}
          </span>
        ) : (
          <span>
            {'Helpful? '}
            <u>Yes</u>
            {`(${helpful}) `}
          </span>
        )}
        <span className="divider" />
        &nbsp;
        {!reported ? (
          <u
            onClick={handleReportClick}
            onKeyDown={handleReportClick}
            role="button"
            tabIndex={-1}
          >
            Report
          </u>
        ) : (
          <span>Reported</span>
        )}
      </div>
    </div>
  );
};

export default AnswerEntry;
