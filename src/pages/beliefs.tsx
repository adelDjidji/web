import { useTranslation } from "react-i18next"
import Seo from "../components/seo"
import Layout from "../components/Layout"
import Divider from "../components/Divider"

const beliefs = () => {
  const { t } = useTranslation()

  return (
    <Layout>
      <Seo title="Bohr energie" />
      {/* hero */}
      <section className="bg-hero-beliefs bg-no-repeat bg-cover h-410p flex flex-col justify-center mt-20 md:mt-0 bg-left--53/100-top-41/100">
        <h1 className="text-white md:text-6xl text-3xl md:ml-48 ml-10 font-semibold max-w-400 md:mb-5 pt-16 md:pt-0">
          {t("beliefs.hero.l1")}
          <br /> {t("beliefs.hero.l2")}
          <br /> {t("beliefs.hero.l3")}
        </h1>
      </section>
      {/* section1 */}
      <section className="container mx-auto flex md:flex-row flex-col md:mt-20 p-8 text-gray-4a">
        <div
          className="flex-1 mb-10 flex flex-col items-center"
          data-sal="slide-right"
          data-sal-delay="300"
          data-sal-easing="ease-out"
        >
          <h2 className="text-2xl md:text-3xl md:max-w-xs mb-7">
            {t("beliefs.section1.h2")}
          </h2>
        </div>
        <div
          className="flex-1"
          data-sal="slide-left"
          data-sal-delay="300"
          data-sal-easing="ease-out"
        >
          <p className="md:max-w-md mb-4">{t("beliefs.section1.p1")}</p>
          <p className="md:max-w-md">{t("beliefs.section1.p2")}</p>
          <a
            href="#"
            className="block text-white bg-orange-bohr border-orange-bohr rounded-full border-solid border-4 md:py-2 py-1 px-4 w-52 mt-10 text-sm"
          >
            {t("beliefs.section1.button")}
          </a>
        </div>
      </section>

      <div className="container">
        <Divider />
      </div>
      {/* section2 */}
      <section className="container flex justify-center mx-auto mt-10">
        <div className="flex-1 text-gray-4a flex flex-col items-end text-3xl mr-32">
          <div
            className="max-w-sm"
            data-sal="slide-right"
            data-sal-delay="300"
            data-sal-easing="ease-out"
          >
            <h2 className="mb-4">
              <strong>{t("beliefs.section2.h2img")}</strong>
            </h2>
            <h3 className="mb-4">{t("beliefs.section2.h3img")}</h3>
            <p className="text-gray-222 text-lg">
              {t("beliefs.section2.pimg")}
            </p>
          </div>
          <img
            src="/images/BELIEFS.jpg"
            alt="BELIEFS"
            className="max-w-sm"
            data-sal="slide-right"
            data-sal-delay="300"
            data-sal-easing="ease-out"
          />
        </div>
        <div className="flex-1">
          <p
            className="max-w-md mb-10"
            data-sal="slide-left"
            data-sal-delay="300"
            data-sal-easing="ease-out"
          >
            {t("beliefs.section2.pdiv")}
          </p>

          <div
            className="max-w-md"
            data-sal="slide-left"
            data-sal-delay="300"
            data-sal-easing="ease-out"
          >
            <Divider />
          </div>

          <div
            className="max-w-md"
            data-sal="slide-left"
            data-sal-delay="300"
            data-sal-easing="ease-out"
          >
            <h3 className="my-6">
              <strong>{t("beliefs.section2.h3ul")}</strong>
            </h3>
            <ul className="list-disc pl-10">
              <li>
                <strong className="block my-4">
                  {t("beliefs.section2.li1")}
                </strong>
                <p>{t("beliefs.section2.pli1")}</p>
              </li>
              <li>
                <strong className="block my-4">
                  {t("beliefs.section2.li2")}
                </strong>
                <p>{t("beliefs.section2.pli2")}</p>
              </li>
              <li>
                <strong className="block my-4">
                  {t("beliefs.section2.li3")}
                </strong>
                <p>{t("beliefs.section2.pli3")}</p>
              </li>
            </ul>
          </div>

          <div
            className="max-w-md mt-6"
            data-sal="slide-left"
            data-sal-delay="300"
            data-sal-easing="ease-out"
          >
            <Divider />
          </div>

          <div
            className="max-w-md"
            data-sal="slide-left"
            data-sal-delay="300"
            data-sal-easing="ease-out"
          >
            <h3 className="my-6">
              <strong>{t("beliefs.section2.h3ul1")}</strong>
            </h3>
            <ul className="list-disc pl-10">
              <li>
                <strong className="block my-4">
                  {t("beliefs.section2.ul1li1")}
                </strong>
                <p>{t("beliefs.section2.ul1p1")}</p>
              </li>
              <li>
                <strong className="block my-4">
                  {t("beliefs.section2.ul1li2")}
                </strong>
                <p>{t("beliefs.section2.ul1p2")}</p>
              </li>
              <li>
                <strong className="block my-4">
                  {t("beliefs.section2.ul1li3")}
                </strong>
                <p>{t("beliefs.section2.ul1p3")}</p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <div className="w-full">
        <a
          href="#"
          className="text-center block text-white bg-orange-bohr border-orange-bohr rounded-full border-solid border-4 md:py-5 py-3 px-4 w-40 md:mt-16 mt-12 mx-auto mb-10"
          data-sal="fade"
          data-sal-delay="300"
          data-sal-easing="ease-out"
        >
          {t("beliefs.section2.button")}
        </a>
      </div>
    </Layout>
  )
}

export default beliefs
