
import "./ToggleSwitch.css"
import classNames from 'classnames'
import iconDark from '../../assets/icons/icon-dark.png';
import iconLight from '../../assets/icons/icon-light.png';

export const ToggleSwitch = ({ isDarkMode, handleDarkMode }) => {
    console.log('toggle', isDarkMode)

    return (
        <div className={classNames("switchButton", { 'switchButtonDark': isDarkMode })} onClick={handleDarkMode}>
            <div className={classNames("switchBox", { 'switchBoxDark': isDarkMode })}>
                <img src={isDarkMode ? iconDark : iconLight} className="switchImage"></img>
            </div>
        </div>
    )
}