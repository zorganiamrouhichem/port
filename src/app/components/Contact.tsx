import React from "react";
import ContactCard from "./ContactCard";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Contact() {
  return (
<section
  id="contact"
  className="w-full max-w-8xl mx-auto px-4 py-16 text-center scroll-mt-32"
>
      <h1 className="font-montserrat text-[48px] text-custom-black font-semibold mb-4">
  Let&apos;s <br /> talk
</h1>

      <p className="text-[#505050] font-inter text-[28px] mb-12">You can find me on...</p>

      <div className="flex justify-center gap-8 flex-wrap">
        <ContactCard
          icon={<FaGithub />}
          platform="GitHub"
          contactInfo="zorganiamrouhichem"
          message="Check out my projects and code"
          href="https://github.com/zorganiamrouhichem"
        />

        <ContactCard
          icon={<FaLinkedin />}
          platform="LinkedIn"
          contactInfo="Amrou Hichem Zorgani"
          message="Let's connect professionally"
          href="https://www.linkedin.com/in/amrou-hichem-zorgani-8128ab31b/"
        />

        <ContactCard
          icon={<FaEnvelope />}
          platform="Email"
          contactInfo="hichem.zorgani2003@gmail.com"
          message="Send me an email anytime"
          href="mailto:hichem.zorgani2003@gmail.com"
        />
      </div>
    </section>
  );
}

export default Contact;
