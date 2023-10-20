import { Link, useLocation } from "react-router-dom";
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faTachometerAlt, faBook, faCalendar } from '@fortawesome/free-solid-svg-icons';

function KanbasNavigation() {
    const links = [
        {name: "Account", icon: faUserCircle},
        {name: "Dashboard", icon: faTachometerAlt},
        {name: "Courses", icon: faBook},
        {name: "Calendar", icon: faCalendar}
        // ... add other links similarly
    ];

    const { pathname } = useLocation();

    return (
        <div className="navigation-list-group">
            <div className="northeastern-logo">N</div>
            {links.map((link, index) => (
                <Link
                    key={index}
                    to={`/Kanbas/${link.name}`}
                    className={`navigation-list-group-item ${pathname.includes(link.name) && "active"}`}
                >
                    <FontAwesomeIcon icon={link.icon} />
                    {link.name}
                </Link>
            ))}
        </div>
    );
}

export default KanbasNavigation;
