import React from "react"
import {Files} from "../App"

export const GoogleMap = () => (
    <div id="modal1" className="modal">
        <button className="modal-close modal-close btn-flat">Surprise Motherfucker!!!</button>
        <iframe
            className="modal-content"
            src={Files.googleMapSrc}
            width="1000"
            height="800"/>
    </div>
);

// allowfullscreen
// frameborder="0"