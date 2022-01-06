import React, { useEffect } from 'react'

const Alert = ({ status, messageText, clearAlert }) => {
  let message = <p className={`alert alert-${status}`} >{messageText}</p>;

  return (
    <React.Fragment>
      {message}
    </React.Fragment>
  );
}

export default Alert
