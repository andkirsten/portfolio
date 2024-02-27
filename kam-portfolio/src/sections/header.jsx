import headshot from "../assets/headshot2.png";
import "../input.css";

const Header = () => (
  <header>
    <div className="bg-[#d9d9d9] grid row-auto md:grid-cols-5 gap-10 md:gap-24 md:justify-start">
      <div className="order-2 col-span-2 md:order-1 max-h-[700px] bg-[#3c6e71]">
        <img
          src={headshot}
          alt="Kirsten Andersen Morris"
          className="border-[80px] md:border-[40px] lg:border-[80px] border-[#3c6e71] max-h-[700px] mx-auto"
        />
      </div>
      <div className="text-[#353535] flex flex-col justify-center order-1 md:order-2 col-span-3 mt-12">
        <h1 className="text-white text-6xl max-w-[500px] font-josefin uppercase font-bold">
          Hello, I&apos;m{" "}
          <span className="uppercase text-[#284b63]">
            Kirsten Andersen Morris
          </span>
        </h1>
        <p className="font-inter">software engineer and product owner</p>
        <div className=""></div>
      </div>
    </div>
  </header>
);

export default Header;
