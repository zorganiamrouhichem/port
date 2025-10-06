import React, { ReactNode } from "react";

type ContactCardProps = {
  icon: ReactNode;
  platform: string;
  contactInfo: string;
  message: string;
  href?: string;
};

const ContactCard: React.FC<ContactCardProps> = ({
  icon,
  platform,
  contactInfo,
  message,
  href,
}) => {
  return (
    <a
      href={href || "#"}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col items-center bg-white rounded-xl shadow-md p-6 w-100 hover:shadow-lg transition-shadow cursor-pointer text-center"
    >
      <div className="text-4xl mb-4 text-blue-600">{icon}</div>
      <h3 className="font-semibold text-2xl mb-1">{platform}</h3>
      <p className="text-gray-700 font-mono text-xl mb-2 break-words">{contactInfo}</p>
      <p className="text-gray-500 text-lg">{message}</p>
    </a>
  );
};

export default ContactCard;
