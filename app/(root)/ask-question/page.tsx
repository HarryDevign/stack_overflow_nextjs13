import React from "react";

const AskQuestion = () => {
  const isUserLoggedIn = false;

  if(!isUserLoggedIn) {
    return <div>You logged in</div>
  }
  return <div>AskQuestion</div>;
};

export default AskQuestion;
