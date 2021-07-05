import { FC, useState } from "react"
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './../styles/contactus.css';
interface Props {}
const ContactUs: FC<Props> = () => {
  const [value, onChange] = useState(new Date());
  return (
    <div className="container mx-auto flex md:flex-row flex-col mt-6 md:p-8 p-2 md:justify-around px-4 mb-10">
      <div
        className="flex-auto md:max-w-md md:mx-4"
        data-sal="slide-right"
        data-sal-delay="300"
        data-sal-easing="ease-out"
      >
        <h2 className="text-2xl mt-8 mb-4 text-gray-4a md:text-3xl">
          <strong>Contact us</strong>
        </h2>
        <p className="mb-16 text-gray-222 max-w-xs">
          Let’s talk about and find better solutions to change your energy and
          change your business.
        </p>
        <form>
        <label className="block mt-10" htmlFor="name">
            Name
          </label>
          <input
            id="name"
            type="text"
            className="border px-6 border-black border-solid h-10 w-full"
          />
          <label className="block mt-10" htmlFor="company">
          Company
          </label>
          <input
            id="company"
            type="text"
            className="border px-6 border-black border-solid h-10 w-full"
          />
          <label className="block mt-10" htmlFor="tel">
            telephone
          </label>
          <input
            id="tel"
            type="tel"
            className="border px-6 border-black border-solid h-10 w-full"
          />
          <label className="block mt-10" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            className="border px-6 border-black border-solid h-10 w-full"
          />
          
          <label className="block mt-10" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            rows={5}
            className="border px-6 border-black border-solid w-full"
            cols={33}
          ></textarea>
          <a
            href="#"
            className="block text-white bg-orange-bohr border-orange-bohr rounded-full border-solid border-4 md:py-2 py-1 px-4 w-44 md:mt-8"
          >
            Contact us now
          </a>
        </form>
      </div>
      <div
        className="flex-auto md:max-w-xl text-gray-222"
        data-sal="slide-left"
        data-sal-delay="300"
        data-sal-easing="ease-out"
      >
        <h2 className="text-2xl mt-8 mb-4 text-gray-4a md:text-3xl">
          <strong>Our location</strong>
        </h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10505.094107737681!2d2.371345!3d48.8339211!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x541ecb63365de48!2sSTATION%20F!5e0!3m2!1sfr!2sdz!4v1622214525128!5m2!1sfr!2sdz"
          className="w-full h-96 mb-10"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
        ></iframe>

      <Calendar
        onChange={onChange}
        value={value}
      />
      </div>
    </div>
  )
}

export default ContactUs
