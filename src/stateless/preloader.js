import React from "react";

const containerStyle = {
    width: "100%",
    height: "100%"
};

export const Preloader = () => {
    return (
        <div className="valign-wrapper center-align" style={containerStyle}>
            <div className="preloader-wrapper big active">
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