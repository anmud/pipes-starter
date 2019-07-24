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

   <p>Dimitri Tarasowski</p>
   <p>Bruno-Bürgel-Weg 39A</p>
   <p>12439 Berlin</p>
   <p>+49 157 76831593</p>
   <p>hello [@] pipesdata.com</p>

 </div>

<div className="copyright">
Copiright © {new Date().getFullYear()}  Pipesdata.com
</div>


   
</div>
</footer>

);

Footer.propTypes = {

};
Footer.defaultProps = {

};

export default Footer;



