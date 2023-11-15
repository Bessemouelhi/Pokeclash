import React, { Component } from 'react';

const hitsCounter = (WrappedComponent) => {
  class HitsCounter extends Component {

    state = {
      hits: 0,
      life: 100,
    }

    addOneHit = () => {
      console.dir(WrappedComponent.name)
      this.setState(prevState => {
        return {
          hits: prevState.hits + 1
        }
      })
    }

    componentDidUpdate(prevProps, prevState) {
      if(this.state !== prevState) {
        const compName = WrappedComponent.name;
        this.props.reduceHandler(compName);
      }
    }

    render() {
      return <WrappedComponent addOneHit={this.addOneHit} hocState={this.state} {...this.props}/>
    }
  }
  return HitsCounter;
};

export default hitsCounter;