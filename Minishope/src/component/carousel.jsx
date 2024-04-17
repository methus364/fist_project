import './css_component/carousel.css'

function carousel() {
    return (
        <>
            <div className='container-fluid p-0'>
                <div id="carouselExampleFade" className="carousel slide carousel-fade " data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner ">
                        <div className="carousel-item active ">
                            <img src="https://cdn.pixabay.com/photo/2023/05/29/22/22/space-needle-8027331_1280.jpg" className="d-block img-c " alt="..." />
                            <div className="carousel-caption  d-md-block">
                                <p>Some representative placeholder content for the first slide.</p>
                                <a href="#" className='btn btn-dark'>SHOP PRODUCT</a>
                            </div>
                        </div>
                        <div className="carousel-item ">
                            <img src="https://cdn.pixabay.com/photo/2015/10/30/20/13/sunrise-1014712_1280.jpg" className="d-block img-c " alt="..." />
                            <div className="carousel-caption  d-md-block">
                                <p>Some representative placeholder content for the first slide.</p>
                                <a href="#" className='btn btn-dark'>SHOP PRODUCT</a>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="https://cdn.pixabay.com/photo/2013/04/04/12/34/mountains-100367_1280.jpg " className="d-block img-c " alt="..." />
                            <div className="carousel-caption  d-md-block">
                                <p>Some representative placeholder content for the first slide.</p>
                                <a href="#" className='btn btn-dark'>SHOP PRODUCT</a>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </>
    )
}
export default carousel;