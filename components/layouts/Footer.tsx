import { FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import { FiMail, FiPhone } from "react-icons/fi";
import { IoArrowForwardCircle } from "react-icons/io5";

export default function Footer() {
  return (
    <footer className="flex flex-col m-auto pt-72 px-8 relative md:w-10/12 lg:w-7/12 w-full">
      <div className="bg-[#1E2008] absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-96 rounded-[36px] flex justify-center items-center px-4">
        <div className="absolute rounded-full w-[365px] h-[271px] bg-[#B9FD50]/[0.15]  blur-[348px]"></div>
        <div className="flex flex-col justify-center items-center text-center">
          <div className=" flex flex-col gap-8 ">
            <p className="font-bold lg:text-6xl text-4xl m-auto ">
              Become part of the design revolution
            </p>
            <p className="lg:text-lg m-auto">
              Jump on a membership and start requesting designs right away!
            </p>
            <button className="rounded-lg bg-[#B9FD50] font-medium text-[#111204] flex gap-2 items-center justify-center px-8 py-4 w-48 m-auto">
              See Pricing
              <IoArrowForwardCircle />
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-between lg:flex-row flex-col gap-8">
        <div className="flex flex-col gap-6 ">
          <p className="font-bold text-3xl">
            Kro<span className="text-[rgb(185,253,80)]">nix</span>
          </p>
          <p className="md:w-2/3 w-full">
            Kornix - the leading digital agency based in the UK, working with
            top-tier clients, from start-ups to enterprises.
          </p>
        </div>
        <div className="flex flex-col gap-6 ">
          <div className="flex items-center gap-3">
            <FiMail size={20} color="white" />
            <p>info@kronix.com</p>
          </div>

          <div className="flex items-center gap-3">
            <FiPhone size={20} color="white" />
            <p>(001) 1231 3435</p>
          </div>

          <div className="flex items-center gap-6">
            <FaFacebook size={20} color="#B9FD50" />
            <FaInstagram size={20} color="white" />
            <FaLinkedinIn size={20} color="white" />

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 56.693 56.693"
              width={20}
              height={20}
              fill="white"
            >
              <path d="M52.43,24.152c-0.324-1.588-0.811-3.152-1.441-4.646c-0.619-1.467-1.387-2.879-2.279-4.199c-0.885-1.309-1.9-2.539-3.018-3.656c-1.117-1.119-2.348-2.135-3.656-3.018c-1.32-0.895-2.734-1.66-4.199-2.281c-1.494-0.629-3.057-1.117-4.646-1.439c-1.627-0.334-3.303-0.504-4.977-0.504c-1.676,0-3.35,0.17-4.979,0.504c-1.588,0.322-3.152,0.811-4.645,1.439c-1.465,0.621-2.879,1.387-4.201,2.281c-1.309,0.883-2.539,1.898-3.656,3.018c-1.118,1.117-2.132,2.348-3.016,3.656c-0.893,1.32-1.66,2.732-2.279,4.199C4.805,21,4.32,22.564,3.995,24.152c-0.333,1.625-0.502,3.301-0.502,4.976c0,1.678,0.169,3.354,0.502,4.98c0.325,1.588,0.811,3.152,1.442,4.645c0.619,1.465,1.387,2.881,2.279,4.201c0.884,1.309,1.898,2.537,3.016,3.656c1.117,1.117,2.348,2.131,3.656,3.016c1.322,0.893,2.736,1.66,4.201,2.279c1.492,0.633,3.057,1.115,4.645,1.441c1.629,0.336,3.303,0.504,4.979,0.504c1.674,0,3.35-0.168,4.977-0.504c1.59-0.326,3.152-0.809,4.646-1.441c1.465-0.619,2.879-1.387,4.199-2.279c1.309-0.885,2.539-1.898,3.656-3.016c1.117-1.119,2.133-2.348,3.018-3.656c0.893-1.32,1.66-2.736,2.279-4.201c0.631-1.492,1.117-3.057,1.441-4.645c0.334-1.627,0.502-3.303,0.502-4.98C52.932,27.453,52.764,25.777,52.43,24.152z M49.316,28.919c-0.305-0.066-7.449-1.604-14.703-0.692c-0.148-0.361-0.299-0.725-0.455-1.09c-0.439-1.033-0.912-2.057-1.404-3.062c8.338-3.402,11.723-8.297,11.762-8.355C47.477,19.314,49.268,23.908,49.316,28.919z M42.156,13.285c-0.053,0.082-3.059,4.658-11.027,7.645c-3.609-6.631-7.574-11.898-7.891-12.316c1.596-0.387,3.26-0.596,4.975-0.596C33.559,8.018,38.436,10.01,42.156,13.285z M23.156,8.631c0,0.002-0.004,0.004-0.004,0.004s-0.023,0.006-0.062,0.014C23.111,8.643,23.135,8.639,23.156,8.631z M19.205,10.035c0.281,0.377,4.186,5.67,7.84,12.164c-10.137,2.693-18.934,2.588-19.492,2.578C8.925,18.238,13.318,12.816,19.205,10.035z M7.102,29.128c0-0.225,0.01-0.445,0.018-0.667c0.372,0.008,10.804,0.245,21.673-3.008c0.605,1.184,1.184,2.387,1.713,3.589c-0.279,0.078-0.557,0.162-0.832,0.252c-11.393,3.682-17.172,13.934-17.172,13.934s0.008,0.006,0.008,0.01C9.149,39.497,7.102,34.552,7.102,29.128z M28.213,50.241c-5.109,0-9.795-1.816-13.447-4.838c0.277,0.225,0.473,0.369,0.473,0.369s4.047-8.826,16.566-13.188c0.047-0.018,0.094-0.031,0.141-0.045c2.971,7.719,4.197,14.184,4.51,16.029C33.922,49.646,31.137,50.241,28.213,50.241z M40.01,46.64c-0.215-1.275-1.34-7.471-4.109-15.08c6.814-1.09,12.721,0.779,13.156,0.922C48.117,38.364,44.75,43.438,40.01,46.64z" />
            </svg>
          </div>
        </div>
      </div>
      <hr className="border border-[#404040] my-12" />
      <div className="flex justify-between flex-col lg:flex-row mb-12 gap-8">
        <ul className="flex gap-3">
          <li>Process</li>
          <li>Benefits</li>
          <li>Services</li>
          <li>Portfolio</li>
          <li>FAQ</li>
        </ul>
        <p>© 2023 shantogfx - All Right Reserved</p>
      </div>
    </footer>
  );
}
