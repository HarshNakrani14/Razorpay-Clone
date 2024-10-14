import React, { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import zoho from "../assets/Images/zoho.png";
import swiggy from "../assets/Images/swiggy.png";
import unacademy from "../assets/Images/unacademy.png";
import urbanCompany from "../assets/Images/urbancompany.png";
import paisaBazaar from "../assets/Images/paisabazaar.png";
import nykaa from "../assets/Images/nykaa.png";
import zerodha from "../assets/Images/zerodha.png";
import goibibo from "../assets/Images/goibibo.png";

// Custom Arrow Components
const CustomNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-arrow custom-next`}
      style={{
        ...style,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'black',
        color: 'white',
        borderRadius: '50%',
        width: '40px',
        height: '40px',
        cursor: 'pointer',
        zIndex: 1,
        right: '-60px',
        top: '50%',
        transform: 'translateY(-50%)',
      }}
      onClick={onClick}
    >
      &#9654; {/* Unicode for right arrow */}
    </div>
  );
};

const CustomPrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-arrow custom-prev`}
      style={{
        ...style,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'black',
        color: 'white',
        borderRadius: '50%',
        width: '40px',
        height: '40px',
        cursor: 'pointer',
        zIndex: 1,
        left: '-60px',
        top: '50%',
        transform: 'translateY(-50%)',
      }}
      onClick={onClick}
    >
      &#9664; {/* Unicode for left arrow */}
    </div>
  );
};

// Slide Component
const Slide = ({ title, description, imageSrc, imageAlt }) => (
  <div className="flex justify-center items-center h-full">
    <div className="w-full max-w-7xl mx-auto grid md:grid-cols-2 gap-4 items-center px-4">
      <div className="space-y-4">
        <p className="text-blue-800 text-xl md:text-3xl font-bold">{title}</p>
        <p className="text-black text-lg md:text-2xl">for India's finest disruptors</p>
        <p className="text-gray-600 text-base md:text-lg">{description}</p>
        <div className="flex space-x-2 md:space-x-4 mt-4">
          <button className="bg-blue-600 text-white py-2 px-4 rounded shadow hover:bg-blue-700 transition duration-300 text-sm md:text-base">
            Sign Up Now
          </button>
          <button className="border border-blue-600 text-blue-600 py-2 px-4 rounded hover:bg-blue-600 hover:text-white transition duration-300 text-sm md:text-base">
            Know More
          </button>
        </div>
      </div>
      <div className="flex justify-center">
        <img 
          src={imageSrc} 
          alt={imageAlt} 
          className="rounded-lg shadow-lg max-h-[60vh] w-full object-cover"
        />
      </div>
    </div>
  </div>
);

const Hero = () => {
  const [hovered, setHovered] = useState(false); // State for hover effect

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    pauseOnHover: true,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 768, // For screens smaller than 768px
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024, // For screens between 768px and 1024px
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const slidesData = [
    {
      title: "Advanced Payment Solutions",
      description: "100+ Payment Methods | Easy Integration | Powerful Dashboard",
      imageSrc: "https://img.freepik.com/free-vector/nfc-connection-abstract-concept-vector-illustration-bank-connection-nfc-communication-contactless-card-payment-method-banking-technology-financial-transaction-paying-app-abstract-metaphor_335657-2509.jpg?w=740&t=st=1728905739~exp=1728906339~hmac=7c30914de11acb3d61ad9cf418a2030ce7b196a3267a2c045d0b24f901f12a1d",
      imageAlt: "Advanced Payment Solutions"
    },
    {
      title: "Automated Payroll",
      description: "Automated Payroll & compliances | Built for Startups & Enterprises",
      imageSrc: "https://img.freepik.com/free-vector/robotic-process-automation-illustration_23-2149227347.jpg?t=st=1728731913~exp=1728735513~hmac=f390e223c6f7e17ad5a4ed87585a4a6be45edb9326f0373e964b329644348080&w=740",
      imageAlt: "Automated Payroll"
    },
    {
      title: "Easy In-Person Payments",
      description: "Quick Payments | Seamless Integration | Top-tier UPI stack",
      imageSrc: "https://img.freepik.com/free-vector/people-sending-receiving-money-online-man-woman-using-gadgets-transactions-flat-vector-illustration-payment-system-mobile-banking_74855-13200.jpg?t=st=1728731974~exp=1728735574~hmac=f60ba94bbb04b093c1f7a4589ccb7af0e404d507b2a5640e8d8fc352df6a8e79&w=740",
      imageAlt: "In-Person Payments"
    },
    {
      title: "Effortless Banking",
      description: "Powerful Automation | Smart Dashboard | Integrated Access",
      imageSrc: "https://img.freepik.com/free-vector/banking-background-design_1223-54.jpg?t=st=1728732042~exp=1728735642~hmac=361fe48b368869fcbf8faab91715b984825d49081cb16aa366289c8ec3cc9b26&w=740",
      imageAlt: "Effortless Banking"
    },
  ];

  const logos = [
    { src: zoho, alt: 'Zoho' },
    { src: unacademy, alt: 'Unacademy' },
    { src: urbanCompany, alt: 'Urban Company' },
    { src: swiggy, alt: 'Swiggy' },
    { src: paisaBazaar, alt: 'Paisa Bazaar' },
    { src: nykaa, alt: 'Nykaa' },
    { src: zerodha, alt: 'Zerodha' },
    { src: goibibo, alt: 'Goibibo' },
  ];

  return (
    <section className="relative bg-gradient-to-r from-blue-50 to-blue-100 h-[85vh] w-full py-14 overflow-hidden">
      <Slider {...settings} className="w-full max-w-screen-xl mx-auto">
        {slidesData.map((slide, index) => (
          <Slide 
            key={index}
            title={slide.title}
            description={slide.description}
            imageSrc={slide.imageSrc}
            imageAlt={slide.imageAlt}
          />
        ))}
      </Slider>

      {/* Logos Section */}
      <div 
        className="w-full py-4 bg-gradient-to-r from-blue-50 to-blue-100 mt-4 shadow-md"
        onMouseEnter={() => setHovered(true)} // Set hover state to true on mouse enter
        onMouseLeave={() => setHovered(false)} // Set hover state to false on mouse leave
      >
        <div className="max-w-screen-lg mx-auto flex justify-center items-center overflow-hidden px-2 space-x-4 flex-wrap">
          {logos.map((logo, index) => (
            <img 
              key={index}
              src={logo.src} 
              alt={logo.alt} 
              className={`h-12 md:h-24 max-w-[100px] object-contain cursor-pointer transition-transform duration-300 ${hovered ? 'filter-none scale-110' : 'filter grayscale hover:scale-110'}`} // Scale on hover
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
