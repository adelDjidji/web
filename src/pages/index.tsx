import Seo from "../components/seo"
import Navbar from "../components/Navbar"
import Divider from "../components/Divider"
import ContactUs from "../components/ContactUs"
import Footer from "../components/Footer"

const IndexPage = () => (
  <div className="overflow-x-hidden">
    <Seo title="Bohr energie" />
    <Navbar />
    {/* <section className="bg-hero-home md:h-520p h-370p bg-auto bg-top-90 transform flex flex-col justify-center mt-20 md:mt-0"> */}
    <section className="bg-hero-home bg-no-repeat bg-cover md:h-520p h-370p flex flex-col justify-center mt-20 md:mt-0 bg-left--53/100-top-41/100">
      <h1 className="text-white md:text-6xl text-3xl md:ml-48 ml-10 font-semibold max-w-400 md:mb-5 pt-16 md:pt-0">
        Change
        <br />
        your future.
        <br /> Change
        <br />
        your energy!
      </h1>
      <a
        href="#"
        className="m-2 text-white bg-orange-bohr border-orange-bohr rounded-full border-solid border-4 md:py-2 py-1 px-4 w-40 md:ml-48 ml-10 md:mt-16 mt-12"
      >
        Find out more
      </a>
    </section>
    <section className="container mx-auto flex md:flex-row flex-col mt-20 p-8 text-gray-4a">
      <div
        className="flex-1 mb-10 justify-center flex"
        data-sal="slide-right"
        data-sal-delay="300"
        data-sal-easing="ease-out"
      >
        <h2 className="text-2xl md:text-3xl md:max-w-xs">
          <strong>We are innovative energy</strong>
        </h2>
      </div>
      <div
        className="flex-1"
        data-sal="slide-left"
        data-sal-delay="300"
        data-sal-easing="ease-out"
      >
        <p className="md:max-w-md">
          Bohr Energie is the power supplier that combines innovation, quality
          services, and fair prices to improve your business. We will change the
          way you invest in energy.
        </p>
        <a
          href="#"
          className="block text-white bg-orange-bohr border-orange-bohr rounded-full border-solid border-4 md:py-2 py-1 px-4 w-40 md:mt-16 mt-12"
        >
          More about us
        </a>
      </div>
    </section>
    <section className="container mx-auto mb-20">
      <h2 className="text-2xl text-center mt-20 mb-10 text-gray-4a md:text-3xl">
        <strong>Our energy solutions</strong>
      </h2>
      <Divider />
      <h3 className="text-2xl text-center mt-20 mb-10 md:text-3xl">
        Find suitable solutions for your unique needs.
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
            <strong>Products</strong>
          </h2>
          <p className="text-center text-gray-222">
            We create tailor-made energy solutions for your business -no matter
            what its size or its industry is. We do it to optimize your energy
            budget.
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
            <strong>Services</strong>
          </h2>
          <p className="text-center text-gray-222">
            We help you control your energy consumption by using modern digital
            tools, with the support of dedicated contact personnel.
          </p>
        </div>
      </div>
      <a
        href="#"
        className="block text-white bg-orange-bohr border-orange-bohr rounded-full border-solid border-4 md:py-2 py-1 px-4 w-40 md:mt-16 mx-auto"
        data-sal="fade"
        data-sal-delay="300"
        data-sal-easing="ease-out"
      >
        Discover more
      </a>
    </section>
    <section className="p-1 grid md:grid-cols-2 grid-cols-1  text-white font-semibold">
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
            Residential Complexes
          </h2>
          <p className="text-center hover:opacity-80">Read More</p>
        </div>
      </div>
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
          <h2 className="text-4xl text-center md:mb-10 mb-2">
            Independent Businesses
          </h2>
          <p className="text-center hover:opacity-80">Read More</p>
        </div>
      </div>

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
            Small & Medium Enterprises
          </h2>
          <p className="text-center hover:opacity-80">Read More</p>
        </div>
      </div>
      <div
        className="p-1 relative cursor-pointer filter hover:filter-brightness-90"
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
            Corporative & Industrial Complexes
          </h2>
          <p className="text-center hover:opacity-80">Read More</p>
        </div>
      </div>
    </section>
    <section className="container mx-auto mb-20">
      <h2 className="text-2xl text-center mt-20 mb-10 text-gray-4a md:text-3xl">
        <strong>Our key benefits</strong>
      </h2>
      <Divider />
      <h3 className="text-2xl text-center mt-20 mb-10 md:text-3xl">
        Contribute to your business and our world.
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
            <strong>Digital innovation</strong>
          </h2>
          <p className="text-center text-gray-222">
            User-friendly solutions and smart digital tools that make everything
            easier.
          </p>

          <img
            className="md:px-14 px-10"
            src="./images/MONEY.jpg"
            alt="Fair rates"
          />
          <h2 className="text-center text-2xl my-8 text-gray-4a md:text-3xl">
            <strong>Fair rates</strong>
          </h2>
          <p className="text-center text-gray-222">
            Transparent prices that optimize your power consumption and
            investments.
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
            <strong>Personalized attention</strong>
          </h2>
          <p className="text-center text-gray-222">
            Professional support to set up tailor-made integrated energy
            solutions.
          </p>

          <img
            className="md:px-14 px-10"
            src="./images/GREEN.jpg"
            alt="Green Energy"
          />
          <h2 className="text-center text-2xl my-8 text-gray-4a md:text-3xl">
            <strong>Green Energy</strong>
          </h2>
          <p className="text-center text-gray-222">
            100% renewable energy to create a sustainable business world.
          </p>
        </div>
      </div>
      <a
        href="#"
        className="block text-white bg-orange-bohr border-orange-bohr rounded-full border-solid border-4 md:py-2 py-1 px-4 w-40 md:mt-16 mx-auto"
      >
        Discover more
      </a>
    </section>
    <Divider />
    <ContactUs />
    <Footer />
  </div>
)

export default IndexPage
