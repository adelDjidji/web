import { useState } from "react"
import { Transition } from "@headlessui/react"
import { Link } from "gatsby"
import { useTranslation } from "react-i18next"

const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  const { t } = useTranslation()

  return (
    <div className="md:static fixed top-0 z-40 bg-white w-full">
      {!toggle && (
        <nav className="py-5 lg:px-20 md:px-2 px-4 flex items-center justify-between">
          <Link to="/">
            <img
              src="./bohr.png"
              alt="bohr energie"
              className="md:w-36 md:h-16 sm:w-28 sm:h-12 w-20 h-8 cursor-pointer"
            />
          </Link>
          <div className={"text-sm md:flex hidden"}>
            <ul className="flex items-center hover:text-gray-300">
              <li className="m-2 hover:text-gray-800">
                <Link to="/">{t("navBar.home")}</Link>
              </li>
              <li className="m-2 hover:text-gray-800">
                <Link to="/aboutus">{t("navBar.aboutUs")}</Link>
              </li>
              <li className="m-2 hover:text-gray-800">
                <Link to="/our-offers">{t("navBar.ourOffers")}</Link>
              </li>
              <li className="m-2 hover:text-gray-800">
                <Link to="/our-services">{t("navBar.ourServices")}</Link>
              </li>
              <li className="m-2 hover:text-gray-800">
                <Link to="/key-benefits">{t("navBar.keyBenefits")}</Link>
              </li>
              <li className="m-2 hover:text-gray-800">
                <Link to="/beliefs">{t("navBar.beliefs")}</Link>
              </li>
            </ul>
            <Link
              to="/contactus"
              className="m-2 border-orange-bohr text-orange-bohr rounded-full border-solid border-2 py-2 px-4 hover:text-white hover:bg-orange-bohr"
            >
              {t("navBar.contactUs")}
            </Link>
            <Link
              to="/app"
              className="m-2 border-orange-bohr text-orange-bohr rounded-full border-solid border-2 py-2 px-4 hover:text-white hover:bg-orange-bohr"
            >
              {t("navBar.clientSpace")}
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
          {t("navBar.home")}
        </Link>

        <Link className="m-2 hover:text-gray-800" to="/aboutus">
          {t("navBar.aboutUs")}
        </Link>

        <Link className="m-2 hover:text-gray-800" to="/our-offers">
          {t("navBar.ourOffers")}
        </Link>

        <Link className="m-2 hover:text-gray-800" to="/our-services">
          {t("navBar.ourServices")}
        </Link>

        <Link className="m-2 hover:text-gray-800" to="/key-benefits">
          {t("navBar.keyBenefits")}
        </Link>

        <Link className="m-2 hover:text-gray-800" to="/beliefs">
          {t("navBar.beliefs")}
        </Link>

        <Link
          className="m-2 hover:text-gray-800 text-orange-bohr"
          to="/contactus"
        >
          {t("navBar.contactUs")}
        </Link>
        <Link className="m-2 hover:text-gray-800 text-orange-bohr" to="/app">
          {t("navBar.clientSpace")}
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
