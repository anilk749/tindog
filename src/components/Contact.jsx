import React from "react";
import EmailIcon from '@mui/icons-material/Email';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { grey } from "@mui/material/colors";

export default function Contact() {
    const year = new Date().getFullYear();
    return (
    <div className="container-fluid" id="footerSection">
    <a href="https://www.instagram.com/" target={"/"}><InstagramIcon fontSize="small" sx={{color:grey[900]}} /></a>
    <a href="https://www.facebook.com/" target={"/"}><FacebookIcon fontSize="small" sx={{color:grey[900]}}/></a>
    <a href="https://mail.google.com/" target={"/"}><EmailIcon fontSize="small" sx={{color:grey[900]}}/></a>
    <a href="https://twitter.com/" target={"/"}><TwitterIcon fontSize="small" sx={{color:grey[900]}}/></a>
    <p className="mt-4"> &copy; Copyright {year} &nbsp;TinDog</p>
    </div>
    );
}