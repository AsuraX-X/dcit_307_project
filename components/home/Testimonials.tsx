import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      testimonial: `"Grace transformed my vision into the most beautiful wedding dress.
            Every detail was perfect."`,
      name: "Amara O.",
      event: "Bride",
    },
    {
      testimonial: `"I've never felt more confident in an outfit. The fit and quality are exceptional."`,
      name: "Chioma E.",
      event: "Gala Event",
    },
    {
      testimonial: `"She understands fabric like no one else. My traditional outfit was a showstopper."`,
      name: "Fatima K.",
      event: "Naming Ceremony",
    },
  ];

  return (
    <div className="py-36">
      <p className="uppercase tracking-widest mb-2 text-center text-black/60 font-medium">
        Testimonials
      </p>
      <h1 className="uppercase text-center text-3xl">What Clients Say</h1>
      <div className="px-10 flex gap-8 justify-center items-center flex-wrap py-16">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="bg-secondary border w-fit border-black/20 p-8"
          >
            <p className="italic text-black/70 max-w-2xs">{t.testimonial}</p>
            <h2 className="font-medium">{t.name}</h2>
            <p className="text-xs text-black/70">{t.event}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
