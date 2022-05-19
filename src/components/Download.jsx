import React from "react";
import AppleIcon from "@mui/icons-material/Apple";
import SvgIcon from "@mui/material/SvgIcon";

function GooglePlayIcon(props) {
  return (
    <SvgIcon sx={{ fontSize: 18 }}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
      </svg>
    </SvgIcon>
  );
}

export default function Download() {
    return (
        <div className="container-fluid" id="downloadSection">
            <h2 className=" display-4 p-3 lh-base">Find the True Love of Your Dog's Life Today.</h2>
            <button className="btn btn-dark btn-lg m-3"><AppleIcon />&nbsp;Download</button>
            <button className="btn btn-light btn-lg m-3"><GooglePlayIcon /> &nbsp;Download</button>
        </div>
    );
}