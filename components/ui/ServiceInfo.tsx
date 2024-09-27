type ServiceInfoProps = {
  label: string;
  title: string;
  description: string;
  buttonText: string;
};

export default function ServiceInfo({
  label,
  title,
  description,
  buttonText,
}: ServiceInfoProps) {
  return (
    <div className="flex lg:items-center h-full pt-24 lg:text-start ">
      <div className="flex flex-col items-center md:gap-20 gap-8 mt-4 mb-36 justify-between lg:flex-row">
        <div className="lg:w-3/4 flex flex-col gap-3">
          <label className="text-[#B9FD50]">{label}</label>
          <p className="font-semibold md:text-[54px] text-3xl tracking-tight md:leading-[56px] ">
            {title}
          </p>
        </div>

        <div className="lg:w-3/4">
          <p className="font-light md:text-2xl text-lg opacity-80 mb-9">
            {description}
          </p>
          <button className="bg-[#B9FD50] h-14 w-[149px] rounded-lg text-black text-base">
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
}
