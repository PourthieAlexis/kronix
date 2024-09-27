import Accordion from "./Accordion/Accordion";

export default function FAQ() {
  return (
    <section
      className="min-h-screen h-full pt-28 pb-64 bg-white text-black"
      id="faq"
    >
      <div className="max-w-xl w-11/12 mx-auto">
        <div className="flex flex-col justify-center items-center gap-6 mb-16">
          <p className="font-bold text-5xl text-center">FAQ's</p>
          <p className="text-lg text-center w-2/3 opacity-60">
            Providing answers to your questions
          </p>
        </div>
        <div className="flex flex-col w-full">
          <Accordion
            items={[
              {
                title: "Do you have specific princing plans to show?",
                content:
                  "Donec rutrum, mauris at blandit convallis, orci nulla volutpat sapien, id pulvinar leo ligula eget nunc. In quis magna magna. Nullam mattis eget.",
              },
              {
                title: "How many years of experience do you have?",
                content:
                  "Donec rutrum, mauris at blandit convallis, orci nulla volutpat sapien, id pulvinar leo ligula eget nunc. In quis magna magna. Nullam mattis eget.",
              },
              {
                title: "What companies have you worked with?",
                content:
                  "Donec rutrum, mauris at blandit convallis, orci nulla volutpat sapien, id pulvinar leo ligula eget nunc. In quis magna magna. Nullam mattis eget.",
              },
              {
                title: "Am I safe leaving my company in your hands?",
                content:
                  "Donec rutrum, mauris at blandit convallis, orci nulla volutpat sapien, id pulvinar leo ligula eget nunc. In quis magna magna. Nullam mattis eget.",
              },
            ]}
          />
          <div className="mt-8 w-full">
            <textarea
              className="w-full h-32 p-4 border border-[#111204] rounded-2xl focus:outline-none resize-none"
              placeholder="Ask us what you want to know..."
            />
            <div className="flex justify-between items-center mt-4">
              <p className="text-sm text-[#111204] opacity-60 w-1/2">
                We will answer your questions via email within 48 hours.
              </p>
              <button className=" bg-[#B9FD50] text-black font-semibold px-12 py-3 rounded-[30px] hover:bg-[#a3e146] transition-colors duration-300">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
