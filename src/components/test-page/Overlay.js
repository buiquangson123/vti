import React, { useRef } from "react";
import jsPDF from "jspdf";
import "jspdf-autotable";

const Overlay = ({ show, setShow }) => {
  const showRef = useRef(null);

  const handleOutClick = (e) => {
    if (showRef.current && !showRef.current.contains(e.target.current)) {
      setShow(false);
    }
  };

  //dowload
  const handleDowload = () => {
    const doc = new jsPDF();
    doc.autoTable({ html: "#table-list" });
    doc.save("table.pdf");
  };
  return (
    show && (
      <div
        className="overlay-btn bg-opacity-30 bg-slate-400 top-0 left-0 right-0 bottom-0 w-full h-full z-10 fixed block"
        ref={showRef}
        onClick={(e) => handleOutClick(e)}
      >
        <div className="relative w-[500px] m-auto h-[300px] rounded-lg shadow-md bg-white mt-[300px]">
          <div
            className="absolute top-0 right-0 text-[24px] mr-[10px] mt-[4px] cursor-pointer"
            onClick={() => setShow(false)}
          >
            <i className="fa-solid fa-xmark"></i>
          </div>
          <div className="pt-20 flex justify-center">
            <span className="text-black text-[20px] font-semibold">
              CSV出力します。 <br />
              よろしいですか？
            </span>
          </div>
          <div className="mt-[30px] flex justify-around">
            <button
              className="w-[160px] h-[40px] rounded-md shadow-md border hover:bg-slate-200 "
              onClick={() => setShow(false)}
            >
              いいえ
            </button>
            <button
              className="w-[160px] h-[40px] bg-blue-500 rounded-md shadow-md border hover:bg-blue-100"
              onClick={handleDowload}
            >
              はい
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default Overlay;
