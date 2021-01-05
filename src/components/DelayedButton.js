// Code DelayedButton Component Here
import React from 'react';
class DelayedButton extends React.Component {
 
  buttenDelay = (event) => {
<<<<<<< HEAD
    event.persist();
    window.setTimeout(() => {
      this.props.onDelayedClick(event);
    }, this.props.delay);
  }
 
 
=======
    this.props.onDelayedClick();
  }
 
>>>>>>> 1206ef5f51eb536373c96ee7f4b5cbd5ce6ba096
  render() {
    return (
    <button onClick={this.buttenDelay}></button>
    );
  }
}

export default DelayedButton
