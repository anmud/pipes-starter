import React from 'react';
import PropTypes from 'prop-types';
import img from '../../images/whiteboard-849811.jpg'
import { Link } from 'gatsby';

import testComponent from './testComponent.module.scss';

const TestComponent = ({data}) => (
  <div className="mainContainer">
    <div className="row">
      <div className="col-lg-12 col-md-12 text-center">
        <div className="gatsby-square">
          <h1>Pipes</h1>
          <h5>One-click deployment, open source platform for moving data with radically less overhead and cost</h5>
          <div className="img">
          <img src={img}  alt='Pipes Img'/>
          </div>
         
        </div>
      </div>
    </div>
  </div>
);

TestComponent.propTypes = {

};
TestComponent.defaultProps = {

};

export default TestComponent;
