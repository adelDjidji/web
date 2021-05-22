import React, { useState } from "react"
import { Transition } from "@headlessui/react"

const Navbar = () => {
  const [toggle, setToggle] = useState(false)

  return (
    <div className="mb-3">
      <nav className="py-5 lg:px-20 md:px-2 px-4 flex items-center justify-between">
        <a href="#">
          <img
            src="./bohr.png"
            alt="bohr energie"
            className="md:w-36 md:h-16 sm:w-28 sm:h-12 w-20 h-8 cursor-pointer"
          />
        </a>
        <div className={"text-sm md:flex hidden"}>
          <ul className="flex items-center hover:text-gray-300">
            <li className="m-2 hover:text-gray-800">
              <a href="#">Home</a>
            </li>
            <li className="m-2 hover:text-gray-800">
              <a href="#">About us</a>
            </li>
            <li className="m-2 hover:text-gray-800">
              <a href="#">Open solutions</a>
            </li>
            <li className="m-2 hover:text-gray-800">
              <a href="#">Be our client</a>
            </li>
            <li className="m-2 hover:text-gray-800">
              <a href="#">Key benefits</a>
            </li>
            <li className="m-2 hover:text-gray-800">
              <a href="#">Beliefs</a>
            </li>
          </ul>
          <a
            href="#"
            className="m-2 border-yellow-500 rounded-full border-solid border-4 py-2 px-4 hover:text-white hover:bg-yellow-500"
          >
            Contact us
          </a>
        </div>
        <label htmlFor="open__menu" className="md:hidden block">
          <svg
            className="w-5 h-10 text-yellow-600"
            id="dots-vertical-icon--even"
            viewBox="0 0 7 25"
          >
            <circle className="w-1" cx="3.5" cy="3.5" r="1.5"></circle>
            <circle className="w-1" cx="3.5" cy="12.5" r="1.5"></circle>
            <circle className="w-1" cx="3.5" cy="21.5" r="1.5"></circle>
          </svg>
        </label>
        <input
          type="checkbox"
          id="open__menu"
          className="hidden"
          onClick={() => setToggle(!toggle)}
        />
      </nav>
      <Transition
        show={toggle}
        enter="transition duration-250 ease-in-out"
        enterFrom="transform -translate-x-full"
        enterTo="transform translate-x-0"
        leave="transition duration-250 ease-in-out"
        leaveFrom="transform translate-x-0"
        leaveTo="transform -translate-x-full"
        className="flex flex-col items-center text-2xl justify-center hover:text-gray-300 absolute inset-0 z-10 bg-white"
      >
        <a className="m-2 hover:text-gray-800" href="#">
          Home
        </a>

        <a className="m-2 hover:text-gray-800" href="#">
          About us
        </a>

        <a className="m-2 hover:text-gray-800" href="#">
          Open solutions
        </a>

        <a className="m-2 hover:text-gray-800" href="#">
          Be our client
        </a>

        <a className="m-2 hover:text-gray-800" href="#">
          Key benefits
        </a>

        <a className="m-2 hover:text-gray-800" href="#">
          Beliefs
        </a>

        <a className="m-2 hover:text-gray-800 text-yellow-400" href="#">
          Contact us
        </a>
        <label htmlFor="close__menu" className="absolute top-0 right-0 m-5">
          <svg
            className="block h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </label>
        <input
          type="checkbox"
          id="close__menu"
          className="hidden"
          onClick={() => setToggle(!toggle)}
        />
      </Transition>
    </div>
  )
}
export default Navbar
