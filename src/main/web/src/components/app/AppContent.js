import React from 'react';

class AppContent extends React.Component {
    render() {
        return <div>{ React.cloneElement(this.props.children) }</div>
    }
}

export default AppContent;