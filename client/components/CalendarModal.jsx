import React from 'react';
import styled, { css } from 'styled-components';
import LeftCalendar from './LeftCalendar.jsx';
import RightCalendar from './RightCalendar.jsx';


const Calendar = styled.div`
  position: absolute;
  display: grid;
  background-color: whitesmoke;
  z-index: 5;
  height: 430px;
  width: 597px;
  margin-left: 400px;
  grid-template: 1fr / 1fr;
`;

const Wrapper = styled.div`
  display: grid;
  grid-area: 1 / 1 / span 1 / span 1;
  background-color: whitesmoke;
  height: 419px;
  grid-template: 57px 325px 37px / 298px 299px;


`;

const Header = styled.div`
  display: grid;
  grid-area: 1 / 1 / span 1 / span 2;
  background-color: whitesmoke;
  color: black;
  text-align: center;
  margin: 0px 15px;
  padding: 15px 0px 10px 0px;
  border-bottom: 1px solid lightgray;
`;

const Left = styled.div`
  display: grid;
  grid-area: 2 / 1 / span 1 / span 1;
  background-color: whitesmoke;
  color: black;
  margin: 12px 0px;
  padding: 0px 16px;

`;

const Right = styled(Left)`
  grid-area: 2 / 2 / span 1 / span 1;
  border-left: 1px solid lightgray;
`;

const Footer = styled.div`
  display: grid;
  grid-area: 3 / 1 / span 1 / span 2;
  background-color: whitesmoke;
  padding: 16px 0px;
  border-top: 1px solid lightgray;
  margin: 10px 15px;
  font-size: 10px;
`;

const Arrow = styled.div`
  position: absolute;
  z-index: 8;
  width: 0;
  height: 0;
  border-top: 15px solid transparent;
  border-right: 30px solid whitesmoke;
  border-bottom: 15px solid transparent;
  margin-left: 375px;
  margin-top: 12px;
`;

const CloseCalModal = styled.button`
  position: absolute;
  z-index: 15;
  width: 15px;
  heigth: 15px;
  margin-left: 965px;
  background-color: transparent;
  border-color: transparent;
  margin-top: 5px;
  font-weight: bold;
`;

const CalendarModal = (props) => {
  if (!props.showCalendar) {
    return null;
  }
  return (
    <div>
      <Arrow />
      <CloseCalModal onClick={props.showCalendarModal}>X</CloseCalModal>
      <Calendar>
        <Wrapper>
          <Header>
            <span>Select a date to continue</span>
          </Header>
          <Left>
            <LeftCalendar
              month={props.month}
              year={props.year}
              day={props.day}
              handlePrevClick={props.handlePrevClick}
              handleDateClick={props.handleDateClick}
            />
          </Left>
          <Right>
            <RightCalendar
              lastMonth={props.month}
              year={props.year}
              day={props.day}
              handleNextClick={props.handleNextClick}
              handleDateClick={props.handleDateClick}
            />
          </Right>
          <Footer />
        </Wrapper>
      </Calendar>
    </div>
  );
};

export default CalendarModal;
