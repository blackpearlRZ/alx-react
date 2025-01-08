import React from "react";

export const WithLogging = (WrappedComponent, id) => {
    const wrapper = class extends React.Component {
        constructor(props) {
            super(props);
        }

        componentDidMount() {
            console.log(`Component ${WrappedComponent.name || 'Component'} is mounted`);
        }

        componentWillUnmount() {
            console.log(`Component ${WrappedComponent.name || 'Component'} is going to unmount`);
        }

        render() {
            return <WrappedComponent {...this.props} />;
        }
    };
    wrapper.displayName = `WithLogging(${WrappedComponent.name || 'Component'})`;
    return wrapper;
};