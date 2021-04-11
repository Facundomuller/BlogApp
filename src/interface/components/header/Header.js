import './files/css/Header.css'
import Logo from './logo';
import Menu from './menu';

function Header() {
    return(
        <header className="appHeader">
            <Logo />
            <Menu />
        </header>
    );
}

export default Header