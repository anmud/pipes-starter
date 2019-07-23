import React from 'react';
import PropTypes from 'prop-types';
import links from '../../constants/links'
import { Link } from 'gatsby';

import footerStyles from '../../atoms/theme/components/footer.scss';

const Footer = () => (


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



