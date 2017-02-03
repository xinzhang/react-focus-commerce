import React, {PropTypes} from 'react';
import {Link} from 'react-router';

import CheckoutStep1 from './CheckoutStep1';
import CheckoutStep2 from './CheckoutStep2';
// import CheckoutStep3 from './CheckoutStep3';
// import CheckoutStep4 from './CheckoutStep4';
// import CheckoutStep5 from './CheckoutStep5';
// import CheckoutStep6 from './CheckoutStep6';

class CheckoutPage extends React.Component {

    render() {
      return (
        <div>
          <h1>Checkout</h1>
          <div id="accordion" className="panel-group">
            <CheckoutStep1 />
            <CheckoutStep2 />
          </div>
        </div>
      );
    }
}

export default CheckoutPage;
