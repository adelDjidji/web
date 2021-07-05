import { useTranslation } from "react-i18next"
import Seo from "../components/seo"
import Layout from "../components/Layout"
import Divider from "../components/Divider"
import { Link } from "gatsby"

const openSolutions = () => {
  const { t } = useTranslation()

  return (
    <Layout>
      <Seo title="Bohr energie" />
      {/* hero */}
      <section className="bg-hero-customer bg-no-repeat bg-cover h-410p flex flex-col justify-center mt-20 md:mt-0 bg-left--53/100-top-41/100">
        <h1 className="text-white md:text-6xl text-3xl md:ml-48 ml-10 font-semibold max-w-400 md:mb-5 pt-16 md:pt-0">
          {t("beOurClient.hero.l1")}
          <br />
          {t("beOurClient.hero.l2")}
          <br />
          {t("beOurClient.hero.l3")}
        </h1>
      </section>
      <Divider />
      {/* section3 */}
      <section className="container mx-auto flex md:flex-row flex-col md:mt-20 p-8 text-gray-4a">
        <div
          className="flex-1 mb-10 flex flex-col items-center"
          data-sal="slide-right"
          data-sal-delay="300"
          data-sal-easing="ease-out"
        >
          <div>
            <strong className="text-2xl md:text-3xl md:max-w-xs mb-7 block">
              {t("openSolutions.section3.text")}
            </strong>
            <h2 className="text-2xl md:text-3xl md:max-w-xs block">
              {t("openSolutions.section3.h2")}
            </h2>
          </div>
        </div>
        <div
          className="flex-1 mb-10"
          data-sal="slide-left"
          data-sal-delay="300"
          data-sal-easing="ease-out"
        >
          <p className="max-w-md">{t("openSolutions.section3.p")}</p>
          <Link
            to="/contactus"
            className="text-center block text-white bg-orange-bohr border-orange-bohr rounded-full border-solid border-4 md:py-2 py-1 px-4 w-36 mt-10 text-sm"
          >
            {t("openSolutions.section3.button")}
          </Link>
        </div>
      </section>
      {/* section4 */}
      <section className="container mx-auto mb-20">
        <div className="flex md:flex-row flex-col mt-6 md:p-8 p-2 md:justify-center">
          <div
            className="flex-1 md:max-w-md md:mx-4 relative"
            data-sal="slide-right"
            data-sal-delay="300"
            data-sal-easing="ease-out"
          >
            <img
              className="w-440p h-330p"
              src="./images/419356-PDXFIN-769.jpg"
              alt="Digital innovation"
            />
            <h2 className="text-center text-2xl my-8 text-gray-4a md:text-3xl">
              <strong>{t("openSolutions.section4.h2img1")}</strong>
            </h2>
            <p className="text-center text-gray-222">
              {t("openSolutions.section4.pimg1")}
            </p>
          </div>

          <div
            className="flex-1 md:max-w-md md:mx-4 relative"
            data-sal="slide-left"
            data-sal-delay="300"
            data-sal-easing="ease-out"
          >
            <img
              className="w-440p h-330p"
              src="./images/shutterstock.jpg"
              alt="Personalized attention"
            />
            <h2 className="text-center text-2xl my-8 text-gray-4a md:text-3xl">
              <strong>{t("openSolutions.section4.h2img2")}</strong>
            </h2>
            <p className="text-center text-gray-222">
              {t("openSolutions.section4.pimg2")}
            </p>
          </div>
        </div>

        <div className="flex md:flex-row flex-col mt-6 md:p-8 p-2 md:justify-center">
          <div
            className="flex-1 md:max-w-md md:mx-4 relative"
            data-sal="slide-right"
            data-sal-delay="300"
            data-sal-easing="ease-out"
          >
            <img
              className="w-440p h-330p"
              src="./images/Nuclear-Model-Based-Systems-Engineering-Banner.jpg"
              alt="Fair rates"
            />
            <h2 className="text-center text-2xl my-8 text-gray-4a md:text-3xl">
              <strong>{t("openSolutions.section4.h2img3")}</strong>
            </h2>
            <p className="text-center text-gray-222">
              {t("openSolutions.section4.pimg3")}
            </p>
          </div>

          <div
            className="flex-1 md:max-w-md md:mx-4 relative"
            data-sal="slide-left"
            data-sal-delay="300"
            data-sal-easing="ease-out"
          >
            <img
              className="w-440p h-330p"
              src="./images/certificado-energetico.jpg"
              alt="Green Energy"
            />
            <h2 className="text-center text-2xl my-8 text-gray-4a md:text-3xl">
              <strong>{t("openSolutions.section4.h2img4")}</strong>
            </h2>
            <p className="text-center text-gray-222">
              {t("openSolutions.section4.pimg4")}
            </p>
          </div>
        </div>

        <div className="flex md:flex-row flex-col mt-6 md:p-8 p-2 md:justify-center">
          <div
            className="flex-1 md:max-w-md md:mx-4 relative"
            data-sal="slide-right"
            data-sal-delay="300"
            data-sal-easing="ease-out"
          >
            <img
              className="w-440p h-330p"
              src="./images/night-car-lights-long-exposure-870x490.jpg"
              alt="Personalized attention"
            />
            <h2 className="text-center text-2xl my-8 text-gray-4a md:text-3xl">
              <strong>{t("openSolutions.section4.h2img5")}</strong>
            </h2>
            <p className="text-center text-gray-222">
              {t("openSolutions.section4.pimg5")}
            </p>
          </div>

          <div className="flex-1 md:max-w-md md:mx-4"></div>
        </div>
      </section>
    </Layout>
  )
}

export default openSolutions
