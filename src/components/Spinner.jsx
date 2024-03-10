import React from "react";
import "./Spinner.css";

const Spinner = () => {
    return (
        <div className="flex flex-col w-screen h-screen justify-center items-center space-y-7">
            <div className="custom-loader"></div>
            <p className="text-3xl font-bold">Loading....</p>
        </div>
    )
}

export default Spinner