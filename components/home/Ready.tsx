import Link from "next/link";
import React from "react";

const Ready = () => {
  return (
    <div className="py-36 text-center text-white bg-primary">
      <h1 className="text-4xl font-medium mb-4">
        Ready to Create Your Dream Outfit?
      </h1>
      <p className="px-4">
        Let&apos;s bring your vision to life. Book a consultation today.
      </p>
      <Link href={"/contact"}>
        <button className="btn mt-8 text-primary bg-white border border-primary hover:bg-primary hover:text-white hover:border-white">
          Get in touch
        </button>
      </Link>
    </div>
  );
};

export default Ready;
