import ContactForm from "@/components/contact/ContactForm";
import DirectContact from "@/components/contact/DirectContact";
import Title from "@/components/contact/Title";
import React, { Suspense } from "react";

const page = () => {
  return (
    <div className="px-8 pb-36">
      <Title />
      <div className="grid gap-12 mt-18 mx-auto lg:grid-cols-5 max-w-6xl grid-cols-1">
        <div className="lg:col-span-3">
          <Suspense fallback={null}>
            <ContactForm />
          </Suspense>
        </div>
        <div className="lg:col-span-2">
          <DirectContact />
        </div>
      </div>
    </div>
  );
};

export default page;
