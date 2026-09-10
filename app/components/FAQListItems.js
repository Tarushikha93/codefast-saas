"use client";
import { useState } from "react";

const FAQListItems = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <li key={faq.question}>
      <button
        className="py-5 font-semibold border-b w-full text-left flex items-center justify-between"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p>{faq.question}</p>
        {isOpen ? "-" : "+"}
      </button>
      <div className={isOpen ? "block" : "hidden"}> {faq.answer} </div>
    </li>
  );
};
export default FAQListItems;
