import React, { FC, ReactNode, useEffect, useRef } from "react";
import { Variants, motion } from "framer-motion";
import { useSearchParams } from "react-router-dom";

type IModal = {
  children: ReactNode;
  onClose: (e: React.MouseEvent) => void;
  show: boolean;
};

const Modal: FC<IModal> = ({ children, onClose }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const showDialog = searchParams.get("showDialog");
  const backdropRef = useRef<HTMLDivElement>(null);

  const onCloseModal = (e: React.MouseEvent) => {
    if (!(e.target as Element).classList.contains("modal")) {
      searchParams.delete("showDialog");
      setSearchParams(searchParams);
      onClose(e as React.MouseEvent);
    }
  };

  const onEscPressed = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      searchParams.delete("showDialog");
      setSearchParams(searchParams);
    }
  };

  useEffect(() => {
    document?.addEventListener("keydown", onEscPressed);
    return () => {
      document?.removeEventListener("keydown", onEscPressed);
    };
  }, [showDialog]);

  const modalVariants : Variants = {
    initial : { opacity: 0, y: -30 },
    animate : { opacity: 1, y: 0 },
  }

  return (
    <div
      ref={backdropRef}
      onClick={onCloseModal}
      className="fixed top-0 left-0 w-full h-full m-0 bg-[rgba(0,0,0,0.5)] z-[10] flex justify-center items-center"
    >
      <motion.dialog
      variants={modalVariants}
        initial={'initial'}
        animate={'animate'}
        exit={'initial'}
        open
        className="modal w-[80%] lg:w-[40%] max-w-[90%] z-[11] h-[50vh] mx-auto"
        transition={{
          duration: 0.2,
          when: "beforeChildren",
        }}
      >
        {children}
      </motion.dialog>
    </div>
  );
};

export default Modal;
