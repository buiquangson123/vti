import React from "react";
import FormPage from "./FormPage";

const BodyPage = (props) => {
  const { isTranslate } = props;
  return (
    <div
      className={`body-page ${
        isTranslate ? "ml-[240px]" : "ml-[40px]"
      } flex-1 bg-[#F2F3F5] h-full`}
    >
      <div
        className={`text-[#AEB5BE] flex justify-between border-b shadow-md pl-5 text-sm pr-5`}
      >
        <div className="flex my-auto">
          <div className="cursor-pointer hover:bg-[#e8e9eb] p-1 rounded-sm">
            <i className="fa-solid fa-bell"></i>
            <span className="ml-2">お知らせ</span>
          </div>
          <div className="ml-2 cursor-pointer hover:bg-[#e8e9eb] p-1 rounded-sm">
            <i className="fa-solid fa-circle-question"></i>
            <span className="ml-2">マニュアル</span>
          </div>
          <div className="ml-2 cursor-pointer hover:bg-[#e8e9eb] p-1 rounded-sm">
            <i className="fa-solid fa-box"></i>
            <span className="ml-2">保存期間表</span>
          </div>
          <div className="ml-2 cursor-pointer hover:bg-[#e8e9eb] p-1 rounded-sm">
            <i className="fa-solid fa-message"></i>
            <span className="ml-2">FAQボット</span>
          </div>
        </div>
        <div className="cursor-pointer">
          <div className="flex justify-center">
            <span>統計局　総務課</span>
          </div>
          <div>
            <i className="fa-solid fa-user"></i>
            <span className="text-[#6e6e6e] ml-1">テスト　１９７２</span>
            <i className="fa-solid fa-angle-down"></i>
          </div>
        </div>
      </div>
      <div className="m-[20px]">
        <div className="header-page text-sm">
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
              <div className="leading-[32px] text-sm">
                部署切替: 沖縄総合通信事務所
              </div>
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
