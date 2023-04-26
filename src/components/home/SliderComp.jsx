import React from 'react'
import Slider from 'react-slick'

// Here we used Slider for slider component. It shows popular sneakers as slide show.

const SliderComp = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div>
            <Slider {...settings}>

                <div className='!flex items-center bg-gray-100 px-6'>
                    <div className=''>
                        <div className='text-6xl font-bold'>Nike Sneakers</div>
                        <div className='text-lg my-4'>With its easygoing lines, heritage track look and of course, visible Nike Air cushioning, the Air Max SC SE is the perfect finish to any outfit. The rich mixture of materials adds depth while making it a durable and lightweight shoe for everyday wear.</div>
                        <div className='border rounded-full cursor-pointer text-2xl w-[200px] h-16 flex items-center justify-center bg-gray-200'>Go Details</div>
                    </div>
                    <img src='https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/ba390be5-76c3-44bd-9635-b56feb8b126c/air-max-sc-se-womens-shoes-CwMCK7.png' alt='' width='400px' height='400px' />
                </div>

                <div className='!flex items-center bg-gray-100 px-6'>
                    <div>
                        <div className='text-6xl font-bold'>Nike Sneakers</div>
                        <div className='text-lg my-4'>Put a little spark in your step. These thoughtfully crafted kicks pair luxe comfort with extra stability—without sacrificing style. The dual foam midsole, pillowy collar and plush tongue keep you cushioned while a sleek design and textured pull tab bring energy to any 'fit.</div>
                        <div className='border rounded-full cursor-pointer text-2xl w-[200px] h-16 flex items-center justify-center bg-gray-200'>Go Details</div>
                    </div>
                    <img src='https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/f820e398-3050-438b-91a9-e985898def17/spark-womens-shoes-w4WdlF.png' alt='' width='400px' height='400px' />
                </div>
            </Slider>
        </div>
    )
}

export default SliderComp