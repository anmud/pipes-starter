import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import SimpleHero from '../SimpleHero/SimpleHero'
import Banner from '../SimpleHero/Banner'

import testComponent from './testComponent.module.scss';

const TestComponent = ({data}) => (
  <div className="mainContainer">
    <div className="row">
      <div className="col-lg-12 col-md-12 text-center">
        <div className="gatsby-square">
          
          <SimpleHero>
            <Banner
            title="Pipes"
            info="One-click deployment,  open source platform for moving data with radically less overhead and cost."
            ></Banner>
          </SimpleHero>
          
         
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
