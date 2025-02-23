import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">MyApp</div>
            <ul className="nav-links">
                <li>
                    <NavLink to="/" activeClassName="active" exact>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/recipes/categories" activeClassName="active" exact>
                        Categories
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/recipes/popular" activeClassName="active" exact>
                        Popular Recipes
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/about" activeClassName="active">
                        About
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;