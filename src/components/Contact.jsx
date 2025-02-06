import { CONTACT } from "../constants";

const Contact = () => {
  return (
    <section className="container mx-auto mt-20" id="contact">
      <h2 className="mb-8 text-center text-3xl lg:text-4xl">Contact Us</h2>
      <div className="text-neutral-400">
        {CONTACT.map((detail) => (
          <p key={detail.key} className="my-20 border-b-2 border-dotted border-neutral-700 text-2xl tracking-tighter pb-12 text-center lg:text-3xl">{detail.value}</p>
        ))} 
      </div>
    </section>
  );
};

export default Contact;
