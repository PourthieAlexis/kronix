import Image from "next/image";

type CardPricingProps = {
  title: string;
  description: string;
  cancellationPolicy: string;
  price: string;
  buttonText?: string;
  buttonColor?: string;
  features: (string | JSX.Element)[];
};

export default function CardPricing({
  title,
  description,
  cancellationPolicy,
  price,
  buttonText,
  buttonColor,
  features,
}: CardPricingProps) {
  return (
    <div className="bg-[#222222] rounded-3xl w-4/5 md:w-96 h-full border border-[#B9FD50]/[0.37] px-6 py-12">
      <div className="flex flex-col gap-8">
        <div className="flex gap-4">
          <p className="text-4xl font-semibold leading-8">{title}</p>
          {(buttonColor || buttonText) && (
            <button
              className="rounded-lg w-32  h-fit-content text-black font-light text-sm"
              style={{ backgroundColor: buttonColor }}
            >
              {buttonText}
            </button>
          )}
        </div>
        <p className="text-sm opacity-80 w-5/6">{description}</p>
        <div className="w-full bg-[#B9FD50]/[0.37] h-px"></div>
        <div className="flex flex-col gap-2">
          <p className="text-5xl font-semibold text-[#B9FD50]">{price}</p>
          <p className="text-sm opacity-80">{cancellationPolicy}</p>
        </div>
        <div className="w-full bg-[#B9FD50]/[0.37] h-px"></div>
      </div>
      <div className="flex flex-col gap-4 py-8 px-4">
        {features.map((feature, index) => (
          <div className="flex gap-4" key={index}>
            <Image
              src="/images/icon_star.png"
              width={18}
              height={18}
              alt="star icon"
              className="object-contain w-auto h-auto"
            />
            <p className="text-xl">{feature}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-4">
        <button className="rounded-lg border border-[#B9FD50] font-medium h-14">
          Book A Call
        </button>
        <button className="rounded-lg bg-[#B9FD50] text-[#111204] font-medium h-14">
          Click to buy
        </button>
      </div>
    </div>
  );
}
