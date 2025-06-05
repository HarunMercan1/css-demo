import React from "react";

function ProfileInline() {
  const style = {
    border: "2px groove red",
    padding: "20px",
    width: "300px",
    textAlign: "center",
    margin: "20px",
  };

  return (
    <div style={style}>
      <h2>Harun Mercan</h2>
      <p>Styled with Inline CSS</p>
    </div>
  );
}

export default ProfileInline;
