import React from "react";
import * as $ from "jquery";

const containerStyle = {
    height: "100%",
    width: "100%",
    position: "fixed",
    background: "white",
    zIndex: "1"
};

export const Preloader = (props) => {
    const preloaderProps = props,
        preloader = $("#preloader");
    return (
        <div id="preloader" className="valign-wrapper" style={containerStyle}>
            {
                preloaderProps.visible ?
                    preloader.show() :
                    preloader.hide()
            }
            <div className={
                "preloader-wrapper big active center-block scale-transition" +
                preloaderProps.visible ?
                    "scale-in" :
                    "scale-out"
            }>
                <div className="spinner-layer spinner-green-only">
                    <div className="circle-clipper left">
                        <div className="circle"/>
                    </div>
                    <div className="gap-patch">
                        <div className="circle"/>
                    </div>
                    <div className="circle-clipper right">
                        <div className="circle"/>
                    </div>
                </div>
            </div>
        </div>
    );
};