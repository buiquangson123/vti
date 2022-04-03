import React, { Fragment } from "react";

const NavPage = (props) => {
  const { isTranslate, setIsTranslate } = props;
  const handleDisplayChildren = (e) => {
    const parent = e.target.closest(".item");
    if (parent.querySelector(".item-children").classList.contains("active")) {
      parent.querySelector(".item-children").classList.remove("active");
    } else {
      parent.querySelector(".item-children").classList.add("active");
    }
  };

  const iconNav = [
    "fa-solid fa-house",
    "fa-solid fa-thumbtack",
    "fa-solid fa-gear",
    "fa-solid fa-book",
    "fa-solid fa-note",
    "fa-solid fa-filter",
    "fa-solid fa-grid",
  ];

  const itemChildren = [
    {
      cld1: "受付文",
      cld2: "書一覧",
    },
    { cld1: "受付文", cld2: "書一覧", cld3: "付文書一覧" },
    {},
    {
      cld1: "受付文",
      cld2: "書一覧付文",
      cld3: "付文書一覧",
      cld4: "付文書一覧",
    },
    {},
    { cld1: "受付文", cld2: "書付文書一覧", cld3: "付文書一覧" },
    { cld1: "受付文書", cld2: "書一覧", cld3: "付文書一覧" },
  ];
  return (
    <Fragment>
      {/* Nav-max */}
      <div
        className={`nav-list w-[240px] bg-[#1f334d] fixed top-0 bottom-0 left-0 text-white ${
          isTranslate ? "block" : "hidden"
        }`}
      >
        <div className="flex h-[50px] border-b-slate-600 border-l-0 border-t-0 border-r-0 border">
          <div className="flex-1 m-auto text-center ml-4">
            <img src="/logo.png" alt="logo" className="w-[153px] h-[25px] " />
          </div>
          <button className="px-1" onClick={(e) => setIsTranslate(false)}>
            <i className="fa-solid fa-circle-left text-2xl"></i>
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

      {/* Nav-min */}
      <div
        className={`nav-list w-[48px] bg-[#1f334d] fixed top-0 bottom-0 left-0 text-white ${
          !isTranslate ? "block" : "hidden"
        }`}
      >
        <div className="flex justify-center h-[50px] border-b-slate-600 border-l-0 border-t-0 border-r-0 border">
          <button className="px-1" onClick={(e) => setIsTranslate(true)}>
            <i className="fa-solid fa-circle-right text-2xl"></i>
          </button>
        </div>

        <ul className="list-item list-item-min">
          <li className="item item-min relative">
            <div className="item-icon flex justify-center hover:bg-blue-500 p-3 cursor-pointer">
              <div className="icon-nav text-center">
                <i className="fa-solid fa-house text-center text-blue-600 "></i>
              </div>
            </div>

            <ul className="item-children-min absolute hidden bg-[#F2F3F5] rounded-[3px] border shadow-md top-[-20%] right-[-355%] w-40 h-48 z-1 text-[#1F334D]">
              <li className="hover:bg-blue-500 cursor-pointer py-[6px] pl-[10px] rounded-tr-[3px] rounded-tl-[3px]">
                <span className="">受付文書一覧</span>
              </li>
              <li className="hover:bg-blue-500 cursor-pointer py-[6px] pl-[10px] ">
                <span className="">書一覧</span>
              </li>
              <li className="hover:bg-blue-500 cursor-pointer py-[6px] pl-[10px] ">
                <span className="">付文書一覧</span>
              </li>
            </ul>
          </li>
        </ul>

        <ul className="list-item list-item-min">
          <li className="item item-min relative">
            <div className="item-icon flex justify-center hover:bg-blue-500 p-3 cursor-pointer">
              <div className="icon-nav text-center">
                <i className="fa-solid fa-gear text-center text-blue-600"></i>
              </div>
            </div>

            <ul className="item-children-min absolute hidden bg-[#F2F3F5] rounded-[3px] border shadow-md top-[-20%] right-[-355%] w-40 h-48 z-1 text-[#1F334D]">
              <li className="hover:bg-blue-500 cursor-pointer py-[6px] pl-[10px] rounded-tr-[3px] rounded-tl-[3px]">
                <span className="">受付文書一覧</span>
              </li>
              <li className="hover:bg-blue-500 cursor-pointer py-[6px] pl-[10px] ">
                <span className="">書一覧</span>
              </li>
              <li className="hover:bg-blue-500 cursor-pointer py-[6px] pl-[10px] ">
                <span className="">付文書一覧</span>
              </li>
              <li className="hover:bg-blue-500 cursor-pointer py-[6px] pl-[10px] ">
                <span className="">付文書一覧</span>
              </li>
            </ul>
          </li>
        </ul>

        <ul className="list-item list-item-min">
          <li className="item item-min relative">
            <div className="item-icon flex justify-center hover:bg-blue-500 p-3 cursor-pointer">
              <div className="icon-nav text-center">
                <i className="fa-solid fa-thumbtack text-center text-blue-600"></i>
              </div>
            </div>

            <ul className="item-children-min absolute hidden bg-[#F2F3F5] rounded-[3px] border shadow-md top-[-20%] right-[-355%] w-40 h-48 z-1 text-[#1F334D]">
              <li className="hover:bg-blue-500 cursor-pointer py-[6px] pl-[10px] rounded-tr-[3px] rounded-tl-[3px]">
                <span className="">受付文書一覧</span>
              </li>
              <li className="hover:bg-blue-500 cursor-pointer py-[6px] pl-[10px] ">
                <span className="">書一覧</span>
              </li>
              <li className="hover:bg-blue-500 cursor-pointer py-[6px] pl-[10px] ">
                <span className="">付文書一覧</span>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </Fragment>
  );
};

export default NavPage;
