import './styles.css';

function Navbar() {
    return (
        <header>
            <nav className="container">
                <div className="breakingbad-nav-content">
                    <h1>BreakingBad</h1>
                    <a href="https://pt.wikipedia.org/wiki/Breaking_Bad" target="_blank" rel="noreferrer">
                        <div className="dsmovie-contact-container">
                            <p className="saymyname-contact-link">Say my name</p>
                        </div>
                    </a>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;