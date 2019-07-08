import React from 'react';
import PropTypes from 'prop-types';
import links from '../../constants/links'
import { Link } from 'gatsby';

import footerStyles from './footer.module.scss';

const Footer = () => (
  // <footer className={`footer ${footerStyles.footer}`}>
  //   <div className="container-fluid text-md-left text-lg-right ">
  //     <div className="row">
        
  //     <div class="col-6 col-md-4">
       
  //         <Link  className={`footer ${footerStyles.links}`} to="/imprint">Imprint</Link>
      
        
  //       </div>

  //       <hr class="clearfix w-100 d-md-none pb-3"/>

  //       <div class="col-12 col-sm-6 col-md-8">
  //            <p>Schwedter Strasse 13</p>
  //            <p>10119 Berlin</p>
  //            <p>+49 30 555 72327</p>
  //            <p>info@pipes.de</p>
     
  //      </div>
       
       
  //     </div>
  //     <div className="row text-lg-center">
  //     <div className="col-lg-12 col-md-12">
  //         <p>Copyright © Pipes 2019</p>
  //       </div>
  //     </div>
       
  //   </div>


  // </footer>

  <footer className="page-footer font-small blue pt-4" className={`footer ${footerStyles.footer}`}>

  <div className="container-fluid text-center text-md-left">

    <div className="row">

    <div className="col-md-3 mb-md-0 mb-3" className={`footer ${footerStyles.links}`}>

            <ul className="list-unstyled">
               <li>
               <Link to="/imprint">Imprint</Link>
                </li>

            </ul>

            </div>

            <div className="col-md-3 mb-md-0 mb-3">
           </div>


      <div className="col-md-6 mt-md-0 mt-3">

        <p>Schwedter Strasse 13</p>
        <p>10119 Berlin</p>
        <p>+49 30 555 72327</p>
        <p>info@pipes.de</p>

      </div>

      <hr className="clearfix w-100 d-md-none pb-3"/>
  
    </div>



    <div className="footer-copyright text-center py-3">© 2019 Copyright:
    <a href="https://mdbootstrap.com/education/bootstrap/"> Pipes</a>
  </div>
  </div>
 
  

   </footer>

);

Footer.propTypes = {

};
Footer.defaultProps = {

};

export default Footer;



