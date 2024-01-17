import React from 'react'
import img1 from '../../assets/mega-sale-online.png'
import img2 from '../../assets/christmas-sale.jpg'
import img3 from '../../assets/all-items-sale.jpg'
import img4 from '../../assets/watchs.jpg'
import img5 from '../../assets/dimonds.jpg'
import img6 from '../../assets/hot-sale.jpg'
import img7 from '../../assets/jwels.jpg'
import img8 from '../../assets/jwells2.jpg'



const Carousal = () => {
  return (
    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="6" aria-label="Slide 7"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="7" aria-label="Slide 8"></button>
    </div>
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src={img1} className="d-block w-100" alt="..." />
      </div>
      <div className="carousel-item">
        <img src={img2} className="d-block w-100" alt="..." />
      </div>
      <div className="carousel-item">
        <img src={img3} className="d-block w-100" alt="..." />
      </div>
      <div className="carousel-item">
        <img src={img4} className="d-block w-100" alt="..." />
      </div>
      <div className="carousel-item">
        <img src={img5} className="d-block w-100" alt="..." />
      </div>
      <div className="carousel-item">
        <img src={img6} className="d-block w-100" alt="..." />
      </div>
      <div className="carousel-item">
        <img src={img7} className="d-block w-100" alt="..." />
      </div>
      <div className="carousel-item">
        <img src={img8} className="d-block w-100" alt="..." />
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
  )
}

export default Carousal