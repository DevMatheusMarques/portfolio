import PropTypes from 'prop-types';
import '../../css/button.css';

const Button = ({href, buttonClass, iconClass, iconAlt, buttonText, iconSrc}) => {
    return (
        <a href={href} className="link">
            <button type="button" className={buttonClass}>
                <img src={iconSrc}
                     alt={iconAlt}
                     className={iconClass}/>
                {buttonText}
            </button>
        </a>
    );
};

Button.propTypes = {
    href: PropTypes.string.isRequired,
    buttonClass: PropTypes.string.isRequired,
    iconClass: PropTypes.string.isRequired,
    iconAlt: PropTypes.string.isRequired,
    buttonText: PropTypes.string.isRequired,
    iconSrc: PropTypes.string.isRequired,
};

Button.defaultProps = {
    buttonClass: 'btn-contact',
};

export default Button;