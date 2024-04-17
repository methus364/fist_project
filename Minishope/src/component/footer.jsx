import { Link } from "react-router-dom";


function footer() {
    return (
        <>
            <footer className="container-fulid ">
                <div className="row d-flex m-0 mt-5">
                    <div className="row">
                        <div className="col-sm-3 d-flex align-items-center flex-column ">
                            <p className="h3">MiniShope</p>
                            <div className="">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium veniam minima adipisci distinctio optio odio, ratione rem culpa suscipit eum mollitia soluta? Doloribus neque fugit architecto deserunt a, distinctio enim!</p>
                            </div>
                        </div>
                        <div className="col-sm-3 d-flex align-items-center flex-column">
                            <p className="h3">QUICK LINKS</p>
                            <Link className="nav-link " aria-current="page" to='/'><p className="">Home</p></Link>
                            <Link className="nav-link" to='/Man'><p className="/men">Man</p></Link>
                            <Link className="nav-link" to='/Women' ><p className="/women">Women</p></Link>

                        </div>
                        <div className="col-sm-3 d-flex align-items-center flex-column">
                            <p className="h3">HELP & INFO HELP</p>
                            <p>TRACK YOUR ORDER</p>
                            <p>RETURNS POLICIES</p>
                            <p>SHIPPING + DELIVERY</p>
                            <p>CONTACT US</p>
                            <p>FAQS</p>
                        </div>
                        <div className="col-sm-3 d-flex flex-column align-items-center">
                            <p className="h3">CONTACT US</p>
                            <div className="">
                                <p>Do you have any queries or suggestions?</p>
                                <p>yourinfo@gmail.com</p>
                                <p>If you need support? Just give us a call.</p>
                                <p>+55 111 222 333 44</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col mt-5 d-flex justify-content-center align-items-center flex-column">
                            <p>©Methus Sheephkunwong</p>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}
export default footer; 