import Image from "next/image";

type CardArticleProps = {
  imageSrc: string;
  category: string;
  title: string;
  description: string;
};

export default function CardArticle({
  imageSrc,
  category,
  title,
  description,
}: CardArticleProps) {
  return (
    <div className="rounded-2xl border border-[#B9FD50]/[0.37] w-[554px] h-fit-content flex flex-col sm:flex-row">
      <div className="sm:w-1/3 w-full">
        <Image
          src={imageSrc}
          width={223.17}
          height={50}
          alt={title}
          className="h-36 sm:h-full w-full object-cover rounded-2xl rounded-b-none sm:rounded-b-2xl"
        />
      </div>
      <div className="sm:w-2/3 w-full h-full p-6">
        <div className="flex flex-col">
          <p className="text-sm font-semibold text-[#B9FD50] ">{category}</p>
          <p className="text-2xl font-bold pt-2">{title}</p>
          <p className="text-[#ABABB2] pt-2">{description}</p>
        </div>
      </div>
    </div>
  );
}
