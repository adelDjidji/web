import Seo from "../components/seo"
import Layout from "../components/Layout"
import Divider from "../components/Divider"

const aboutus = () => (
  <Layout>
    <Seo title="Bohr energie" />

    <section className="bg-hero-aboutus bg-no-repeat bg-cover md:h-410p h-370p flex flex-col justify-center mt-20 md:mt-0 bg-left--53/100-top-41/100">
      <h1 className="text-white md:text-6xl text-3xl md:ml-48 ml-10 font-semibold max-w-400 md:mb-5 pt-16 md:pt-0">
        Our
        <br /> Innovative
        <br /> company
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
          Change your future with an OFG start-up enterprise.
        </h2>
        <strong className="text-2xl md:text-3xl md:max-w-xs">
          Be Bohr Energie!
        </strong>
        <img src="/images/SELLO.jpg" alt="SELLO" className="max-w-xs" />
      </div>
      <div
        className="flex-1"
        data-sal="slide-left"
        data-sal-delay="300"
        data-sal-easing="ease-out"
      >
        <p className="md:max-w-md md:mt-10">
          We are a French energy supplier founded in 2020, with the main goal of
          taking advantage of innovation and real-time data to offer suitable
          power solutions that enhance business operations.
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

    <section
      className="container md:mt-20 p-8 text-gray-4a mx-auto"
      data-sal="fade"
      data-sal-delay="300"
      data-sal-easing="ease-out"
    >
      <h2 className="text-2xl md:text-3xl mb-5 text-center">
        <strong>Let’s change together</strong>
      </h2>
      <p className="md:mt-10 text-center">
        We aim at a real change in our planet. For that reason, we can help you
        optimize your resource spending –in incomes and energy, but more
        importantly, we want to make you aware of the impact that energy has
        over your business, your life, and our world.
      </p>
    </section>

    <section className="container md:mt-20 p-8 text-gray-4a mx-auto">
      <div
        className="flex md:flex-row flex-col justify-center mr-7"
        data-sal="slide-right"
        data-sal-delay="300"
        data-sal-easing="ease-out"
      >
        <div className="flex-auto justify-end flex">
          <img
            src="/images/MISION.jpg"
            alt="SELLO"
            className="md:max-w-lg max-w-full"
          />
        </div>
        <div className="flex-auto flex flex-col justify-center">
          <h3 className="text-2xl md:text-4xl mb-5 text-orange-ff7">
            <strong>Mission</strong>
          </h3>
          <p className="max-w-sm text-gray-4a">
            To secure tailor-made energy solutions based on transparent prices
            and power consumption optimization to improve business revenues.
          </p>
        </div>
      </div>

      <div
        className="flex md:flex-row flex-col justify-center"
        data-sal="slide-left"
        data-sal-delay="300"
        data-sal-easing="ease-out"
      >
        <div className="flex-auto justify-end flex items-center order-2">
          <p className="max-w-md text-gray-4a">
            <h3 className="text-2xl md:text-4xl mb-5 text-orange-ff7">
              <strong> Vision</strong>
            </h3>
            To become the alternative power supplier leader that offers
            affordable green energy solutions for B2B companies, driven by
            real-time digital tools.
          </p>
        </div>
        <div className="flex-auto justify-start flex order-1 md:order-3">
          <img
            src="/images/VISION.jpg"
            alt="SELLO"
            className="md:max-w-lg max-w-full"
          />
        </div>
      </div>

      <div
        className="flex md:flex-row flex-col justify-center mr-7"
        data-sal="slide-right"
        data-sal-delay="300"
        data-sal-easing="ease-out"
      >
        <div className="flex-auto justify-end flex md:mr-10">
          <img
            src="/images/VALUES.jpg"
            alt="SELLO"
            className="md:max-w-lg max-w-full"
          />
        </div>
        <div className="flex-auto flex flex-col justify-center">
          <h3 className="text-2xl md:text-4xl mb-5 text-orange-ff7">
            <strong>Values</strong>
          </h3>
          <p className="max-w-sm text-gray-4a">
            We try to do better things for our customers and our planet
            according to our principles:
            <ul>
              <li>• Excellence and efficiency. </li>
              <li>• Transparency and accountability. </li>
              <li>• Quality products and dedicated customer service. </li>
              <li>• Environmental and social responsibility.</li>
            </ul>
          </p>
        </div>
      </div>

      <div
        className="flex md:flex-row flex-col justify-center"
        data-sal="slide-left"
        data-sal-delay="300"
        data-sal-easing="ease-out"
      >
        <div className="flex-auto justify-end flex items-center order-2">
          <p className="max-w-md text-gray-4a">
            <h3 className="text-2xl md:text-4xl mb-5 text-orange-ff7">
              <strong> Philosophy</strong>
            </h3>
            We are an open-energy company based on sharing data, sources, and
            innovation, that seeks to generate efficient power solutions to
            enhance our world.
          </p>
        </div>
        <div className="flex-auto justify-start flex order-1 md:order-3">
          <img
            src="/images/PHILOSOPHY.jpg"
            alt="SELLO"
            className="md:max-w-lg max-w-full"
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
        Contact us
      </a>
    </div>
  </Layout>
)

export default aboutus
