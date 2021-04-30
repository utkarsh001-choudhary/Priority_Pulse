import React from 'react';

function Info(props) {

  return (
    <div className="logo-fdiv">
      <div className="logo-div">
        <div className="icons">
          <i className="far fa-circle outer-circle fa-4x"></i>
          <i className={props.img}></i>
        </div>

      </div>
      <div className="logo-ldiv">
        <h4 className="logo-title">{props.title}</h4>
        <p className="logo-content">{props.content}</p>
      </div>
    </div>

  );
}
export default Info;