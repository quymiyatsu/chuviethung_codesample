import React, {Component} from 'react';
import {Provider} from 'react-redux';

export default function reduxHOC(Scene, store) {
  return class extends Component {
    static options = {
      ...Scene.options
    };

    componentDidMount() {
      this.instance = this.child.getWrappedInstance();
    }

    resendEvent = (eventName, params) => {
      if (this.instance && this.instance[eventName]) {
        this.instance[eventName](params);
      }
    };

    componentDidAppear() {
      this.resendEvent('componentDidAppear');
    }

    componentDidDisappear() {
      this.resendEvent('componentDidDisappear');
    }

    onNavigationButtonPressed(buttonId) {
      this.resendEvent('onNavigationButtonPressed', buttonId);
    }

    render() {
      return (
        <Provider store={store}>
          <Scene
            ref={child => {
              this.child = child;
            }}
            {...this.props}
          />
        </Provider>
      );
    }
  };
}
