import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQSection() {
  const faqs = [
    {
      question: "What is Next.js?",
      answer:
        "Next.js is a React framework for building full-stack web applications. It provides features like server-side rendering, static site generation, and API routes out of the box.",
    },
    {
      question: "How do I start a Next.js project?",
      answer:
        "To start a new Next.js project, you can use the create-next-app command. Run 'npx create-next-app@latest' in your terminal and follow the prompts to set up your new project.",
    },
    {
      question: "What are the key features of Next.js?",
      answer:
        "Some key features of Next.js include automatic code splitting, optimized prefetching, built-in CSS support, API routes, and support for static site generation and server-side rendering.",
    },
    {
      question: "Is Next.js suitable for large-scale applications?",
      answer:
        "Yes, Next.js is well-suited for large-scale applications. It offers excellent performance optimization, scalability, and maintainability features that make it a great choice for complex, enterprise-level projects.",
    },
  ];

  return (
    <section className="w-full py-24 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6">
        <h2 className="title mb-8">Frequently Asked Questions</h2>
        <Accordion
          type="single"
          collapsible
          className="w-full max-w-3xl mx-auto"
        >
          {faqs.map((faq, index) => (
            <AccordionItem value={`item-${index}`} key={index}>
              <AccordionTrigger className="text-left text-lg font-semibold">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
