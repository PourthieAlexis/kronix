import CardPricing from "./CardPricing";

export default function Pricing() {
  return (
    <section className="min-h-screen h-full py-28">
      <div className="flex flex-col justify-center items-center gap-6 mb-16">
        <p className="text-[#B9FD50] text-center ">CLEAR & SIMPLE PRICING</p>
        <p className="font-bold md:text-5xl text-3xl text-center px-8">
          Simple pricing to level up your brand.
        </p>
        <p className="text-lg text-center opacity-80 md:w-1/3 w-2/3">
          Senior experts. On-demand requests. Fast turnarounds. Flat monthly
          fee. Cancel anytime.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-8">
        <CardPricing
          title="Standard"
          description="One request at a time. For companies who need on-going design support."
          cancellationPolicy="Pause or cancel anytime"
          price="$2,995/m"
          buttonText="Most Popular"
          buttonColor="#B9FD50"
          features={[
            "1x active task at a time",
            "Unlimited",
            "Dedicated project manager",
            "Daily comms through Slack",
            "Work with senior designers",
            "2-3 days turn around time",
            "Top tier design",
          ]}
        />
        <CardPricing
          title="Growth"
          description="Double the requests. For companies with increasing design needs. Limited spots."
          cancellationPolicy="Pause or cancel anytime"
          price="$4,795/m"
          buttonText="Best value"
          buttonColor="white"
          features={[
            <span key="growth-1">
              <span className="text-[#B9FD50] font-semibold">
                2x active task
              </span>{" "}
              at a time
            </span>,
            "Unlimited revisions",
            "Dedicated project manager",
            "Daily comms through Slack",
            "Work with senior designers",
            "2-3 days turn around time",
            "Top tier design ",
          ]}
        />
        <CardPricing
          title="Basic - Weekly"
          description="Perfect if you want to try the subscription out or only have a few one-off tasks."
          cancellationPolicy="Paid per weekly"
          price="$890/m"
          features={[
            "Fixed Scope of work",
            "2 rounds of revisions",
            "Dedicated project manager",
            "Daily comms through Slack",
            "1x designer",
            "2-5 days turn around time",
            "Top tier design",
          ]}
        />
      </div>
    </section>
  );
}
