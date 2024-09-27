import Image from "next/image";
import ServiceInfo from "./ServiceInfo";

export default function HowWeWork() {
  return (
    <section className="py-8">
      <div className="flex flex-col max-w-6xl w-10/12 m-auto">
        <ServiceInfo
          label="HOW WE WORK"
          title="Get a dedicated design team at fraction of the cost."
          description="Grow your brand with high-quality design for a flat monthly fee.
            Work with senior designers. Subscribe and make as many requests as
            you need - no limits."
          buttonText="See Pricing"
        />
        <div className="flex lg:flex-row flex-col gap-8 m-auto mb-12">
          <div className="flex flex-col gap-8">
            <div className="w-full relative">
              <div className="absolute h-0.5 w-full hidden lg:block bg-[#B9FD50] -translate-y-1/2 top-1/2 after:absolute after:right-0 after:top-1/2 after:transform after:-translate-y-1/2 after:-rotate-45 after:border-solid after:border-[#B9FD50] after:border-r-2 after:border-b-2 after:p-[4px]"></div>
              <div className="bg-[#B9FD50] rounded-full size-16 lg:size-24 flex items-center justify-center">
                <Image
                  src="/images/get_started.png"
                  width={45.35}
                  height={45.35}
                  alt="get started logo"
                  className="z-10 object-contain w-2/5"
                />
              </div>
            </div>
            <div className="lg:w-4/5">
              <p className="xl:text-2xl text-xl mb-7">
                Subscribe & get started
              </p>
              <p className="opacity-80">
                Submit as many design tasks as you need without worrying about
                individual project fees.
              </p>
            </div>
          </div>

          <div className="flex gap-80">
            <div className="flex flex-col gap-8">
              <div className="w-full relative">
                <div className="absolute h-0.5 w-full hidden lg:block bg-[#B9FD50] -translate-y-1/2 top-1/2 after:absolute after:right-0 after:top-1/2 after:transform after:-translate-y-1/2 after:-rotate-45 after:border-solid after:border-[#B9FD50] after:border-r-2 after:border-b-2 after:p-[4px]"></div>
                <div className="bg-[#B9FD50] rounded-full size-16 lg:size-24 flex items-center justify-center">
                  <Image
                    src="/images/polished_design.png"
                    width={45.35}
                    height={45.35}
                    alt="polished design logo"
                    className="z-10 object-contain w-2/5"
                  />
                </div>
              </div>

              <div className="lg:w-4/5">
                <p className="xl:text-2xl text-xl mb-7">
                  Polished designs - on time
                </p>
                <p className="opacity-80">
                  Our designers get to work to deliver your request. Receive
                  your design within a few days.
                </p>
              </div>
            </div>
          </div>

          <div className="flex gap-80">
            <div className="flex flex-col gap-8">
              <div className="bg-[#B9FD50] relative rounded-full size-16 lg:size-24 flex items-center justify-center">
                <Image
                  src="/images/revisions.png"
                  width={45.35}
                  height={45.35}
                  alt="revisions logo"
                  className="object-contain w-2/5"
                />
              </div>
              <div className="lg:w-4/5">
                <p className="xl:text-2xl text-xl mb-7">
                  Revisions made simple
                </p>
                <p className="opacity-80">
                  Custom designs, prompt replies and as many revisions as you
                  need.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
