import Image from 'next/image'
import { FaWhatsapp, FaInstagram, FaFacebookF } from 'react-icons/fa'
import logo from '../assets/images/logo.png'
import IconButton from '@/components/IconButton'

export default function Home() {
  return (
    <main>
      <header className="hero">
        <div className="container">
          <nav className="nav animate__animated animate__fadeInDown">
            <a href="#horarios" className="mr-4">Horários</a>
            <a href="#"><FaWhatsapp /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaFacebookF /></a>
          </nav>
        </div>

        <div className="container xl:flex justify-between items-end z-10 relative">
          <div className="logoContent animate__animated animate__fadeIn animate__delay-1s">
            <h1>Aulas de <span>Jiu-jitsu</span></h1>

            <Image src={logo} alt="Peruffo Jiu-jitsu" />

            <h2>Carvoeira - Florianópolis</h2>

            <IconButton icon={<FaWhatsapp />}>
              <small>Agendar</small> Aula grátis
            </IconButton>
          </div>

          <div className="info-content hidden xl:block mb-20 animate__animated animate__fadeIn animate__delay-1s">
            <div className="info-content--item">
              <h4>Contato</h4>
              (48) 99156-6566
            </div>
            <div className="info-content--item">
              <h4>Endereço</h4>
              <address>
                Rua Cap. Romualdo de Barros <br />
                904 - 2o andar - Carvoeira, Florianópolis
              </address>
            </div>
          </div>
        </div>

        <div className="header-detail">
          <div className="black-bar"></div>
          <div className="red-bar"></div>
        </div>
      </header>
    </main>
  )
}
