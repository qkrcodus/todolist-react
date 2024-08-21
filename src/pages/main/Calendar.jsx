// Calendar.jsx
import React, { useState } from 'react';
import './Calendar.css';
import './reset.css';
import styled from 'styled-components';

const Button = styled.button`
  padding: 5px;
     background: blue;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const Calendar = ({ onDateSelect }) => {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());

  const renderCalendar = () => {
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const firstDayOfWeek = firstDayOfMonth.getDay();

    const todayStr = new Date(today.getFullYear(), today.getMonth(), today.getDate()).toISOString().split('T')[0];
    let daysHtml = [];

    for (let i = 0; i < firstDayOfWeek; i++) {
      daysHtml.push(<li key={`empty-${i}`} className="empty"></li>);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(currentYear, currentMonth, day).toISOString().split('T')[0];
      daysHtml.push(
        <li
          key={day}
          className={date === todayStr ? 'current-date' : ''}
          onClick={() => onDateSelect(currentYear, currentMonth + 1, day)}
        >
          {day}
        </li>
      );
    }

    return daysHtml;
  };

  const goToPreviousMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const goToNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  return (
    <div className="calendar">
      <div className="header">
        <Button onClick={goToPreviousMonth}>
          이전 달
        </Button>
        <div className="current">{`${currentYear}년 ${currentMonth + 1}월`}</div>
        <Button onClick={goToNextMonth}>
          다음 달
        </Button>
      </div>
      <ul className="days">{renderCalendar()}</ul>
    </div>
  );
};

export default Calendar;
