import React from "react";
import { Logo } from "../component/styles/Logo";
import List from "./List";
import { linksOfFooter as link1 } from "../Content";
import { FooterStyed } from "../component/styles/Footer.Styed";
import SocialIcons from "./SocialIcons";
import { FaPhone, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import Form from "./Form";

function Footer() {
  return (
    <FooterStyed>
      <div className="d-flex justify-content-between align-items-center">
        <Logo>لوگو</Logo>
        <div>
          <div className="d-flex justify-content-between">
            <List data={link1} titleList="لینک ها دسترسی" />
            <List data={link1} titleList="خدمات مشتریان" />
            <List data={link1} titleList="راهنمای خرید" />
          </div>
        </div>
        <div style={{ borderRadius: "20px" }} className="d-flex bg-white p-3">
          <img src="./image/F1" alt="" />
          <img src="./image/F2" alt="" />
        </div>
      </div>
      <hr />
      <div className="d-flex pt-3 justify-content-between">
        <div>
          <h4 className="fw-bold">اطلاعات تماس</h4>
          <div className="d-flex ">
            <div className="addres d-flex  ">
              <FaMapMarkerAlt />
              <p className="d-inline-block w-75 me-2 ">
                ورم ایپسوم یا طرح‌نما به متنی بی‌معنی در طراحی گرافیک گفته
                می‌شود
              </p>
            </div>
            <div className=" d-flex flex-column">
              <div className="addres d-flex align-items-baseline">
                <FaEnvelope />
                <p className="me-2 ">example@gmail.com</p>
              </div>
              <div className="addres d-flex ">
                <FaPhone />
                <p className="me-2">021-1254863</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h6> مارا دنبال کنید</h6>
          <SocialIcons />
        </div>
      </div>
      <hr />
      <div className="d-flex py-3 justify-content-around align-items-center">
        <h4>باعضویت در خبرنامه ما همواره بروز باشید. </h4>
        <Form placeholder="شماره همراه خود را وارد کنید" />
        <Form placeholder="ایمیل خود را وارد کنید" type="email" />
      </div>
      <div dir="ltr" className="CopyRight ">
        Copyright © 2012 - 2022
      </div>
    </FooterStyed>
  );
}

export default Footer;
