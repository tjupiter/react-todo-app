import PropTypes from 'prop-types';
import React from 'react';

const Button = ({ color, text, onClick }) => {
    return (
        <button 
            style={{ backgroundColor: color }} 
            className='btn'
            onClick={onClick}
            >
            {text}
            </button>
    )
}

export default Button;

Button.defaultProps = {
    color: 'steelblue'
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func.isRequired
}

// import React from 'react';

// class Button extends React.Component 
//     render () {
//         return (
//             <button className="btn">Add</button>
//         )
//     }
// }

// export default Button;


