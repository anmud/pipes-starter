import React  from 'react';
import '../Jumbotron/Jumbotron.css';

const Jumbotron = (props) => {
  
    return (
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-3">{props.title}</h1>
        </div>
      </div>
    );
  
}

export default Jumbotron;