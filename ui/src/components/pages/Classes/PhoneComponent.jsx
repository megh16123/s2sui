import React from 'react'
import './Classes.scss'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';


function PhoneComponent() {
  return (
    <Splide options={{
        responsive: true,
direction: 'ttb',
height   : '80vh',
wheel    : true,
releaseWheel: true
} }
>
    <SplideSlide>
        <div className='phone-scroll'>
    <h2>Web Developer</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad beatae provident expedita mollitia magni
                aliquam! Harum distinctio at est. Consequuntur suscipit maxime, omnis corporis quo excepturi qui.
                Aperiam dolorum quaerat error consequuntur. Iusto aliquid quasi asperiores magni aut tempore dicta,
                veritatis perferendis. Provident reprehenderit temporibus blanditiis nisi hic? Dolorem, voluptas?
            </p>
            </div>
    </SplideSlide>
    <SplideSlide>
    <div className='phone-scroll'>
    <h2>dfjjkldfknk</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad beatae provident expedita mollitia magni
                aliquam! Harum distinctio at est. Consequuntur suscipit maxime, omnis corporis quo excepturi qui.
                Aperiam dolorum quaerat error consequuntur. Iusto aliquid quasi asperiores magni aut tempore dicta,
                veritatis perferendis. Provident reprehenderit temporibus blanditiis nisi hic? Dolorem, voluptas?
            </p>
            </div>
    </SplideSlide>
    <SplideSlide>
    <div className='phone-scroll'>
    <h2>cmnncnmc</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad beatae provident expedita mollitia magni
                aliquam! Harum distinctio at est. Consequuntur suscipit maxime, omnis corporis quo excepturi qui.
                Aperiam dolorum quaerat error consequuntur. Iusto aliquid quasi asperiores magni aut tempore dicta,
                veritatis perferendis. Provident reprehenderit temporibus blanditiis nisi hic? Dolorem, voluptas?
            </p>
            </div>
    </SplideSlide>
    </Splide>
  )
}

export default PhoneComponent