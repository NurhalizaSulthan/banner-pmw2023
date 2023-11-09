
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <div className="banner-container">
        {/* kartunya */}
        <div className="header-banner-wrapper">
          {/* foto ptofil dan nama */}
          <div className="profile-banner">
            {/* foto profil */}
            <Image
                src="/asset/profil.png"
                alt="Picture of the author"
                width={500}
                height={500}
              />

          </div>
          <div className="content-header-banner">
            {/* nama dan kawan kawan */}
            <h1>Siti Nurhaliza</h1>
            <div className="bio-nim-header-banner">
              {/* nim-bio */}
              <p>D121211028</p>
              <p>Semangat Yok</p>
            </div>
          </div>
        </div>
        <div className="cta-banner-wrap">
          {/* tombol cta */}
        </div>
      </div>

    </div>
  )
}
      