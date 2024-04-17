import './css_component/itemStyle.css'
function Item() {
    const items = []
    for (let i = 0; i < 3; i++) {
        items.push(
            { "img": 'https://cdn.pixabay.com/photo/2024/01/27/18/24/squirrel-8536537_1280.jpg' }
        )
    }
    return (

        <>

            <div className="container-fluid mt-5 "  >
                <div className='row ms-5'>
                    {/* Header Products */}
                    <div className='Head-pro'>
                        <h1>items</h1>
                    </div>
                    {/* Header Products */}
                    {items.map(item =>
                        <div key={item} className="card img-item col-12 col-sm-4">
                            <img src={item.img} className="card-img-top "  />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>

                        // <div key={item} className="col-12 col-sm-4" >
                        //     <div className=''>
                        //         <img src={item.img} className="img-item " alt="" />
                        //         <div className=''>
                        //         <h3>IPHON</h3>
                        //         <span>10$</span>
                        //     </div>
                        //     </div>
                        // </div>
                    )}
                </div>
            </div>

        </>
    )
}
export default Item;