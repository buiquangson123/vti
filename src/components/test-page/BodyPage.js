import React from "react";
import FormPage from "./FormPage";

const BodyPage = () => {
  return (
    <div className="body-page ml-[240px] flex-1">
      <div className="m-[20px]">
        <div className="header-page">
          <div className="header-url flex">
            <li>
              <a href="/" className="text-blue-400 hover:text-blue-600">
                ホーム
              </a>
            </li>
            <li className="text-[#676D75]">
              <i className="fa-solid fa-angle-right"></i>
              <span className="ml-[2px]">受付</span>
            </li>
            <li className="text-[#676D75]">
              <i className="fa-solid fa-angle-right"></i>
              <span className="ml-[2px]">受付簿</span>
            </li>
          </div>
          <div className="header-title flex justify-between">
            <div className="text-2xl text-black">受付簿</div>
            <div className="flex text-base">
              <div className="leading-[32px]">部署切替: 沖縄総合通信事務所</div>
              <div>
                <a
                  href="/"
                  className="text-blue-400 hover:text-blue-600 ml-2 leading-[32px]"
                >
                  部署選択
                </a>
              </div>
            </div>
          </div>
        </div>
        <FormPage></FormPage>
      </div>
    </div>
  );
};

export default BodyPage;
