import React, {  useEffect, useRef } from "react"
import { useSearchParams } from "react-router-dom"

const Modal = () => {
    const dialogRef = useRef<HTMLDialogElement>(null)
    const [searchParams, setSearchParams] = useSearchParams()
    const showDialog = searchParams.get('showDialog')

    const isClickedInsideElement = (e:React.MouseEvent, element : HTMLElement) => {
        const el = element?.getBoundingClientRect()
        return (
            e.clientX > el.left &&
            e.clientX < el.right &&
            e.clientY > el.top &&
            e.clientY < el.bottom
        )
    }

    useEffect(()=>{
        if(showDialog === 'true') dialogRef.current?.showModal()
        else dialogRef.current?.close()
    },[showDialog])

  return (
      <dialog ref={dialogRef} className="fixed h-[10rem] w-[15rem] backdrop:rgba(239, 29, 29, 0.57) self-center"  onClick={(e:React.MouseEvent) => {
          if(showDialog && dialogRef.current && !isClickedInsideElement(e, dialogRef.current)) setSearchParams({showModal:'false'})
        }} > 
        <p>This is a modal</p>
        <button className="" onClick={()=>{setSearchParams({})}} > Close</button>
        </dialog>
  )
}

export default Modal
