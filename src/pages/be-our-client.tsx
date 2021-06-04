import Seo from "../components/seo"
import Layout from "../components/Layout"
import Divider from "../components/Divider"

const beOurClient = () => (
  <Layout>
    <Seo title="Bohr energie" />

    <section className="bg-hero-customer bg-no-repeat bg-cover h-410p flex flex-col justify-center mt-20 md:mt-0 bg-left--53/100-top-41/100">
      <h1 className="text-white md:text-6xl text-3xl md:ml-48 ml-10 font-semibold max-w-400 md:mb-5 pt-16 md:pt-0">
        Our
        <br /> targeted
        <br /> clients
      </h1>
    </section>

    <section className="container mx-auto flex md:flex-row flex-col md:mt-20 p-8 text-gray-4a">
      <div
        className="flex-1 mb-10 flex flex-col items-center"
        data-sal="slide-right"
        data-sal-delay="300"
        data-sal-easing="ease-out"
      >
        <h2 className="text-2xl md:text-3xl md:max-w-xs mb-7">
          Change your energy to improve your business.
        </h2>
      </div>
      <div
        className="flex-1"
        data-sal="slide-left"
        data-sal-delay="300"
        data-sal-easing="ease-out"
      >
        <p className="md:max-w-md">
          Be outstanding by being innovative with Bohr Energie’s solutions. We
          have a highly personalized offer for your business —no matter what its
          size or its industry is.
        </p>
        <a
          href="#"
          className="block text-white bg-orange-bohr border-orange-bohr rounded-full border-solid border-4 md:py-2 py-1 px-4 w-52 mt-10 text-sm"
        >
          Find an energy solution
        </a>
      </div>
    </section>
    <Divider />
    <section>
      <div className="flex md:flex-row flex-col mt-6 md:p-8 p-2 md:justify-center">
        <div
          className="flex-1 md:max-w-md md:mx-4"
          data-sal="slide-right"
          data-sal-delay="300"
          data-sal-easing="ease-out"
        >
          <img
            src="./images/residential-complexes.jpg"
            alt="PRODUCTOS"
            className="brightness-140"
          />
          <h2 className="text-2xl my-8 text-gray-4a md:text-3xl">
            <strong>Residential Complexes</strong>
          </h2>
          <p className="text-gray-222 mb-5">
            <span className="block mb-2">({"<"}10 MWh annual consumption)</span>{" "}
            Focused on collectivities and populated areas with moderate power
            consumption. We can set up a perfect solution to satisfy their daily
            energy requirements.
          </p>
        </div>

        <div
          className="flex-1 md:max-w-md md:mx-4"
          data-sal="slide-left"
          data-sal-delay="300"
          data-sal-easing="ease-out"
        >
          <img src="./images/Independent_Businesses_c.jpg" alt="SERVICIOS" />
          <h2 className="text-2xl my-8 text-gray-4a md:text-3xl">
            <strong>Independent Businesses</strong>
          </h2>
          <p className="text-gray-222">
            <span className="block mb-2">
              ({"<"}0.15 GWh annual consumption)
            </span>{" "}
            Ideal for the power demands of liberal professions,
            micro-entrepreneurs, and craftsmen. You can control your energy
            consumption to save incomes.
          </p>
        </div>
      </div>

      <div className="flex md:flex-row flex-col mt-6 md:p-8 p-2 md:justify-center">
        <div
          className="flex-1 md:max-w-md md:mx-4"
          data-sal="slide-right"
          data-sal-delay="300"
          data-sal-easing="ease-out"
        >
          <img src="./images/wifi-small-business_c.jpg" alt="PRODUCTOS" />
          <h2 className="text-2xl my-8 text-gray-4a md:text-3xl">
            <strong>Small and Medium Enterprises</strong>
          </h2>
          <p className="text-gray-222 mb-5">
            <span className="block mb-2">
              (0.15 - 1 GWh annual consumption)
            </span>{" "}
            Targeted to entrepreneurships, small businesses, and small
            industries. We can find an integrated power solution for your
            growing company’s demands.
          </p>
        </div>

        <div
          className="flex-1 md:max-w-md md:mx-4"
          data-sal="slide-left"
          data-sal-delay="300"
          data-sal-easing="ease-out"
        >
          <img src="./images/Industrial_Complexes_c.jpg" alt="SERVICIOS" />
          <h2 className="text-2xl my-8 text-gray-4a md:text-3xl">
            <strong>Corporative & Industrial Complexes</strong>
          </h2>
          <p className="text-gray-222">
            <span className="block mb-2">({">"}1 GWh annual consumption)</span>
            For big enterprises, hypermarkets, hospitals, corporative buildings,
            and large industrial sites. We can assure you you will get the power
            supply needed to maintain your commercial and industrial activities.
          </p>
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
        Contact us
      </a>
    </div>
  </Layout>
)

export default beOurClient
