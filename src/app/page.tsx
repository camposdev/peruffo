import Image from 'next/image'
import { FaWhatsapp, FaInstagram, FaFacebookF } from 'react-icons/fa'
import logo from '../assets/images/logo.png'
import logoFooter from '../assets/images/logo-footer.png'
import IconButton from '@/components/IconButton'
import Calendar from '@/components/Calendar'
import { data } from './data'
import Carousel from '@/components/Carousel'

export default async function Home() {
  return (
    <main>
      <header className="hero animate__animated animate__fadeIn">
        <div className="container">
          <nav className="nav animate__animated animate__fadeInDown">
            <a href="#horarios" className="mr-4">Horários</a>
            <a href={data.whatsappLink}><FaWhatsapp /></a>
            <a href={data.instagramLink}><FaInstagram /></a>
            <a href={data.facebookLink}><FaFacebookF /></a>
          </nav>
        </div>

        <div className="container xl:flex justify-between items-end z-10 relative">
          <div className="logoContent animate__animated animate__fadeIn animate__delay-1s">
            <h1>Aulas de <span>Jiu-jitsu</span></h1>

            <Image src={logo} alt="Peruffo Jiu-jitsu" />

            <h2>{data.location}</h2>

            <IconButton href={data.whatsappLink} icon={<FaWhatsapp />} target="_blank">
              <small>Agendar</small> Aula grátis
            </IconButton>
          </div>

          <div className="text-right hidden xl:block mb-20 animate__animated animate__fadeIn animate__delay-1s">
            <div className="info-content">
              <h5>Contato</h5>
              {data.phone}
            </div>
            <div className="info-content mt-5">
              <h5>Endereço</h5>
              <address>
                {data.address}
              </address>
            </div>
          </div>
        </div>

        <div className="header-detail">
          <div className="black-bar">
            <div className="detail"></div>
            <div className="detail"></div>
            <div className="detail"></div>
          </div>
          <div className="red-bar">
            <div className="detail"></div>
            <div className="detail"></div>
            <div className="detail"></div>
            <div className="detail"></div>
            <div className="detail"></div>
          </div>
        </div>
      </header>

      <section className="about py-8 sm:py-24 animate__animated animate__fadeInUp">
        <div className="container flex justify-end">
          <div className="max-w-[510px] xl:mr-20 2xl:mr-32">
            <h2 className="italic uppercase font-extrabold tracking-tighter mb-6">
              <small className="block text-3xl">{data.sections.about.title1}</small>
              <span className="block text-6xl sm:text-8xl text-primary">{data.sections.about.title2}</span>
            </h2>

            <p>{data.sections.about.description}</p>

            <ul className="mt-6 list-none">
              {data.sections.about.list.map((item: { title: string, description: string }, index: number) => (
                <li key={item.title} className="mb-8 flex">
                  <div className='dot-list flex items-center justify-center text-3xl text-primary italic font-extrabold shrink-0 mr-4'>
                    {index + 1}
                  </div>
                  <div>
                    <h4 className="italic text-lg sm:text-xl font-extrabold mb-1 uppercase">{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>

            <a href={data.whatsappLink} className="button">
              {data.sections.about.actionButtonText}
            </a>
          </div>
        </div>
      </section>

      <section id="horarios" className="py-24">
        <div className="container">
          <h2 className="section-title">
            <small>{data.sections.schedules.title1}</small>
            {data.sections.schedules.title2}
          </h2>

          <div className="max-w-5xl my-8 mx-auto overflow-x-auto">
            <Calendar data={data.sections.schedules.calendarRow} />
            <legend className="text-xs italic mt-4">{data.sections.schedules.calendarNote}</legend>
          </div>

          <div className="text-center">
            <a href={data.whatsappLink} className="button">
              {data.sections.schedules.actionButtonText}
            </a>
          </div>
        </div>
      </section>

      <section>
        <a href={data.instagramLink} className="p-4 text-white font-extrabold uppercase italic flex justify-center items-center bg-primary">
          <FaInstagram className="w-7 h-7 mr-2" /> {data.sections.instagram.buttonInstagramText}
        </a>
      </section>

      <section className="reviews bg-secondary text-white py-20">
        <div className="container">
          <h2 className="section-title white mb-10">
            <small>{data.sections.reviews.title1}</small>
            {data.sections.reviews.title2}
          </h2>

          <Carousel data={data.sections.reviews.list} />
        </div>
      </section>

      <footer className="bg-primary text-white py-12">
        <div className="container">
          <div className="flex justify-center items-center flex-col sm:justify-between sm:flex-row">
            <div className="flex flex-col items-center text-center sm:flex-row sm:text-left">
              <div className="shrink-0 mb-8 sm:mb-0 sm:mr-10">
                <Image src={logoFooter} alt={data.head.title} />
              </div>

              <div className="info-content mb-4 sm:mb-0 sm:mr-10">
                <h5>Contato</h5>
                {data.phone}
              </div>

              <div className="info-content">
                <h5>Endereço</h5>
                <address>
                  {data.address}
                </address>
              </div>
            </div>

            <div className="flex items-center mt-10  sm:mt-0">
              <a href={data.whatsappLink} className="social-icon"><FaWhatsapp /></a>
              <a href={data.instagramLink} className="social-icon"><FaInstagram /></a>
              <a href={data.facebookLink} className="social-icon"><FaFacebookF /></a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
