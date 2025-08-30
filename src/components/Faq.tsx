import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function Faq() {
  return (
    <section id="faq" className="max-w-5xl mx-auto px-6 py-10">
      <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance my-2">
        Frequently Asked Questions
      </h1>
      <p className="text-center text-muted-foreground mb-8">
        Here you can find answers to the most common questions about our
        product.
      </p>
      <Accordion
        type="single"
        collapsible
        className="w-full"
        defaultValue="item-1"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger className=" scroll-m-20 text-xl font-semibold tracking-tight">
            What is Dimmer?
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <p>
              Dimmer is a hybrid music player designed for those who cherish
              their local music libraries but crave the data and insights often
              associated with online platforms.
            </p>
            <p>
              Dimmer is not designed to replace Spotify, Apple Music, or Deezer.
              It focuses on playing the music you own and have stored locally on
              your devices. However you got the does not concern Dimmer either.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className=" scroll-m-20 text-xl font-semibold tracking-tight">
            Why No Mention of Apple Devices At All?
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <p>
              If you wonder this then you likely have an Apple Device. So you at
              least now how genuinely hard it is to do the little things on
              Apple. And for someone used to a much simpler way "easy" life, I
              could not power through Any Apple Device.
            </p>
            <p>
              Dimmer is up and running on Mac OS on device I could test, but I
              just couldn't move forward.
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
}

export default Faq;
