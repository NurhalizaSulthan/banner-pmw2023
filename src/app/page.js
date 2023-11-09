
'use client'

import { useAmp } from 'next/amp';
import Image from 'next/image'
import './globals.css'
import { useState } from 'react';

export default function Home() {

  
  const [bravo, setBravo] = useState(0)
  const [nama, setNama] = useState('Siti Nurhaliza')

  function handlerTambahBravo(){
    setBravo(bravo + 1)
  }

  function handlerGantiNama(){
    setNama('Expresidentz')
  }

  return (
    <div className='body'>
      <div className="banner-container">
        {/* kartunya */}
        <div className="header-banner-wrapper">
          {/* foto ptofil dan nama */}
          <div className="profile-banner">
            {/* foto profil */}
            <Image
                src="/asset/profil.png"
                alt="Picture of the author"
                fill
                objectFit='contain'
              />
          </div>
          <div className="content-header-banner">
            {/* nama dan kawan kawan */}
            <h1>{nama}</h1>
            <div className="bio-nim-header-banner">
              {/* nim-bio */}
              <p>D121211028</p>
              <p>Semangat {bravo} Yok</p>
            </div>
          </div>
        </div>
        <div className="cta-banner-wrap">
          {/* tombol cta */}
          <div className='cta-button' onClick={handlerTambahBravo}>
              <p>Halo!</p>
            </div>
            <div className='cta-button' 
            style={{
              marginTop: '12px'
            }}
            
            onClick={handlerGantiNama}>
              <p>Ganti Nama</p>
            </div>
        </div>         
      </div>
    </div>

  )
}
      