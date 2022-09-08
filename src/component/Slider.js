import React from "react";
import { BgSlider, SliderContainer } from "./styles/Slider.Styled";
import Slide from "./Slide";

const slidesData = [
  {
    id: 0,
    body: "اگر شما یک طراح هستین و یا با طراحی های گرافیکی سروکار دارید به متن های برخورده اید که با نام لورم ایپسوم شناخته می‌شوند. لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) متنی ساختگی و بدون معنی است که برای امتحان فونت و یا پر کردن فضا در یک طراحی گرافیکی و یا صنعت چاپ استفاده میشود.",
  },
  {
    id: 1,
    body: "اگر شما یک طراح هستین و یا با طراحی های گرافیکی سروکار دارید به متن های برخورده اید که با نام لورم ایپسوم شناخته می‌شوند.",
  },
  {
    id: 2,
    body: "طراحان سایت هنگام طراحی قالب سایت معمولا با این موضوع رو برو هستند که محتوای اصلی صفحات آماده نیست. در نتیجه طرح کلی دید درستی به کار فرما نمیدهد.",
  },
];

function Slider() {
  return (
    <BgSlider>
      <SliderContainer>
        <Slide slides={slidesData} />
      </SliderContainer>
    </BgSlider>
  );
}

export default Slider;
