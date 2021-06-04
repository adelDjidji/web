import Seo from "../components/seo"
import Layout from "../components/Layout"
import Divider from "../components/Divider"

const beliefs = () => (
  <Layout>
    <Seo title="Bohr energie" />

    <section className="bg-hero-beliefs bg-no-repeat bg-cover h-410p flex flex-col justify-center mt-20 md:mt-0 bg-left--53/100-top-41/100">
      <h1 className="text-white md:text-6xl text-3xl md:ml-48 ml-10 font-semibold max-w-400 md:mb-5 pt-16 md:pt-0">
        Our
        <br /> foundational
        <br /> beliefs
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
          Change your future with an open-energy world.
        </h2>
      </div>
      <div
        className="flex-1"
        data-sal="slide-left"
        data-sal-delay="300"
        data-sal-easing="ease-out"
      >
        <p className="md:max-w-md mb-4">
          Bohr Energie supplies affordable energy for every enterprise that
          needs it because we believe in Niels Bohr’s dream of an open world,
          where resources can be shared.
        </p>
        <p className="md:max-w-md">
          Inspired by the physicist, we created an open-energy company based on
          sharing data, sources, and innovation to get better rates, save
          energy, and protect the environment. Now, as a sustainable energy
          supplier, we aim to generate efficient power solutions that enhance
          our world.
        </p>
        <a
          href="#"
          className="block text-white bg-orange-bohr border-orange-bohr rounded-full border-solid border-4 md:py-2 py-1 px-4 w-52 mt-10 text-sm"
        >
          Find an energy solution
        </a>
      </div>
    </section>

    <div className="container">
      <Divider />
    </div>

    <section className="container flex justify-center mx-auto mt-10">
      <div className="flex-1 text-gray-4a flex flex-col items-end text-3xl mr-32">
        <div
          className="max-w-sm"
          data-sal="slide-right"
          data-sal-delay="300"
          data-sal-easing="ease-out"
        >
          <h2 className="mb-4">
            <strong>Bohr’s legacy</strong>
          </h2>
          <h3 className="mb-4">“What cannot be measured does not exist.”</h3>
          <p className="text-gray-222 text-lg">
            Niels Bohr, Nobel Prize of Physics.
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
          We acknowledge the importance of measuring our accomplishments and our
          environmental share by observing two kinds of metrics that help us
          focus on our main goal: to provide affordable green energy to every
          enterprise that needs it.
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
            <strong>SATISFACTION INDICATORS</strong>
          </h3>
          <ul className="list-disc pl-10">
            <li>
              <strong className="block my-4">Customer satisfaction</strong>
              <p>
                Is our client happy with our integrated solutions and services?
              </p>
            </li>
            <li>
              <strong className="block my-4">Customer effort score</strong>
              <p>
                Did our client spend time and energy to obtain a satisfactory
                solution?
              </p>
            </li>
            <li>
              <strong className="block my-4">Net promoted score</strong>
              <p>What are the odds of being recommended by our clients?</p>
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
            <strong>CLEAN ENERGY INDICATORS</strong>
          </h3>
          <ul className="list-disc pl-10">
            <li>
              <strong className="block my-4">Carbon metrics</strong>
              <p>
                It includes indicators such as carbon footprinting and C02
                emission reductions.
              </p>
            </li>
            <li>
              <strong className="block my-4">Green / Brown exposure</strong>
              <p>
                It covers indicators of climate solutions and climate problems
                in technology, sectors, and industries.
              </p>
            </li>
            <li>
              <strong className="block my-4">Climate score</strong>
              <p>It comprehends qualitative climate-related indicators.</p>
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
        Start now
      </a>
    </div>
  </Layout>
)

export default beliefs
