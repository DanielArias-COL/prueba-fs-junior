import logo from '../assets/logo.jpg'
import { Link } from 'react-router-dom'
import '../styles/headerstyle.css';


export default function Header() {
    
    const userData = { name: 'John Doe' } 

    return (
        <nav className="header">
            {/* Logo */}
            <Link to="/" aria-label="Ir a la página principal">
                <img className="header__logo" src={logo} alt="Logo"/>
            </Link>

            <ul className="flex space-x-6 text-white">
                <li>
                    <Link to="/" aria-label="Ir a la página principal" className="hover:text-blue-400">
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/movies/create" aria-label="Ir a la página de contacto" className="hover:text-blue-400">
                        Create Movie
                    </Link>
                </li>
                
                <li>
                    {userData ? (
                        <span className="text-gray-300">Hello, {userData.name}</span>
                    ) : (
                        <span className="text-gray-300">Hello, Guest</span>
                    )}
                </li>
            </ul>
        </nav>
    )
}
