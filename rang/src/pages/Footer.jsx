import React, {Component } from 'react';
import {Link} from 'react-router-dom';
import './Footer.css';
class Footer extends Component {
render(){
  return(
<footer class="footer">
      <div class="container">
        <span class="text-muted">Place sticky footer content here.</span>
      </div>
    </footer>
  );
}
}

export default Footer;
