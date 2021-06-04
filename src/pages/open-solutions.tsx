import Seo from "../components/seo"
import Layout from "../components/Layout"
import Divider from "../components/Divider"
import { Link } from "gatsby"

const openSolutions = () => (
  <Layout>
    <Seo title="Bohr energie" />

    <section className="bg-hero-solutions bg-no-repeat bg-cover md:h-410p h-370p flex flex-col justify-center mt-20 md:mt-0 bg-left--53/100-top-41/100">
      <h1 className="text-white md:text-6xl text-3xl md:ml-48 ml-10 font-semibold max-w-400 md:mb-5 pt-16 md:pt-0">
        Our
        <br /> energy
        <br /> solution
      </h1>
    </section>

    <section className="container mx-auto flex md:flex-row flex-col md:mt-20 p-8 text-gray-4a">
      <div
        className="flex-1 mb-10 flex flex-col items-center"
        data-sal="slide-right"
        data-sal-delay="300"
        data-sal-easing="ease-out"
      >
        <div>
          <strong className="text-2xl md:text-3xl md:max-w-xs mb-7 block">
            Suitable solutions
          </strong>
          <h2 className="text-2xl md:text-3xl md:max-w-xs block">
            Change your future with tailor-made solutions.
          </h2>
        </div>
      </div>
      <div
        className="flex-1"
        data-sal="slide-left"
        data-sal-delay="300"
        data-sal-easing="ease-out"
      >
        <p className="md:max-w-md">
          There are no two businesses that are alike. Why settle for a generic
          power product? Find a suitable energy solution for your company’s
          unique needs.
        </p>
        <a
          href="#"
          className="text-center block text-white bg-orange-bohr border-orange-bohr rounded-full border-solid border-4 md:py-2 py-1 px-4 w-28 mt-10 text-sm"
        >
          Start now
        </a>
      </div>
    </section>

    <Divider />

    <section className="container md:mt-20 p-8 text-gray-4a mx-auto">
      <div
        className="flex md:flex-row flex-col justify-center mr-7 md:mb-20 mb-5"
        data-sal="slide-right"
        data-sal-delay="300"
        data-sal-easing="ease-out"
      >
        <div className="flex-auto justify-end flex mr-7">
          <img
            src="/images/clavier.jpg"
            alt="SELLO"
            className="md:max-w-md max-w-full"
          />
        </div>
        <div className="flex-auto flex flex-col justify-center">
          <h3 className="text-2xl md:text-4xl mb-5 text-orange-ff7">
            <strong>Fixed-price</strong>
          </h3>
          <p className="max-w-sm text-gray-4a">
            <strong className="block mb-5">
              You have a secured price for the duration of your contract.
            </strong>
            <ul className="list-disc pl-8">
              <li>100% market or indexed to ARENH.</li>
              <li>Contract duration from 1 to 4 years. </li>
              <li>For one or multiple sites.</li>
              <li>Guaranteed green energy of origin. </li>
              <li>Tailor-made billing.</li>
            </ul>

            <Link
              to="/"
              className="text-orange-ff7 underline mt-5 block hover:opacity-80"
            >
              Start now
            </Link>
          </p>
        </div>
      </div>

      <div
        className="flex md:flex-row flex-col justify-center mr-7 md:mb-20 mb-5"
        data-sal="slide-left"
        data-sal-delay="300"
        data-sal-easing="ease-out"
      >
        <div className="flex-auto justify-end flex mr-7">
          <img
            src="/images/variable_price.jpg"
            alt="SELLO"
            className="md:max-w-md max-w-full"
          />
        </div>
        <div className="flex-auto flex flex-col justify-center">
          <h3 className="text-2xl md:text-4xl mb-5 text-orange-ff7">
            <strong>Variable price</strong>
          </h3>
          <p className="max-w-sm text-gray-4a">
            <strong className="block mb-5">
              You decide when you want to buy your energy supply.
            </strong>
            <ul className="list-disc pl-8">
              <li>
                Indexed to forward wholesale market depending on its position.
              </li>
              <li>Contract duration from 1 to 4 years. </li>
              <li>For one or multiple sites.</li>
              <li>Guaranteed green energy of origin. </li>
              <li>Click option on all or part of the volumes.</li>
            </ul>

            <Link
              to="/"
              className="text-orange-ff7 underline mt-5 block hover:opacity-80"
            >
              Start now
            </Link>
          </p>
        </div>
      </div>

      <div
        className="flex md:flex-row flex-col justify-center mr-7 md:mb-20 mb-5"
        data-sal="slide-right"
        data-sal-delay="300"
        data-sal-easing="ease-out"
      >
        <div className="flex-auto justify-end flex mr-7">
          <img
            src="/images/bourse.jpg"
            alt="SELLO"
            className="md:max-w-md max-w-full"
          />
        </div>
        <div className="flex-auto flex flex-col justify-center">
          <h3 className="text-2xl md:text-4xl mb-5 text-orange-ff7">
            <strong>Spot price</strong>
          </h3>
          <p className="max-w-sm text-gray-4a">
            <strong className="block mb-5">
              You have a price that moves concerning a spot market evolution.
            </strong>
            <ul className="list-disc pl-8">
              <li>Indexed on the spot hourly market prices.</li>
              <li>Contract duration from 1 to 4 years.</li>
              <li>For one or multiple sites.</li>
              <li>Guaranteed green energy of origin.</li>
            </ul>

            <Link
              to="/"
              className="text-orange-ff7 underline mt-5 block hover:opacity-80"
            >
              Start now
            </Link>
          </p>
        </div>
      </div>
    </section>

    <Divider />
    <section className="container mx-auto flex md:flex-row flex-col md:mt-20 p-8 text-gray-4a">
      <div
        className="flex-1 mb-10 flex flex-col items-center"
        data-sal="slide-right"
        data-sal-delay="300"
        data-sal-easing="ease-out"
      >
        <div>
          <strong className="text-2xl md:text-3xl md:max-w-xs mb-7 block">
            Integrated services
          </strong>
          <h2 className="text-2xl md:text-3xl md:max-w-xs block">
            Change your future with personalized services.
          </h2>
        </div>
      </div>
      <div
        className="flex-1 mb-10"
        data-sal="slide-left"
        data-sal-delay="300"
        data-sal-easing="ease-out"
      >
        <p className="max-w-md">
          Do you need an energy consultant? We are here for you and all your
          power projects. Find the support your business deserves.
        </p>
        <a
          href="#"
          className="text-center block text-white bg-orange-bohr border-orange-bohr rounded-full border-solid border-4 md:py-2 py-1 px-4 w-36 mt-10 text-sm"
        >
          Book a consult
        </a>
      </div>
    </section>

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
            <strong>Optimization tools</strong>
          </h2>
          <p className="text-center text-gray-222">
            Get better rates and taxes with our real-time analytic digital tools
            powered by our artificial intelligence platform.
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
            <strong>Energy Advisors</strong>
          </h2>
          <p className="text-center text-gray-222">
            Our energy specialists —with expertise in risk management, energy
            markets, and data analysis, can guide you in any power project.
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
            <strong>Capacity mechanism</strong>
          </h2>
          <p className="text-center text-gray-222">
            We can secure electricity when needed by collaborating with the
            power plants and participating in the power market.
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
            <strong>Energy-Saving Certificates (CEE)</strong>
          </h2>
          <p className="text-center text-gray-222">
            We comply with our state obligation by offering bonuses, subsidized
            loans, or free diagnostics to help you save energy..
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
            <strong>e-Mobility Service Provider</strong>
          </h2>
          <p className="text-center text-gray-222">
            Obtain an optimized safety utility net through the main grid of
            charge point operators with our smart charging tech and transparent
            platforms.
          </p>
        </div>

        <div className="flex-1 md:max-w-md md:mx-4"></div>
      </div>
    </section>

    <Divider />

    <section className="container mx-auto flex md:flex-row flex-col md:mt-20 p-8 text-gray-4a">
      <div
        className="flex-1 mb-10 flex flex-col items-center"
        data-sal="slide-right"
        data-sal-delay="300"
        data-sal-easing="ease-out"
      >
        <div>
          <strong className="text-2xl md:text-3xl md:max-w-xs mb-7 block">
            How do we do it?
          </strong>
          <h2 className="text-2xl md:text-3xl md:max-w-xs block">
            A transparent process for a sustainable change.
          </h2>
        </div>
      </div>
      <div
        className="flex-1 mb-10"
        data-sal="slide-left"
        data-sal-delay="300"
        data-sal-easing="ease-out"
      >
        <p className="max-w-md">
          We do things differently to provide you with affordable energy
          solutions. Easy to control, easy to manage.
        </p>
        <a
          href="#"
          className="text-center block text-white bg-orange-bohr border-orange-bohr rounded-full border-solid border-4 md:py-2 py-1 px-4 w-28 mt-10 text-sm"
        >
          Start now
        </a>
      </div>
    </section>

    <section className="container mx-auto mb-20 text-gray-222">
      <div className="grid md:grid-cols-3 grid-cols-1">
        <div className="text-center mx-auto max-w-xs mb-3">
          <img src="/images/1.jpg" alt="1" className="mb-5 max-w-xs" />
          <h3 className="mb-3">
            <strong>Contact us</strong>
          </h3>
          <p>You want a better energy solution.</p>
        </div>
        <div className="text-center mx-auto">
          <img src="/images/2.jpg" alt="2" className="mb-5" />
          <h3 className="mb-3">
            <strong>Get a solution</strong>
          </h3>
          <p>We analyze your real power needs.</p>
        </div>
        <div className="text-center mx-auto max-w-xs mb-3">
          <img src="/images/3.jpg" alt="3" className="mb-5 max-w-xs" />
          <h3 className="mb-3">
            <strong>Sign up with us</strong>
          </h3>
          <p>We supply you with green energy.</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 grid-cols-1">
        <div className="text-center mx-auto max-w-xs mb-3">
          <img src="/images/4.jpg" alt="4" className="mb-5 max-w-xs" />
          <h3 className="mb-3">
            <strong>Control supply</strong>
          </h3>
          <p>You optimize your power consumption.</p>
        </div>
        <div className="text-center mx-auto max-w-xs mb-3">
          <img src="/images/5.jpg" alt="5" className="mb-5 max-w-xs" />
          <h3 className="mb-3">
            <strong>Get better rates</strong>
          </h3>
          <p>You improve your energy budget.</p>
        </div>
      </div>
    </section>
  </Layout>
)

export default openSolutions
