import React from 'react';
import PropTypes from 'prop-types';
import links from '../../constants/links'
import { Link } from 'gatsby';

import footerStyles from '../../atoms/theme/components/footer.scss';

const Footer = () => (

  // <footer className="page-footer font-small blue pt-4" className={`footer ${footerStyles.footer}`}>

  // <div className="container-fluid text-center text-md-left">

  //   <div className="row">

  //   <div className="col-md-6 mb-md-0 mb-3" >

  //           <ul className="list-unstyled">
  //              <li>
  //              <Link to="/imprint">Imprint</Link>
  //               </li>

  //           </ul>

  //           </div>

      

  //     <div className="col-md-6 mb-md-0 mb-3 col-sm-6 col-xs-12 text-center text-md-left" >

  //       <p>Schwedter Strasse 13</p>
  //       <p>10119 Berlin</p>
  //       <p>+49 30 555 72327</p>
  //       <p>info@pipes.de</p>

  //     </div>

  
  //   </div>



  //   <div className="footer-copyright text-center py-3 copyright">Copiright © {new Date().getFullYear()}  Pipes
  //   {/* <a href="https://mdbootstrap.com/education/bootstrap/" > Pipes</a> */}
  //   </div>
  // </div>
 
  

  //  </footer>

  <footer className="footer">
    <div className="box">
   
    <div className="links">
  
  <Link  to='/imprint'>Imprint</Link>

</div>

<div className="info">

   <p>Schwedter Strasse 13</p>
   <p>10119 Berlin</p>
   <p>+49 30 555 72327</p>
   <p>info@pipes.de</p>

 </div>

<div className="copyright">
Copiright © {new Date().getFullYear()}  Pipes
</div>


    </div>
  
</footer>

);

Footer.propTypes = {

};
Footer.defaultProps = {

};

export default Footer;



