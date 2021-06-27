import React from "react";
import { useState } from "react";
import styled from "styled-components";
import logo from "../media/logo.jpg"

const Container = styled.div`
  width: 100%;
  height: 10vh;
  background-color: black;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding:0px 10%;
  /* border-bottom: 2px solid rgb(90, 90, 90); */
`;

const Clock = styled.div`
  background-color: #333;
  padding: 10px;
  border-radius: 5px;
  width: 180px;
  text-align: center;
`;

const Logo = styled.img`
    display: inline-block;
    height: 80%;
    border-radius: 0px 50px 50px 50px;
` 

export default function Header() {
  const [dateTime, setDateTime] = useState("00-00-00 00:00:00");
  const getDateTime = () => {
    var today = new Date();
    var year = today.getFullYear();
    var month = today.getMonth();
    var day = today.getDay();
    var hr = today.getHours();
    var min = today.getMinutes();
    var sec = today.getSeconds();
    return `${year}-${month}-${day} ${hr}:${min}:${sec}`;
  };

  const clock = () => setDateTime(getDateTime());

  setInterval(clock, 1000);
  return (
    <Container>
        <Logo src={logo}/>
      <Clock>{dateTime}</Clock>
        <Logo src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1200px-Star_Wars_Logo.svg.png"/>
    </Container>
  );
}
