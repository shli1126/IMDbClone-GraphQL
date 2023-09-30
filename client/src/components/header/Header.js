import {useNavigate} from "react-router-dom";

const Header = () => {
    const navigate = useNavigate()
    const goToHomePage = () => {
        navigate('/');
    };

    const goToRegisterPage = () => {
        navigate('/Register')
    }

    const goToLoginPage = () => {
        navigate('/Login')
    }

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <button className="navbar-brand" onClick={goToHomePage}>
                    IMDb clone
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <button className="btn btn-outline-success" type="submit">
                            My watch list
                        </button>
                        <button className="btn btn-outline-success" type="submit" onClick={goToRegisterPage}>
                            Register
                        </button>
                        <button className="btn btn-outline-success" type="submit" onClick={goToLoginPage}>
                            Login
                        </button>
                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"
                        />
                        <button className="btn btn-outline-success" type="submit"
                        >Search
                        </button>
                    </form>
                </div>
            </div>
        </nav>
    )
}
export default Header;
