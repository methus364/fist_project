import { Link } from "react-router-dom";
import './css_component/nav.css'

function Navbar() {
    return (
        <>
            <div className=" ">
                <nav className="container-fluid navbar navbar-expand-lg px-3 d-flex  ">
                    <Link className="navbar-brand ms-5 " to='/'><p className="m-0">MiniShope</p></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
                            <li className="nav-item ms me-lg-3 ">
                                <Link className="nav-link " aria-current="page" to='/'><p className="">Home</p></Link>
                            </li>
                            <li className="nav-item me-lg-3 ">
                                <Link className="nav-link" to='/Man'><p className="/men">Man</p></Link>
                            </li>
                            <li className="nav-item me-lg-3">
                                <Link className="nav-link" to='/Women' ><p className="/women">Women</p></Link>
                            </li>
                            {/* icon */}
                            <li className="nav-item ms-2 me-lg-3">
                                <div className="d-flex justify-content-lg-evenly  justify-content-md-center justify-content-sm-center justify-content-center">
                                    <Link to='' className="nav-link d-flex justify-content-center me-5 me-lg-0 me-md-5 me-sm-5 align-item-center "><i className="bi bi-person text-dark  "></i></Link>
                                    <Link to='' className="nav-link d-flex justify-content-center align-item-center " ><i className="bi bi-cart text-dark  "></i></Link>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </>
    )
}
export default Navbar;