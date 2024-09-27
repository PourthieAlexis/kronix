import Carousel from "./Carousel/Carousel";

export default function Testimonial() {
  return (
    <section className="m-auto min-h-screen h-full bg-white text-black py-24">
      <p className="text-center pb-4">TESTIMONIAL</p>
      <p className="md:text-5xl text-3xl m-auto text-center font-bold w-3/4 pb-8">
        Customer is Our Top Priority
      </p>
      <p className="text-center pb-8 w-3/4 text-lg m-auto">
        We survey all of our clients, the results of which go directly to our
        CEO.
      </p>

      <Carousel />
    </section>
  );
}
