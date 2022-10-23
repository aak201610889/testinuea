import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
function Header() {
  const [show, seetshow] = useState(false);
  const {i18n,t} = useTranslation();
  return (
    <div className="absolute top-0 right-0 left-0">

    <div className="w-[100%]   py-[10px] relative">
      <div className="container flex w-[95%] justify-between m-auto items-center">
        <h1 className="text-3xl font-mono">{t("navHome")}</h1>

        <div className="w-[40%]  justify-between lg:flex md:flex hidden">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/about">About</NavLink>
        </div>
        <div className="w-[20%] flex justify-between lg:block md:block hidden ">
          <NavLink to="/signin">signin</NavLink>
          <NavLink to="/signin">login</NavLink>
        </div>

        <div
          className="w-[10%] border-[1px] border-[black] pl-[2px] pb-[5px] rounded-md block lg:hidden "
          onClick={() => {
            seetshow(!show);
          }}
        >
          {show && (
            <div className=" transition-colors transi">
              <div className="w-[30px] h-[3px] bg-slate-700 mt-[5px] rounded-md"></div>
              <div className="w-[30px] h-[3px] bg-slate-900  mt-[5px] rounded-md"></div>
              <div className="w-[30px] h-[3px] bg-slate-700 mt-[5px] rounded-md"></div>
            </div>
          )}
          {!show && <div className="text-4xl text-[red] text-center">x</div>}
        </div>

      </div>
      {/* <div className="w-[50vw] fixed h-[vh] top-0 bottom-0 left- bg-black">
        j
      </div> */}
      <button onClick={()=>{i18n.changeLanguage('ar')}}>ar</button>
      <button onClick={()=>{i18n.changeLanguage('en')}}>en</button>
      <button onClick={()=>{i18n.changeLanguage('fr')}}>fr</button>
    </div>
    </div>
  );
}

export default Header;
