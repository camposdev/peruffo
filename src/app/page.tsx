import Image from 'next/image'
import { FaWhatsapp, FaInstagram, FaFacebookF } from 'react-icons/fa'
import logo from '../assets/images/logo.png'
import IconButton from '@/components/IconButton'
import Calendar from '@/components/Calendar'

export default async function Home() {
  const data = await fetch('http://localhost:3000/api/data').then(res => res.json())

  return (
    <main>
      <header className="hero">
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

            <IconButton icon={<FaWhatsapp />}>
              <small>Agendar</small> Aula grátis
            </IconButton>
          </div>

          <div className="info-content hidden xl:block mb-20 animate__animated animate__fadeIn animate__delay-1s">
            <div className="info-content--item">
              <h4>Contato</h4>
              {data.phone}
            </div>
            <div className="info-content--item">
              <h4>Endereço</h4>
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

      <section className="about py-8 sm:py-24">
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
            <a href="#" className="inline-block bg-primary text-white text-xl font-extrabold italic uppercase tracking-tighter py-4 px-20 rounded-full hover:bg-secondary transition-all">
              {data.sections.schedules.buttonScheduleText}
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
