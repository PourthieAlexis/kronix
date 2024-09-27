type TagProps = {
  tag: string;
};

export default function Tag({ tag }: TagProps) {
  return (
    <div className="h-12 w-fit bg-[#B9FD50] lg:px-8 px-2 flex justify-center items-center rounded-lg">
      <p className="font-light text-[#111204]">{tag}</p>
    </div>
  );
}
