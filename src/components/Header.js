import Proptypes from 'prop-types';
import Button from './Button';

const Header = ({ title, onToggle, showAddTask }) => {
    return (
        <header className="header">
            <h1>{title}</h1>
            <Button 
                color={showAddTask ? "red" : "green"} 
                text={showAddTask ? "Close" : "Add"} 
                onClick={onToggle}
                />
        </header>
    )
};

Header.defaultProps = {
    title: 'Task Trackers'
}

Header.propTypes = {
    title: Proptypes.string
}

// const headingStyle = {
//     color: 'red', 
//     backgroundColor: 'black'
// }

export default Header;