import Image from "next/image";

export default function TrustedBrands() {
  return (
    <>
      <div className="flex justify-center items-center gap-12 mt-24 mb-12">
        <div className="w-[50px] h-[2px] bg-[#B9FD50]"></div>
        <p className="font-bold text-center">TRUSTED BY AMAZING BRANDS</p>
        <div className="w-[50px] h-[2px] bg-[#B9FD50]"></div>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-10 bg-[#222222] w-full h-fit-content py-12 rounded-[22px]">
        <Image src="/images/layers.png" width={146} height={48} alt="layers" />
        <Image
          src="/images/quotient.png"
          width={187}
          height={48}
          alt="quotient"
        />
        <Image
          src="/images/circooles.png"
          width={183}
          height={48}
          alt="circooles"
        />
        <Image
          src="/images/hourglass.png"
          width={194}
          height={48}
          alt="hourglass"
        />
        <Image
          src="/images/commandr.png"
          width={216}
          height={48}
          alt="commandr"
        />
      </div>
    </>
  );
}
