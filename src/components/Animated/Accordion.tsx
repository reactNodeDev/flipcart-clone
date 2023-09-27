import React from "react";
import {
  AnimatePresence,
  motion,
  Variants,
  useWillChange,
} from "framer-motion";

interface IAccordion<DepType> {
  children: React.ReactNode;
  dependency: DepType;
}

const Accordion = <DepType,>({ children, dependency }: IAccordion<DepType>) => {
  const willChange = useWillChange();

  const accordionVariants: Variants = {
    initial: {
      gridTemplateRows: "0fr",
    },
    animate: {
      gridTemplateRows: "1fr",
    },
  };

  return (
    <AnimatePresence>
      {dependency && (
        <motion.div
          variants={accordionVariants}
          initial={"initial"}
          animate={"animate"}
          exit={"initial"}
          className={`grid`}
          style={{ willChange: willChange }}
        >
          <div className="overflow-hidden px-5">{children}</div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Accordion;
