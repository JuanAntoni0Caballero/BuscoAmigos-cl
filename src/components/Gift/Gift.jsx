import React, { useState } from 'react';
import './Gift.css'

function Gift() {

    const images = [
        'https://res.cloudinary.com/dulqf7f1b/image/upload/v1678994538/BuscoAmigos/Gift/danii3_cqpkh2.webp',
        'https://res.cloudinary.com/dulqf7f1b/image/upload/v1678994538/BuscoAmigos/Gift/juan-ivan_vfamdk.webp',
        'https://res.cloudinary.com/dulqf7f1b/image/upload/v1678994538/BuscoAmigos/Gift/ruben_iqnnsd.png',
        'https://res.cloudinary.com/dulqf7f1b/image/upload/v1678994538/BuscoAmigos/Gift/sopa_kknzvu.jpg',
        'https://res.cloudinary.com/dulqf7f1b/image/upload/v1678994538/BuscoAmigos/Gift/yad_p6fgm2.webp',
        'https://res.cloudinary.com/dulqf7f1b/image/upload/v1678994538/BuscoAmigos/Gift/juanan3_xna8qg.webp',
        'https://res.cloudinary.com/dulqf7f1b/image/upload/v1678994537/BuscoAmigos/Gift/juanan_otdjcb.png',
        'https://res.cloudinary.com/dulqf7f1b/image/upload/v1678994537/BuscoAmigos/Gift/juan3_scxcmc.webp',
        'https://res.cloudinary.com/dulqf7f1b/image/upload/v1678994537/BuscoAmigos/Gift/juan_aakzlh.png',
        'https://res.cloudinary.com/dulqf7f1b/image/upload/v1678994537/BuscoAmigos/Gift/jadde_qctgsz.webp',
        'https://res.cloudinary.com/dulqf7f1b/image/upload/v1678994537/BuscoAmigos/Gift/juan2_miygaa.webp',
        'https://res.cloudinary.com/dulqf7f1b/image/upload/v1678994536/BuscoAmigos/Gift/german_y1pnsg.png',
        'https://res.cloudinary.com/dulqf7f1b/image/upload/v1678994536/BuscoAmigos/Gift/ivan_gwmuq3.png',
        'https://res.cloudinary.com/dulqf7f1b/image/upload/v1678994536/BuscoAmigos/Gift/cris1_bamace.webp',
        'https://res.cloudinary.com/dulqf7f1b/image/upload/v1678994536/BuscoAmigos/Gift/cris3_ueijwk.webp',
        'https://res.cloudinary.com/dulqf7f1b/image/upload/v1678994536/BuscoAmigos/Gift/cris2_e0bawm.webp',
        'https://res.cloudinary.com/dulqf7f1b/image/upload/v1678994536/BuscoAmigos/Gift/cata2_gdzsup.webp',
        'https://res.cloudinary.com/dulqf7f1b/image/upload/v1678993465/BuscoAmigos/Gift/aldi_vvszrq.png',
        'https://res.cloudinary.com/dulqf7f1b/image/upload/v1678993465/BuscoAmigos/Gift/alvaro_jowxhe.png',
        'https://res.cloudinary.com/dulqf7f1b/image/upload/v1678993465/BuscoAmigos/Gift/cata_d6euw8.png',
        'https://res.cloudinary.com/dulqf7f1b/image/upload/v1678993462/BuscoAmigos/Gift/dani_nl30c4.jpg',
        'https://res.cloudinary.com/dulqf7f1b/image/upload/v1678993462/BuscoAmigos/Gift/cris_qzrz4w.png',
        'https://res.cloudinary.com/dulqf7f1b/image/upload/v1678993462/BuscoAmigos/Gift/dani2_wujdli.png',
        'https://res.cloudinary.com/dulqf7f1b/image/upload/v1678993459/BuscoAmigos/Gift/gonzalo_gmll3e.png',
        'https://res.cloudinary.com/dulqf7f1b/image/upload/v1678993453/BuscoAmigos/Gift/jadde_qo6nth.png',
        'https://res.cloudinary.com/dulqf7f1b/image/upload/v1678993453/BuscoAmigos/Gift/jaime_njpbyu.jpg',
        'https://res.cloudinary.com/dulqf7f1b/image/upload/v1678993447/BuscoAmigos/Gift/juanan_2_bbfn7l.png'
    ]

    const randomIndex = Math.floor(Math.random() * images.length)


    return (
        <>
            <img className='photos' src={images[randomIndex]} alt="photo" />
        </>
    )
}

export default Gift