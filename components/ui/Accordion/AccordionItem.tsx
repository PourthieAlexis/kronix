"use client";
import { useState, useRef } from "react";

export type AccordionItemProps = {
  title: string;
  content: string;
};

export function AccordionItem({ title, content }: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-[#111204] text-white rounded-3xl">
      <button
        className="w-full flex flex-col justify-between text-left p-5"
        onClick={toggleAccordion}
      >
        <div className="flex justify-between items-center gap-4">
          <span className="text-lg font-medium">{title}</span>
          <span className="bg-[#B9FD50] rounded-full flex justify-center items-center w-12 h-12">
            <svg
              fill="#000000"
              height="40px"
              width="40px"
              version="1.1"
              viewBox="-325.95 -325.95 1059.34 1059.34"
              className={`transition-transform duration-300 ${
                isOpen ? "-rotate-180" : ""
              }`}
            >
              <g id="SVGRepo_iconCarrier">
                <polygon points="386.258,91.567 203.718,273.512 21.179,91.567 0,112.815 203.718,315.87 407.437,112.815 "></polygon>
              </g>
            </svg>
          </span>
        </div>
        <div
          ref={contentRef}
          style={{
            height: isOpen ? `${contentRef.current?.scrollHeight}px` : "0px",
          }}
          className="transition-height duration-300 ease-in-out overflow-hidden"
        >
          <p className="py-4">{content}</p>
        </div>
      </button>
    </div>
  );
}
