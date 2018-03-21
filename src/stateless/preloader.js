import React from "react";
import PropTypes from "prop-types";

const containerStyle = {
    height: "100%",
    width: "100%",
    position: "fixed",
    background: "white",
    zIndex: "100"
};

const Preloader = (props) => {
    return (
        <div
            id="preloader"
            className={
                "valign-wrapper scale-transition " + (
                    props.visible ?
                        "" :
                        "scale-out unset"
                )
            }
            style={containerStyle}
        >
            <div className="preloader-wrapper big active center-block">
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

Preloader.propTypes = {
    visible: PropTypes.bool.isRequired
};

export default Preloader