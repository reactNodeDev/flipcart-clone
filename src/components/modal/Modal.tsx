import React, { useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import { isClickedInsideElement } from "../../utils";

type ModalProps = {
  children: React.ReactNode;
};

const Modal = ({ children }: ModalProps) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const showDialog = searchParams.get("showDialog");

  const onCloseDialog = async () => {
    dialogRef.current?.close();
    searchParams.delete("showDialog");
    setSearchParams(searchParams);
    dialogRef.current?.classList.add("hidden");
  };

  const onEscPressed = (e: KeyboardEvent) =>
    e.key === "Escape" ? onCloseDialog() : null;

  useEffect(() => {
    if (showDialog === "true") dialogRef.current?.showModal();
    else onCloseDialog();

    dialogRef.current?.addEventListener("keydown", onEscPressed);
    return () => {
      dialogRef.current?.removeEventListener("keydown", onEscPressed);
    };
  }, [showDialog]);

  return (
    <dialog
      ref={dialogRef}
      className=" dialog fixed h-[10rem] w-[15rem]"
      onClose={() => {
        console.log("closed");
      }}
      onClick={(e: React.MouseEvent) => {
        if (
          showDialog &&
          dialogRef.current &&
          !isClickedInsideElement(e, dialogRef.current)
        ) {
          onCloseDialog();
        }
      }}
    >
      {children}
    </dialog>
  );
};

export default Modal;
