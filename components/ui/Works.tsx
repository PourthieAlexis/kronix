import Image from "next/image";

export default function Works() {
  return (
    <section className="min-h-screen h-full bg-white text-black" id="portfolio">
      <div className="flex flex-col justify-center items-center gap-4 lg:py-20 py-12 text-center">
        <h2 className="text-5xl font-bold tracking-tighter">
          Our Beautiful Works
        </h2>
        <p className="text-lg opacity-80 text-[#111204] w-8/12">
          We help our clients grow their bottom-line with clear and professional
          websites.
        </p>
      </div>
      <div className="grid lg:grid-cols-4 grid-cols-2 gap-4 w-full mx-auto lg:max-w-screen-xl max-w-screen-sm">
        <div className="flex flex-col-reverse gap-3 lg:gap-7 lg:pt-20">
          <Image
            src="/images/3.png"
            width={340.5}
            height={340.5}
            alt="RWH logo"
          />
          <Image
            src="/images/2.png"
            width={340.5}
            height={340.5}
            alt="cvgt logo"
          />
          <Image
            src="/images/1.png"
            width={340.5}
            height={340.5}
            alt="EDO logo"
          />
        </div>

        <div className="flex flex-col gap-3 lg:gap-7">
          <Image
            src="/images/6.png"
            width={340.5}
            height={340.5}
            alt="dfat poster"
          />
          <Image
            src="/images/5.png"
            width={340.5}
            height={340.5}
            alt="dropbottle logo"
          />
          <Image
            src="/images/4.png"
            width={340.5}
            height={340.5}
            alt="Ader logo"
          />
        </div>

        <div className="flex flex-col-reverse gap-3 lg:gap-7">
          <Image
            src="/images/9.png"
            width={340.5}
            height={340.5}
            alt="welcome-home-project-square logo"
          />
          <Image
            src="/images/8.png"
            width={340.5}
            height={340.5}
            alt="map-square logo"
          />
          <Image
            src="/images/7.png"
            width={340.5}
            height={340.5}
            alt="key-insights logo"
          />
        </div>

        <div className="flex flex-col gap-3 lg:gap-7">
          <Image
            src="/images/10.png"
            width={340.5}
            height={340.5}
            alt="oxfam-appeal-square logo"
          />
          <Image
            src="/images/11.png"
            width={340.5}
            height={340.5}
            alt="thumbnail-poster logo"
          />
          <Image
            src="/images/12.png"
            width={340.5}
            height={340.5}
            alt="bluegreen-square logo"
          />
        </div>
      </div>
    </section>
  );
}
