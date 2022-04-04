import React, { Fragment } from "react";
import { listItemNav } from "./ListItemNav";

const NavPage = (props) => {
  const { isTranslate, setIsTranslate } = props;
  const handleDisplayChildren = (e) => {
    const parent = e.target.closest(".item");
    if (parent.querySelector(".item-children").classList.contains("active")) {
      parent.querySelector(".item-children").classList.remove("active");
      parent.querySelector(".icon-up-down").classList.add("fa-angle-down");
      parent.querySelector(".icon-up-down").classList.remove("fa-angle-up");
    } else {
      parent.querySelector(".item-children").classList.add("active");
      parent.querySelector(".icon-up-down").classList.add("fa-angle-up");
      parent.querySelector(".icon-up-down").classList.remove("fa-angle-down");
    }
  };

  console.log(">>>itemNav: ", listItemNav);
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
          {listItemNav.length > 0 &&
            listItemNav.map((item, index) => (
              <Fragment key={index}>
                <li className="item" onClick={(e) => handleDisplayChildren(e)}>
                  <div className="item-icon flex hover:bg-blue-500 p-3 cursor-pointer">
                    <div className="icon-nav">
                      <i
                        className={`fa-solid ${item.iconNav} text-center text-blue-600`}
                      ></i>
                    </div>
                    <div className="flex flex-1 justify-between">
                      <div>{item.title}</div>
                      {item.itemChildren.length > 0 && (
                        <div>
                          <i className="icon-up-down fa-solid fa-angle-down"></i>
                        </div>
                      )}
                    </div>
                  </div>
                  {item.itemChildren.length > 0 && (
                    <ul className="item-children ">
                      {item.itemChildren.map((itemChi, indexChi) => (
                        <li
                          key={indexChi}
                          className="flex hover:bg-blue-500 cursor-pointer "
                        >
                          <span className="py-[4px] pl-[40px]">{itemChi}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              </Fragment>
            ))}
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

        {listItemNav.length > 0 &&
          listItemNav.map((item, index) => (
            <Fragment key={index}>
              <ul className="list-item list-item-min">
                <li className="item item-min relative">
                  <div className="item-icon flex justify-center hover:bg-blue-500 p-3 cursor-pointer">
                    <div className="icon-nav text-center">
                      <i
                        className={`fa-solid ${item.iconNav} text-center text-blue-600`}
                      ></i>
                    </div>
                  </div>

                  {item.itemChildren.length > 0 && (
                    <ul className="item-children-min absolute hidden bg-[#F2F3F5] rounded-[3px] border shadow-md top-[-20%] right-[-355%] w-40  z-1 text-[#1F334D]">
                      {item.itemChildren.map((itemChi, indexChi) => (
                        <Fragment key={indexChi}>
                          <li className="hover:bg-[#E1ECFA] cursor-pointer py-[6px] pl-[10px] rounded-tr-[3px] rounded-tl-[3px]">
                            <span className="">{itemChi}</span>
                          </li>
                        </Fragment>
                      ))}
                    </ul>
                  )}
                </li>
              </ul>
            </Fragment>
          ))}
      </div>
    </Fragment>
  );
};

export default NavPage;
