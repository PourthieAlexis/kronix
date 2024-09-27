import { AccordionItem, AccordionItemProps } from "./AccordionItem";

type AccordionProps = {
  items: AccordionItemProps[];
};

export default function Accordion({ items }: AccordionProps) {
  return (
    <div className="flex flex-col gap-8">
      {items.map((item, index) => (
        <AccordionItem key={index} title={item.title} content={item.content} />
      ))}
    </div>
  );
}
