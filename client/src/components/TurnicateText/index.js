import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Truncate from 'react-truncate';
 
class ReadMore extends Component {
    constructor(...args) {
        super(...args);
 
        this.state = {
            expanded: false,
            truncated: false
        };
 
        this.handleTruncate = this.handleTruncate.bind(this);
        this.toggleLines = this.toggleLines.bind(this);
    }
 
    handleTruncate(truncated) {
        if (this.state.truncated !== truncated) {
            this.setState({
                truncated
            });
        }
    }
 
    toggleLines(event) {
        event.preventDefault();
 
        this.setState({
            expanded: !this.state.expanded
        });
    }
 
    render() {
        const {
            children,
            more,
            less,
            lines 
        } = this.props;
 
        const {
            expanded,
            truncated 
        } = this.state;
 
        return (
            <div>
                <Truncate
                    trimWhitespace={true}
                    lines={!expanded && lines}
                    ellipsis={(
                        <span>... <a href='#' onClick={this.toggleLines}><p>{more}</p></a></span>
                    )}
                    onTruncate={this.handleTruncate}
                >
                    {children}
                </Truncate>
                {!truncated && expanded && (
                    <span> <a href='#' onClick={this.toggleLines}><p>{less}</p></a></span>
                )}
            </div>
        );
    }
}
 
ReadMore.defaultProps = {
    lines: 1,
    more: 'Read more',
    less: 'Show less'
};
 
ReadMore.propTypes = {
    children: PropTypes.node.isRequired,
    lines: PropTypes.number,
    less: PropTypes.string,
    more: PropTypes.string
};
 
export default ReadMore;