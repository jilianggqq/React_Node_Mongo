import React from 'react';

class ExplainBindingComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { author: 'Qiqiang Guan' };
    this.onDismiss = this.onDismiss.bind(this);
  }
  onDismiss() {
    // 1. if you don't bind onDismiss in constructor.
    // during the method, this will be undefined. if you want to get state through this, that will be fucked.
    // that's why you need to bind this in the constructor.
    // 2. the second way is using ES6 array function. this will be the instance of the Component
    console.log('this', this);
    console.log(this.state.author);
  }
  render() {
    return (
      <div>
        <button
          type="button"
          // using the 2nd way.
          /*onClick={() => {
            this.onDismiss();
          }}*/
          onClick={this.onDismiss}
        >
          Click me
        </button>
      </div>
    );
  }
}

export default ExplainBindingComponent;
