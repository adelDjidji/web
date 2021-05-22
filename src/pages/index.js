import * as React from "react"

import Seo from "../components/seo"
import Navbar from "../components/Navbar"

const IndexPage = () => (
  <div className="overflow-x-hidden">
    <Seo title="Bohr energie" />
    <Navbar />
    <section className="bg-hero-home md:h-520p h-370p md:bg-cover bg-auto md:bg-top-150 bg-top-90 transform md:scale-105 scale-110 flex flex-col justify-center">
      <h1 className="text-white md:text-7xl text-3xl md:ml-48 ml-10 font-semibold max-w-400 md:mb-5 pt-16 md:pt-0">
        Change
        <br />
        your future.
        <br /> Change
        <br />
        your energy!
      </h1>
      <a
        href="#"
        className="m-2 text-white bg-yellow-500 border-yellow-500 rounded-full border-solid border-4 md:py-2 py-1 px-4 w-36 md:ml-48 ml-10 md:mt-16 mt-12"
      >
        Find out more
      </a>
    </section>
    <p>drjn</p>
  </div>
)

export default IndexPage
