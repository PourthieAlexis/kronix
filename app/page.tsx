import TrustedBrands from "@/components/ui/TrustedBrands";
import Image from "next/image";
import HowWeWork from "@/components/ui/HowWeWork";
import Works from "@/components/ui/Works";
import Capabilities from "@/components/ui/Capabilities";
import Testimonial from "@/components/ui/Testimonial";
import Pricing from "@/components/ui/Pricing";
import NewsArticle from "@/components/ui/NewsArticle";
import FAQ from "@/components/ui/FAQ";
import { Plus_Jakarta_Sans } from "next/font/google";

const plus_jarkarta_sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main>
      <div className="max-w-6xl w-10/12 mx-auto">
        <div className="relative flex flex-col items-center gap-6">
          <div className="absolute rounded-full w-[416px] h-[309px] bg-[#B9FD50] opacity-40 blur-[348px]"></div>
          <Image
            src="/images/star.png"
            width={112.23}
            height={112.23}
            alt="Star"
            className="absolute right-0"
          />
          <h1 className="lg:text-8xl text-5xl text-center lg:w-full w-10/12 text-white font-bold tracking-tight z-10">
            Bringing Your <br />
            Dream Into{" "}
            <span
              className={`text-[#B9FD50] ${plus_jarkarta_sans.className} font-extrabold italic`}
            >
              Reality
            </span>
          </h1>

          <p className="lg:w-6/12 text-center text-lg opacity-80">
            We increase revenue and ensure sustainable long-term growth for your
            business through powerful Webflow websites.
          </p>
          <Image
            src="/images/star.png"
            width={24}
            height={24}
            alt="Star"
            className="absolute bottom-0 right-64"
          />
          <Image
            src="/images/star.png"
            width={16}
            height={16}
            alt="Star"
            className="absolute bottom-12 left-32"
          />
          <button className="bg-[#B9FD50] h-14 w-[149px] rounded-lg text-black text-base">
            Book A Meeting
          </button>
        </div>
        <TrustedBrands />
      </div>
      <HowWeWork />
      <Works />
      <Capabilities />
      <Testimonial />
      <Pricing />
      <NewsArticle />
      <FAQ />
    </main>
  );
}
