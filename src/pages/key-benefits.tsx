import Seo from "../components/seo"
import Layout from "../components/Layout"
import Divider from "../components/Divider"

const keyBenefits = () => (
  <Layout>
    <Seo title="Bohr energie" />

    <section className="bg-hero-benefits bg-no-repeat bg-cover h-330p flex flex-col justify-center mt-20 md:mt-0 bg-left--53/100-top-41/100">
      <h1 className="text-white md:text-6xl text-3xl md:ml-48 ml-10 font-semibold max-w-400 md:mb-5 pt-16 md:pt-0">
        Our key
        <br /> benefits
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
          Change your energy and let your business contribute to our world.
        </h2>
      </div>
      <div
        className="flex-1"
        data-sal="slide-left"
        data-sal-delay="300"
        data-sal-easing="ease-out"
      >
        <p className="md:max-w-md">
          Bohr Energie gives you innovative energy solutions that can raise your
          power performance by protecting the environment.
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

    <section className="container md:mt-20 p-8 text-gray-4a mx-auto">
      <div className="flex md:flex-row flex-col justify-center mr-7 mb-20">
        <div
          className="flex-auto justify-end flex"
          data-sal="slide-right"
          data-sal-delay="300"
          data-sal-easing="ease-out"
        >
          <img
            src="/images/DIGITAL.jpg"
            alt="SELLO"
            className="md:max-w-lg max-w-full mb-16"
          />
        </div>
        <div
          className="flex-auto flex flex-col justify-center"
          data-sal="slide-left"
          data-sal-delay="300"
          data-sal-easing="ease-out"
        >
          <h3 className="text-2xl md:text-4xl mb-5 text-orange-ff7">
            <strong>Digital innovation</strong>
          </h3>
          <p className="max-w-sm text-gray-4a">
            Discover an easier way to control your energy consumption with our
            real-time analytic digital tools powered by our artificial
            intelligence platform.
          </p>
        </div>
      </div>

      <div className="flex md:flex-row flex-col justify-center mb-20">
        <div
          className="flex-auto justify-end flex items-center order-2"
          data-sal="slide-right"
          data-sal-delay="300"
          data-sal-easing="ease-out"
        >
          <p className="max-w-md text-gray-4a">
            <h3 className="text-2xl md:text-4xl mb-5 text-orange-ff7">
              <strong>Fair rates</strong>
            </h3>
            Secure better prices by monitoring your power consumption —anywhere
            and anytime, and with our transparent energy rates.
          </p>
        </div>
        <div
          className="flex-auto justify-start flex order-1 md:order-3"
          data-sal="slide-left"
          data-sal-delay="300"
          data-sal-easing="ease-out"
        >
          <img
            src="/images/MONEY.jpg"
            alt="SELLO"
            className="md:max-w-lg max-w-full mb-16"
          />
        </div>
      </div>

      <div className="flex md:flex-row flex-col justify-center mr-7 mb-20">
        <div
          className="flex-auto justify-end flex md:mr-10"
          data-sal="slide-right"
          data-sal-delay="300"
          data-sal-easing="ease-out"
        >
          <img
            src="/images/ATTENTION.jpg"
            alt="SELLO"
            className="md:max-w-lg max-w-full mb-16"
          />
        </div>
        <div
          className="flex-auto flex flex-col justify-center"
          data-sal="slide-left"
          data-sal-delay="300"
          data-sal-easing="ease-out"
        >
          <h3 className="text-2xl md:text-4xl mb-5 text-orange-ff7">
            <strong>Personalized attention</strong>
          </h3>
          <p className="max-w-sm text-gray-4a">
            Obtain professional support to set up a tailor-made energy solution
            for your business and whenever needed.
          </p>
        </div>
      </div>

      <div className="flex md:flex-row flex-col justify-center mb-20">
        <div
          className="flex-auto justify-end flex items-center order-2"
          data-sal="slide-right"
          data-sal-delay="300"
          data-sal-easing="ease-out"
        >
          <p className="max-w-md text-gray-4a">
            <h3 className="text-2xl md:text-4xl mb-5 text-orange-ff7">
              <strong>Green energy</strong>
            </h3>
            Transform your business into a sustainable one with our renewable
            energy solutions that enhance your future and our world.
          </p>
        </div>
        <div
          className="flex-auto justify-start flex order-1 md:order-3"
          data-sal="slide-left"
          data-sal-delay="300"
          data-sal-easing="ease-out"
        >
          <img
            src="/images/GREEN.jpg"
            alt="SELLO"
            className="md:max-w-lg max-w-full mb-16"
          />
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
        Start now
      </a>
    </div>
  </Layout>
)

export default keyBenefits
