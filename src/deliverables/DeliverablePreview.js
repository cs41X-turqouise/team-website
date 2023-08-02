import React, { useRef, useState } from "react"; 
const DeliverablePreview = ({children, data, key}) => {

    const nodeRef = useRef(null);
    const dialogRef = useRef(null)
    const [deliverableVisible, setDeliverableVisible] = useState(false);
    function openImg(){dialogRef.current.show()}
    function closeImg(){dialogRef.current.close()}
    
    const deliverableId = 'deliverable_' + key
    const imgPreviewSrc = data.images[0]
    // const previewImageSrc = data.images[0]
    return (
        <>
            <div onClick={openImg}
            className="aspect-square grid place-content-center bg-gray-600">
                <div>
                <img src={imgPreviewSrc}
                    className="aspect-square object-cover"></img>
                    </div>
            </div>

            <dialog ref={dialogRef} onBlur={closeImg}>
                {children}
            </dialog>
        </>
    )
}

export default DeliverablePreview;