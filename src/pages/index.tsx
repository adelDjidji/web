import { useTranslation } from "react-i18next"
import Seo from "../components/seo"
import Layout from "../components/Layout"
import Divider from "../components/Divider"
import ContactUs from "../components/ContactUs"
import { Link } from "gatsby"
import { useState } from "react"

const IndexPage = () => {
  const { t } = useTranslation()
  const [toggle1, setToggle1] = useState(false)
  const [toggle2, setToggle2] = useState(false)
  const [toggle3, setToggle3] = useState(false)
  const [toggle4, setToggle4] = useState(false)
  const handleReadMore1 = () => setToggle1(!toggle1)
  const handleReadMore2 = () => setToggle2(!toggle2)
  const handleReadMore3 = () => setToggle3(!toggle3)
  const handleReadMore4 = () => setToggle4(!toggle4)

  return (
    <Layout>
      <Seo title="Bohr energie" />

      {/* hero */}
      <section className="bg-hero-home bg-no-repeat bg-cover md:h-520p h-370p flex flex-col justify-center mt-20 md:mt-0 bg-left--53/100-top-41/100">
        <h1 className="text-white md:text-6xl text-3xl md:ml-48 ml-10 font-semibold max-w-400 md:mb-5 pt-16 md:pt-0">
          {t("index.hero.l1")}
          <br />
          {t("index.hero.l2")}
          <br />
          {t("index.hero.l3")}
          <br />
          {t("index.hero.l4")}
        </h1>
        <Link
          to="/aboutus"
          className="m-2 text-white bg-orange-bohr border-orange-bohr rounded-full border-solid border-4 md:py-2 py-1 px-4 w-40 md:ml-48 ml-10 md:mt-16 mt-12"
        >
          {t("index.hero.button")}
        </Link>
      </section>
      {/* section 1 */}
      <section className="container mx-auto flex md:flex-row flex-col mt-20 p-8 text-gray-4a">
        <div
          className="flex-1 mb-10 justify-center flex"
          data-sal="slide-right"
          data-sal-delay="300"
          data-sal-easing="ease-out"
        >
          <h2 className="text-2xl md:text-3xl md:max-w-xs">
            <strong>{t("index.section1.h2")}</strong>
          </h2>
        </div>
        <div
          className="flex-1 md:ml-28"
          data-sal="slide-left"
          data-sal-delay="300"
          data-sal-easing="ease-out"
        >
          <p className="md:max-w-md">{t("index.section1.p")}</p>
          <Link
            to="/aboutus"
            className="block text-white bg-orange-bohr border-orange-bohr rounded-full border-solid border-4 md:py-2 py-1 px-4 w-40 md:mt-16 mt-12"
          >
            {t("index.section1.button")}
          </Link>
        </div>
      </section>
      {/* section 2 */}
      <section className="container mx-auto mb-20">
        <h2 className="text-2xl text-center mt-20 mb-10 text-gray-4a md:text-3xl">
          <strong>{t("index.section2.h2")}</strong>
        </h2>
        <Divider />
        <h3 className="text-2xl text-center mt-20 mb-10 md:text-3xl">
          {t("index.section2.h3")}
        </h3>
        <div className="flex md:flex-row flex-col mt-6 md:p-8 p-2 md:justify-center">
          <div
            className="flex-1 md:max-w-md md:mx-4"
            data-sal="slide-right"
            data-sal-delay="300"
            data-sal-easing="ease-out"
          >
            <img src="./images/PRODUCTOS.jpg" alt="PRODUCTOS" />
            <h2 className="text-center text-2xl my-8 text-gray-4a md:text-3xl">
              <strong>{t("index.section2.h2Products")}</strong>
            </h2>
            <p className="text-center text-gray-222">
              {t("index.section2.pProducts")}
            </p>
          </div>

          <div
            className="flex-1 md:max-w-md md:mx-4"
            data-sal="slide-left"
            data-sal-delay="300"
            data-sal-easing="ease-out"
          >
            <img src="./images/SERVICIOS.jpg" alt="SERVICIOS" />
            <h2 className="text-center text-2xl my-8 text-gray-4a md:text-3xl">
              <strong>{t("index.section2.h2Services")}</strong>
            </h2>
            <p className="text-center text-gray-222">
              {t("index.section2.pServices")}
            </p>
          </div>
        </div>
        <Link
          to="/our-offers"
          className="block text-white bg-orange-bohr border-orange-bohr rounded-full border-solid border-4 md:py-2 py-1 px-4 w-40 md:mt-16 mx-auto"
          data-sal="fade"
          data-sal-delay="300"
          data-sal-easing="ease-out"
        >
          {t("index.section2.button")}
        </Link>
      </section>
      <section className="p-1 grid md:grid-cols-2 grid-cols-1 text-white font-semibold">
        <div
          className={`flex md:max-w-md md:justify-self-end ${
            toggle1 ? "items-end" : "justify-end"
          } ${toggle1 && "flex-col"}`}
        >
          <div
            className="p-1 relative cursor-pointer filter hover:filter-brightness-90"
            data-sal="slide-right"
            data-sal-delay="300"
            data-sal-easing="ease-out"
          >
            <img
              src="./images/residential-complexes.jpg"
              alt="Residential-Complexes"
              className="object-cover w-full h-full"
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 w-full">
              <h2 className="text-4xl text-center md:mb-10 mb-2">
                {t("index.section2.h2img1")}
              </h2>
              <button
                className="text-center hover:opacity-80 block w-full"
                onClick={handleReadMore1}
              >
                {t("index.section2.pimg")}
              </button>
            </div>
          </div>
          {toggle1 && (
            <div className="text-black-footer self-start">
              <h2 className="text-2xl my-8 text-gray-4a md:text-3xl">
                <strong>{t("beOurClient.section2.h2img1")}</strong>
              </h2>
              <p className="text-gray-222 mb-5">
                <span className="block mb-2">
                  {t("beOurClient.section2.spanimg1")}
                </span>{" "}
                {t("beOurClient.section2.pimg1")}
              </p>
            </div>
          )}
        </div>

        <div
          className={`flex md:max-w-md ${
            toggle2 ? "items-end" : "justify-end"
          } ${toggle2 && "flex-col"}`}
        >
          <div
            className="p-1 relative cursor-pointer filter hover:filter-brightness-90"
            data-sal="slide-left"
            data-sal-delay="300"
            data-sal-easing="ease-out"
          >
            <img
              src="./images/Independent-Businesses.jpg"
              alt="Independent-Businesses"
              className="object-cover w-full h-full"
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 w-full">
              <h2 className="text-3xl text-center md:mb-10 mb-2">
                {t("index.section2.h2img2")}
              </h2>
              <button
                className="text-center hover:opacity-80 block w-full"
                onClick={handleReadMore2}
              >
                {t("index.section2.pimg")}
              </button>
            </div>
          </div>
          {toggle2 && (
            <div className="text-black-footer self-start">
              <h2 className="text-2xl my-8 text-gray-4a md:text-3xl">
                <strong>{t("beOurClient.section2.h2img2")}</strong>
              </h2>
              <p className="text-gray-222">
                <span className="block mb-2">
                  {t("beOurClient.section2.spanimg2")}
                </span>{" "}
                {t("beOurClient.section2.pimg2")}
              </p>
            </div>
          )}
        </div>

        <div
          className={`flex md:max-w-md md:justify-self-end ${
            toggle3 ? "items-end" : "justify-end"
          } ${toggle3 && "flex-col"}`}
        >
          <div
            className="p-1 relative cursor-pointer filter hover:filter-brightness-90"
            data-sal="slide-right"
            data-sal-delay="400"
            data-sal-easing="ease-out"
          >
            <img
              src="./images/wifi-small-business.jpg"
              alt="wifi-small-business"
              className="object-cover w-full h-full"
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 w-full">
              <h2 className="text-4xl text-center md:mb-10 mb-2">
                {t("index.section2.h2img3")}
              </h2>
              <button
                className="text-center hover:opacity-80 block w-full"
                onClick={handleReadMore3}
              >
                {t("index.section2.pimg")}
              </button>
            </div>
          </div>
          {toggle3 && (
            <div className="text-black-footer self-start">
              <h2 className="text-2xl my-8 text-gray-4a md:text-3xl">
                <strong>{t("beOurClient.section2.h2img3")}</strong>
              </h2>
              <p className="text-gray-222 mb-5">
                <span className="block mb-2">
                  {t("beOurClient.section2.spanimg3")}
                </span>{" "}
                {t("beOurClient.section2.pimg3")}
              </p>
            </div>
          )}
        </div>
        <div
          className={`flex md:max-w-md ${
            toggle4 ? "items-end" : "justify-end"
          } ${toggle4 && "flex-col"}`}
        >
          <div
            className="p-1 relative cursor-pointer filter hover:filter-brightness-90 md:max-w-md"
            data-sal="slide-left"
            data-sal-delay="400"
            data-sal-easing="ease-out"
          >
            <img
              src="./images/Industrial-Complexes.jpg"
              alt="Industrial-Complexes"
              className="object-cover w-full h-full"
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 w-full">
              <h2 className="text-4xl text-center md:mb-10 mb-2">
                {t("index.section2.h2img4")}
              </h2>
              <button
                className="text-center hover:opacity-80 block w-full"
                onClick={handleReadMore4}
              >
                {t("index.section2.pimg")}
              </button>
            </div>
          </div>
          {toggle4 && (
            <div className="text-black-footer self-start">
              <h2 className="text-2xl my-8 text-gray-4a md:text-3xl">
                <strong>{t("beOurClient.section2.h2img4")}</strong>
              </h2>
              <p className="text-gray-222">
                <span className="block mb-2">
                  {t("beOurClient.section2.spanimg4")}
                </span>
                {t("beOurClient.section2.pimg4")}
              </p>
            </div>
          )}
        </div>
      </section>
      {/* section3 */}
      <section className="container mx-auto mb-20">
        <h2 className="text-2xl text-center mt-20 mb-10 text-gray-4a md:text-3xl">
          <strong>{t("index.section3.h2")}</strong>
        </h2>
        <Divider />
        <h3 className="text-2xl text-center mt-20 mb-10 md:text-3xl">
          {t("index.section3.h3")}
        </h3>
        <div className="flex md:flex-row flex-col mt-6 md:p-8 p-2 md:justify-center">
          <div
            className="flex-1 md:max-w-md md:mx-4"
            data-sal="slide-right"
            data-sal-delay="300"
            data-sal-easing="ease-out"
          >
            <img
              className="md:px-14 px-10"
              src="./images/DIGITAL.jpg"
              alt="Digital innovation"
            />
            <h2 className="text-center text-2xl my-8 text-gray-4a md:text-3xl">
              <strong>{t("index.section3.h2img1")}</strong>
            </h2>
            <p className="text-center text-gray-222 md:mb-20">
              {t("index.section3.pimg1")}
            </p>

            <img
              className="md:px-14 px-10"
              src="./images/MONEY.jpg"
              alt="Fair rates"
            />
            <h2 className="text-center text-2xl my-8 text-gray-4a md:text-3xl">
              <strong>{t("index.section3.h2img2")}</strong>
            </h2>
            <p className="text-center text-gray-222">
              {t("index.section3.pimg2")}
            </p>
          </div>

          <div
            className="flex-1 md:max-w-md md:mx-4"
            data-sal="slide-left"
            data-sal-delay="300"
            data-sal-easing="ease-out"
          >
            <img
              className="md:px-14 px-10"
              src="./images/ATTENTION.jpg"
              alt="Personalized attention"
            />
            <h2 className="text-center text-2xl my-8 text-gray-4a md:text-3xl">
              <strong>{t("index.section3.h2img3")}</strong>
            </h2>
            <p className="text-center text-gray-222 md:mb-20">
              {t("index.section3.pimg3")}
            </p>

            <img
              className="md:px-14 px-10"
              src="./images/GREEN.jpg"
              alt="Green Energy"
            />
            <h2 className="text-center text-2xl my-8 text-gray-4a md:text-3xl">
              <strong>{t("index.section3.h2img4")}</strong>
            </h2>
            <p className="text-center text-gray-222">
              {t("index.section3.pimg4")}
            </p>
          </div>
        </div>
        <Link
          to="/key-benefits"
          className="block text-white bg-orange-bohr border-orange-bohr rounded-full border-solid border-4 md:py-2 py-1 px-4 w-40 md:mt-16 mx-auto"
        >
          {t("index.section3.button")}
        </Link>
      </section>
      <Divider />
    </Layout>
  )
}

export default IndexPage
