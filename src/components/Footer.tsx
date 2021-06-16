const Footer = () => {
  return (
    <footer className="flex w-full flex-col justify-between md:flex-row bg-black-footer text-white-FB text-lg md:pt-20 pt-10 md:pl-16 pl-5 pb-5">
      <div className="flex-auto">
        <p className="mb-6 ">
          <a href="#" className="text-white underline">
            © 2020
          </a>
          <span> </span>
          Bohr Energie
        </p>
        <p className=" mb-6">
          <strong>Phone: </strong>08.05.03.38.00
        </p>
        <p className=" mb-6">
          <strong>Mail: </strong>
          <a href="#" className=" text-white underline">
            <strong>contact@bohr-energie.fr</strong>
          </a>
        </p>
      </div>
      <div className="flex-auto">
        <p className="mb-5">Help and support</p>
        <p className="mb-5">Term of sales or CGV</p>
        <p className="mb-5">Terms and Conditions of use or CGU</p>
        <p className="mb-5">Legal Notice</p>
        <p className="mb-5">Join Us</p>
      </div>
    </footer>
  )
}
export default Footer
