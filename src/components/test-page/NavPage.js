import React from "react";

const NavPage = () => {
  const handleDisplayChildren = (e) => {
    const parent = e.target.closest(".item");
    if (parent.querySelector(".item-children").classList.contains("active")) {
      parent.querySelector(".item-children").classList.remove("active");
    } else {
      parent.querySelector(".item-children").classList.add("active");
    }
  };

  const handleNav = (e) => {
    const nav = e.target.closest(".nav-list");

    console.log(e.target.classList.contains("fa-circle-left"));
    if (e.target.classList.contains("fa-circle-left")) {
      nav.style.transform = "translateX(-200px)";
      document.querySelector(".body-page").style.marginLeft = "40px";
      e.target.classList.add("fa-circle-right");
      e.target.classList.remove("fa-circle-left");
    } else {
      nav.style.transform = "translateX(0)";
      document.querySelector(".body-page").style.marginLeft = "240px";
      e.target.classList.remove("fa-circle-right");
      e.target.classList.add("fa-circle-left");
    }
  };
  return (
    <div className="nav-list w-[240px] bg-[#1f334d] fixed top-0 bottom-0 left-0 text-white">
      <div className="flex h-[50px] border-b-slate-600 border-l-0 border-t-0 border-r-0 border">
        <div className="flex-1 m-auto text-center ml-4">
          <img src="/logo.png" alt="logo" className="w-[153px] h-[25px] " />
        </div>
        <button className="px-1" onClick={(e) => handleNav(e)}>
          <i class="fa-solid fa-circle-left text-2xl"></i>
        </button>
      </div>

      <ul className="list-item">
        <li className="item" onClick={(e) => handleDisplayChildren(e)}>
          <div className="item-icon flex hover:bg-blue-500 p-3 cursor-pointer">
            <div className="icon-nav">
              <i className="fa-solid fa-house text-center text-blue-600 "></i>
            </div>
            <div className="text-nav flex flex-1 justify-between">
              <div>ホーム</div>
              <div>
                <i className="fa-solid fa-angle-down"></i>
              </div>
            </div>
          </div>

          <ul className="item-children ">
            <li className="flex hover:bg-blue-500 cursor-pointer ">
              <span className="py-[4px] pl-[40px]">受付文書一覧</span>
            </li>
            <li className="flex hover:bg-blue-500 cursor-pointer ">
              <span className="py-[4px] pl-[40px]">書一覧</span>
            </li>
            <li className="flex hover:bg-blue-500 cursor-pointer ">
              <span className="py-[4px] pl-[40px]">付文書一覧</span>
            </li>
          </ul>
        </li>

        <li className="item" onClick={(e) => handleDisplayChildren(e)}>
          <div className="item-icon flex hover:bg-blue-500 p-3 cursor-pointer">
            <div className="icon-nav">
              <i className="fa-solid fa-house text-center text-blue-600 "></i>
            </div>
            <div className="flex flex-1 justify-between">
              <div>ホーム</div>
              <div>
                <i className="fa-solid fa-angle-down"></i>
              </div>
            </div>
          </div>

          <ul className="item-children ">
            <li className="flex hover:bg-blue-500 cursor-pointer ">
              <span className="py-[4px] pl-[40px]">受付文書一覧</span>
            </li>
            <li className="flex hover:bg-blue-500 cursor-pointer ">
              <span className="py-[4px] pl-[40px]">書一覧</span>
            </li>
            <li className="flex hover:bg-blue-500 cursor-pointer ">
              <span className="py-[4px] pl-[40px]">付文書一覧</span>
            </li>
          </ul>
        </li>

        <li className="item" onClick={(e) => handleDisplayChildren(e)}>
          <div className="item-icon flex hover:bg-blue-500 p-3 cursor-pointer">
            <div className="icon-nav">
              <i className="fa-solid fa-house text-center text-blue-600 "></i>
            </div>
            <div className="flex flex-1 justify-between">
              <div>ホーム</div>
              <div>
                <i className="fa-solid fa-angle-down"></i>
              </div>
            </div>
          </div>

          <ul className="item-children ">
            <li className="flex hover:bg-blue-500 cursor-pointer ">
              <span className="py-[4px] pl-[40px]">受付文書一覧</span>
            </li>
            <li className="flex hover:bg-blue-500 cursor-pointer ">
              <span className="py-[4px] pl-[40px]">書一覧</span>
            </li>
            <li className="flex hover:bg-blue-500 cursor-pointer ">
              <span className="py-[4px] pl-[40px]">付文書一覧</span>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default NavPage;
