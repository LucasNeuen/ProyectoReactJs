/* import debito_1 from './assets/debito_1.png';
import debito from './assets/debito.png';
import prepaga from './assets/prepaga.png';
import prepaga_1 from './assets/prepaga_1.png';
import "./SeccionPrincipal.css";





const SeccionPrincipal = () => {

    return (
        <>
            <main className='main-1'>
                <section className='seccion-1'>
                    
                    <div id="carouselExampleCaptions" class="carousel slide">
                        <div class="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                        </div>
                        <div class="carousel-inner">
                            <div class="carousel-item active d-item">
                                <img src={prepaga} class="d-block w-100 d-img" alt="debito"/>
                            </div>
                            <div class="carousel-caption top-0 mt-4">
                                <h5 class="mt-5 fs-1 fw-bolder text-uppercase title-1">Aceptamos todas las tarjetas</h5>
                                <p class="fw-bolder fs-3 title-1">Debito</p>
                            </div>
                        </div>
                        <div class="carousel-inner">
                            <div class="carousel-item d-item">
                                <img src={debito} class="d-block w-100 d-img" alt="debito_1"/>
                            </div>
                            <div class="carousel-caption top-0 mt-4">
                                <h5 class="mt-5 fs-1 fw-bolder text-uppercase title-2">Aceptamos todas las tarjetas</h5>
                                <p class="fw-bolder fs-3 title-2">Credito</p>
                            </div>
                        </div>
                        <div class="carousel-inner">
                            <div class="carousel-item d-item">
                                <img src={debito_1} class="d-block w-100 d-img" alt="prepaga"/>
                            </div>
                            <div class="carousel-caption top-0 mt-4">
                                <h5 class="mt-5 fs-1 fw-bolder text-uppercase title-3">Aceptamos todas las tarjetas</h5>
                                <p class="fw-bolder fs-3 title-3">Mastercard</p>  
                            </div>
                        </div>
                        <div class="carousel-inner">
                            <div class="carousel-item d-item">
                                <img src={prepaga_1} class="d-block w-100 d-img" alt="prepaga_1"/>
                            </div>
                            <div class="carousel-caption top-0 mt-4">
                                <h5 class="mt-5 fs-1 fw-bolder text-uppercase title-4">Aceptamos todas las tarjetas</h5>
                                <p class="fw-bolder fs-3 title-4">Visa</p>
                            </div>  
                        </div>

                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </section>
            </main>
        </>
    )
}

export default SeccionPrincipal; */