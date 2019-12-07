import React from 'react';
import ReactDOM from 'react-dom';
import ConfirmCom from "./confirm-com";
function confirm(str) {
    return new Promise((resolve, reject) => {
      const div = document.createElement("div");
      div.id ="confirm"
      document.body.appendChild(div);
      ReactDOM.render(
        <ConfirmCom
          complete={() => {
            resolve(true);
          }}
          incomplete={() => {
            resolve(false);
          }}
          context={str}
        />,
        document.getElementById("confirm")
      );
    });
  }

  export default confirm