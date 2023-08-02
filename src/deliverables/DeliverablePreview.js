import React, { useRef, useState } from "react"; 
import Deliverable from "./Deliverable";
const DeliverablePreview = ({children, data, Deliverable:Deliverable}) => {
    const dialogRef = useRef(null)
    function openImg(){
        console.log("whoop")
        dialogRef.current.showModal()
    }
    function closeImg(){
        dialogRef.current.close()
    }
    function checkDialogClick(event){
        console.log(event.target)
        if(!event.target.closest('div[name="edge"]'))
            closeImg();
    }
    
    const imgPreviewSrc = data.images[0]
    const title = data.title;
    // const previewImageSrc = data.images[0]
    return (
        <>
            <div onClick={openImg}
             className="relative aspect-square grid place-content-center bg-gray-600">
                <div className="relative">
                    <img src={imgPreviewSrc}
                        className="aspect-square object-cover "></img>

                    <div className="absolute bottom-0 bg-green-200 w-full p-1">{title}</div>
                </div>
            </div>

            <dialog ref={dialogRef} onClick={checkDialogClick}
             className="w-fit backdrop:bg-gray-900 backdrop:opacity-75
                        border-none">
                <div name="edge" className="p-0 grid justify-center">
                    <Deliverable/>
                </div>
            </dialog>
        </>
    )
}

export default DeliverablePreview;