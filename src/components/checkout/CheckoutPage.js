import React, {PropTypes} from 'react';
import {Link} from 'react-router';

import CheckoutStep1 from './CheckoutStep1';
import CheckoutStep2 from './CheckoutStep2';
import CheckoutStep3 from './CheckoutStep3';
import CheckoutStep4 from './CheckoutStep4';
import CheckoutStep5 from './CheckoutStep5';

class CheckoutPage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
          currentStep: 1
        };

        this.updateStep = this.updateStep.bind(this);
    }

    updateStep(step) {
      console.log('parent updatestep triggered');
      this.setState({
        currentStep : step
      })
    }

    render() {
      return (
        <div>
          <h1>Checkout</h1>
          <div id="accordion" className="panel-group">
            <CheckoutStep1 step={this.state.currentStep} updateStep={this.updateStep}/>
            <CheckoutStep2 step={this.state.currentStep} updateStep={this.updateStep}/>
            <CheckoutStep3 step={this.state.currentStep} updateStep={this.updateStep}/>
            <CheckoutStep4 step={this.state.currentStep} updateStep={this.updateStep}/>
            <CheckoutStep5 step={this.state.currentStep} />
          </div>
        </div>
      );
    }
}

export default CheckoutPage;
