import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { FC } from "react"

interface Props {}
const IndexPage: FC<Props> = ({ children }) => (
  <div className="overflow-x-hidden">
    <Navbar />
    {children}
    <Footer />
  </div>
)

export default IndexPage
