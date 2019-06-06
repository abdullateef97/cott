import React from 'react';
import Dialog from 'react-toolbox/lib/dialog';

export default class Modal{
    state = {
        active: this.props.active
    }

    handleToggle = () => {
        this.setState({active: !this.state.active});
    }

    actions = [{
        label: 'Close',
        onClick: this.handleToggle
      }];
    render() {
        let {type, response: {data}} = this.props;
        let message = type == 'left'? `The farmer will have ${data} bananas left on getting to the market`:
                            `The optimum number of camels required is ${data}`
        return (
            <section>
            <Dialog actions={this.actions} active={this.state.active} title='Response' type="small"
            onEscKeyDown={this.handleToggle}
            onOverlayClick={this.handleToggle}
            >
              {message}
            </Dialog>
          </section>
        );
    }
}