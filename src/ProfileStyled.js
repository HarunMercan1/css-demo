import React from "react";
import styled from "styled-components";

const Card = styled.div`
  border: 2px dotted green;
  padding: 20px;
  width: 300px;
  text-align: center;
  margin: 20px;
`;

function ProfileStyled() {
  return (
    <Card>
      <h2>Harun Mercan</h2>
      <p>React Öğrencisi</p>
    </Card>
  );
}

export default ProfileStyled;
