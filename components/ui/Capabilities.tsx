import Image from "next/image";
import ServiceInfo from "./ServiceInfo";
import Tag from "./Tag";

export default function Capabilities() {
  return (
    <section className="min-h-screen h-full py-28" id="benefits">
      <div className="max-w-6xl w-10/12 mx-auto">
        <p className="text-center text-[#B9FD50]">OUR CAPABILITIES</p>
        <p className="font-semibold text-3xl md:text-6xl text-center">
          We can help you with...
        </p>
        <div className="flex gap-2 flex-wrap pt-12 justify-center">
          <Tag tag="Web design & UI" />
          <Tag tag="Social media visuals" />
          <Tag tag="Infographics" />
          <Tag tag="Design system" />
          <Tag tag="Email design" />
          <Tag tag="Stationery" />
          <Tag tag="Icons" />
          <Tag tag="Packaging & merch" />
          <Tag tag="Signage" />
          <Tag tag="Brochures" />
          <Tag tag="Logos & branding" />
          <Tag tag="Digital ads" />
          <Tag tag="Wireframes" />
        </div>
        <ServiceInfo
          label="BENEFITS"
          title="The design subscription that connects you to your dream team"
          description="A subscription can alleviate the stress of staffing, managing expenses, or make design calls like a Creative Director. We partner with you to ensure that your design elevates your brand to new levels."
          buttonText="See Pricing"
        />
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          id="services"
        >
          <div className="w-full border border-[#B9FD50]/[0.09] p-8">
            <Image
              src="/images/1_logo.png"
              width={40}
              height={40}
              alt="Infinite mathematical symbol"
            />
            <p className="font-medium text-xl py-8">1. On-demand requests</p>
            <p className="text-[#9593A4]">
              Put all your requests in the design queue in Trello, and
              we&apos;ll knock them out 1 by 1.
            </p>
          </div>
          <div className="w-full p-8 border border-[#B9FD50]/[0.09]">
            <Image
              src="/images/2_logo.png"
              width={40}
              height={40}
              alt="Flash"
            />
            <p className="font-medium text-xl py-8">2. Top-notch quality</p>
            <p className="text-[#9593A4]">
              High-end work from a dedicated team of senior designers
              that&apos;s always available when you need it.
            </p>
          </div>
          <div className="w-full border border-[#B9FD50]/[0.09] p-8">
            <Image
              src="/images/3_logo.png"
              width={40}
              height={40}
              alt="Webflow"
            />
            <p className="font-medium text-xl py-8">3. Powered by - Webflow</p>
            <p className="text-[#9593A4]">
              We build every site on Webflow, making them dynamic, accessible,
              and easily scalable. It&apos;s easy for you like Squarespace but
              better.
            </p>
          </div>
          <div className="w-full border border-[#B9FD50]/[0.09] p-8">
            <Image
              src="/images/4_logo.png"
              width={40}
              height={40}
              alt="Graphic design"
            />
            <p className="font-medium text-xl py-8">
              4. Fast. Responsive. Reliable.
            </p>
            <p className="text-[#9593A4]">
              Get regular updates on your projects and can expect to receive
              your designs within 2-3 days.
            </p>
          </div>
          <div className="w-full border border-[#B9FD50]/[0.09] p-8">
            <Image
              src="/images/5_logo.png"
              width={40}
              height={40}
              alt="30 days"
            />
            <p className="font-medium text-xl py-8">5. No Lock in contracts</p>
            <p className="text-[#9593A4]">
              Pay the same every month, no surprises. You can use it for as long
              as you want and cancel anytime.
            </p>
          </div>
          <div className="w-full border-[#B9FD50]/[0.09] p-8 border">
            <Image
              src="/images/6_logo.png"
              width={40}
              height={40}
              alt="Price down"
            />
            <p className="font-medium text-xl py-8">6. Great value for money</p>
            <p className="text-[#9593A4]">
              Get the power of dedicated design team at fraction of the cost of
              full-time employee. ($54k/yr vs. $112k/yr).
            </p>
          </div>
          <div className="w-full border border-[#B9FD50]/[0.09] p-8">
            <Image
              src="/images/7_logo.png"
              width={40}
              height={40}
              alt="System update"
            />
            <p className="font-medium text-xl py-8">7. Customized for you</p>
            <p className="text-[#9593A4]">
              We design and build custom for you. We&apos;re never starting from
              a template unless you want that? You don&apos;t, right?
            </p>
          </div>
          <div className="w-full border border-[#B9FD50]/[0.09] p-8">
            <Image
              src="/images/8_logo.png"
              width={40}
              height={40}
              alt="Pay per click"
            />
            <p className="font-medium text-xl py-8">8. Creative paying</p>
            <p className="text-[#9593A4]">
              We&apos;re here when you need us and not on payroll when you
              don&apos;t.
            </p>
          </div>
          <div className="w-full border border-[#B9FD50]/[0.09] p-8">
            <Image src="/images/9_logo.png" width={40} height={40} alt="Work" />
            <p className="font-medium text-xl py-8">9. Expert turnovers</p>
            <p className="text-[#9593A4]">
              You&apos;re getting 10+ years of design experience with every
              request. No hand-holding required.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
