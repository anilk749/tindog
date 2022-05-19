import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { pink } from "@mui/material/colors";
import SvgIcon from "@mui/material/SvgIcon";

function BullsEyeIcon(props) {
  return (
    <SvgIcon
      sx={{
        fontSize: "70px",
        color: "#F94892",
        paddingTop: "5px",
        paddingBottom: "5px",
      }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path d="M288 256C288 273.7 273.7 288 256 288C238.3 288 224 273.7 224 256C224 238.3 238.3 224 256 224C273.7 224 288 238.3 288 256zM112 256C112 176.5 176.5 112 256 112C335.5 112 400 176.5 400 256C400 335.5 335.5 400 256 400C176.5 400 112 335.5 112 256zM256 336C300.2 336 336 300.2 336 256C336 211.8 300.2 176 256 176C211.8 176 176 211.8 176 256C176 300.2 211.8 336 256 336zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 64C149.1 64 64 149.1 64 256C64 362 149.1 448 256 448C362 448 448 362 448 256C448 149.1 362 64 256 64z" />
      </svg>
    </SvgIcon>
  );
}

export default function Feature() {
  return (
      <div className="row " id="featureSection">
        <div className="align-items-center col-lg-4 p-4">
          <CheckCircleIcon sx={{ fontSize: 70, color: "#F94892" }} />
          <h4 className="px-1 mt-3">Easy to use.</h4>
          <p>So easy to use, even your dog could do it.</p>
        </div>

        <div className="col-lg-4 p-4 align-items-center">
          <BullsEyeIcon />
          <h4 className="px-1 mt-3">Elite Clientele.</h4>
          <p>We have all the dogs, the greatest dogs.</p>
        </div>

        <div className="col-lg-4 align-items-center p-4">
          <FavoriteIcon sx={{ fontSize: 70, color: "#F94892" }} />
          <h4 className="px-1 mt-3">Guaranteed to work.</h4>
          <p>Find the love of your dog's life or your money back.</p>
        </div>
      </div>
  );
}
