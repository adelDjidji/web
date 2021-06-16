import { useState } from "react"
import { Transition } from "@headlessui/react"
import { Link } from "gatsby"

const Navbar = () => {
  const [toggle, setToggle] = useState(false)

  return (
    <div className="md:static fixed top-0 z-40 bg-white w-full">
      {!toggle && (
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
                <Link to="/">Home</Link>
              </li>
              <li className="m-2 hover:text-gray-800">
                <Link to="/aboutus">About us</Link>
              </li>
              <li className="m-2 hover:text-gray-800">
                <Link to="/open-solutions">Open solutions</Link>
              </li>
              <li className="m-2 hover:text-gray-800">
                <Link to="/be-our-client">Be our client</Link>
              </li>
              <li className="m-2 hover:text-gray-800">
                <Link to="/key-benefits">Key benefits</Link>
              </li>
              <li className="m-2 hover:text-gray-800">
                <Link to="/beliefs">Beliefs</Link>
              </li>
            </ul>
            <Link
              to="/contactus"
              className="m-2 border-orange-bohr text-orange-bohr rounded-full border-solid border-2 py-2 px-4 hover:text-white hover:bg-orange-bohr"
            >
              Contact us
            </Link>
            <Link
              to="/app"
              className="m-2 border-orange-bohr text-orange-bohr rounded-full border-solid border-2 py-2 px-4 hover:text-white hover:bg-orange-bohr"
            >
              Espace client
            </Link>
          </div>
          <label htmlFor="open__menu" className="md:hidden block">
            <svg
              className="w-5 h-10 fill-current text-orange-bohr"
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
      )}
      <Transition
        show={toggle}
        enter="transition duration-250 ease-in-out"
        enterFrom="transform -translate-x-full"
        enterTo="transform translate-x-0"
        leave="transition duration-250 ease-in-out"
        leaveFrom="transform translate-x-0"
        leaveTo="transform -translate-x-full"
        className="flex flex-col items-center text-2xl justify-center hover:text-gray-300 absolute z-50 bg-white w-full h-screen"
      >
        <Link className="m-2 hover:text-gray-800" to="/">
          Home
        </Link>

        <Link className="m-2 hover:text-gray-800" to="/aboutus">
          About us
        </Link>

        <Link className="m-2 hover:text-gray-800" to="/open-solutions">
          Open solutions
        </Link>

        <Link className="m-2 hover:text-gray-800" to="/be-our-client">
          Be our client
        </Link>

        <Link className="m-2 hover:text-gray-800" to="/key-benefits">
          Key benefits
        </Link>

        <Link className="m-2 hover:text-gray-800" to="/beliefs">
          Beliefs
        </Link>

        <Link
          className="m-2 hover:text-gray-800 text-orange-bohr"
          to="/contactus"
        >
          Contact us
        </Link>
        <Link className="m-2 hover:text-gray-800 text-orange-bohr" to="/app">
          Espace client
        </Link>
        <label htmlFor="close__menu" className="absolute top-0 right-0 m-5">
          <svg
            className="block h-6 w-6 text-orange-bohr"
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
