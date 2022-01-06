import React, { useEffect } from "react";

const Alert = ({ status, messageText, clearAlert }) => {
  let message = <p className={`alert alert-${status}`}>{messageText}</p>;

  useEffect(() => {
    const timer = setTimeout(() => {
      clearAlert();
    }, 3000);

    return () => clearTimeout(timer);
  }, [clearAlert]);

  return <React.Fragment>{message}</React.Fragment>;
};

export default Alert;
