import React from "react";
import { HeaderStyled } from "./styles/Header.Styled";
import { FlexStyled } from "./styles/Flex.Styled";
import { FaPhone, FaShoppingBag } from "react-icons/fa";
import Dropdown from "./Dropdown";

function Header() {
  return (
    <HeaderStyled>
      <FlexStyled JustifyContent="space-around">
        <img src="/image/logo" alt="" />

        <form>
          <input
            type="search"
            placeholder="نام محصول مورد نظر خود را وارد کنید"
          />
        </form>

        <div className="phone cursor-pointer">
          <FaPhone size={30} />
          021-15489663
        </div>

        <div className="login">
          <Dropdown />
        </div>

        <div className="cart cursor-pointer">
          <FaShoppingBag size={30} className="position-relative" />
          <span
            style={{ top: "20px", right: "89%" }}
            className="position-absolute  badge rounded-pill bg-danger"
          >
            5
          </span>
          سبدخرید
        </div>
      </FlexStyled>
    </HeaderStyled>
  );
}

export default Header;
