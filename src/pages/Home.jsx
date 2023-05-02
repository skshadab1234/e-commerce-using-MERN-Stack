import React from 'react'
import { CCarousel, CCarouselItem, CImage } from '@coreui/react'
import Header from '../components/Header'
const Home = () => {
    return (
        <>
            <Header count ={0}/>

            <div className='relative mt-3 -m-3'>
                <CCarousel controls indicators>
                    <CCarouselItem>
                        <CImage className="d-block w-100 rounded-[20px] object-contain" src={'./banner/1.png'} alt="slide 1" />
                    </CCarouselItem>
                    <CCarouselItem>
                        <CImage className="d-block w-100 rounded-[20px] object-contain" src={'./banner/2.png'} alt="slide 2" />
                    </CCarouselItem>
                    <CCarouselItem>
                        <CImage className="d-block w-100 rounded-[20px] object-contain" src={'./banner/3.png'} alt="slide 3" />
                    </CCarouselItem>
                </CCarousel>
            </div>
        </>
    )
}

export default Home