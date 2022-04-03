import React, { useEffect, useState } from "react";
import { api } from "../api/api";
import TableList from "./TableList";
import { useFormik } from "formik";

import CalenderPick from "./CalenderPick";
import Overlay from "./Overlay";

// ?date_gte=2022-03-01&date_lte=2022-03-30

const FormPage = () => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);

  const [show, setShow] = useState(false);

  const [totalItem, setTotalItem] = useState();

  const getUsers = async () => {
    const resFull = await api.get("/").catch((error) => console.log(error));
    const res = await api
      .get("?_page=1&_limit=3")
      .catch((error) => console.log(error));

    setUser(res.data);
    setLoading(false);
    setTotalItem(resFull.data.length);
  };

  useEffect(() => {
    getUsers();
  }, []);

  const formik = useFormik({
    initialValues: {
      name: "",
      category: "",
    },
    onSubmit: async (values) => {
      setLoading(true);
      if (values.name === "" && values.category === "All") {
        const res = await api.get("/").catch((error) => console.log(error));
        setUser(res.data);
        setLoading(false);
      } else {
        const response = await api
          .get(`/?name_like=${values.name}&category=${values.category}`)
          .catch((error) => console.log("Lỗi get api: ", error));

        console.log(response.data);

        setUser(response.data);
        setLoading(false);
      }
    },
  });

  return (
    <>
      <div className="w-[100%]">
        <CalenderPick></CalenderPick>
        <div className="form my-4 flex justify-between">
          <div className="bg-[#F2F3F5] rounded p-4 flex-1">
            <form onSubmit={formik.handleSubmit}>
              <div className="flex justify-between ">
                <div className="border-r border-[#1F334D] flex-1">
                  <div className="flex">
                    <div className="flex">
                      <p className="mr-2 leading-8 text-xs">受付日</p>
                      <input
                        type="text"
                        className="rounded-[3px] border border-gray-400 mr-6 focus:border-blue-400 focus:outline-none pl-[8px] py-1"
                      />
                    </div>
                    <div className="flex">
                      <p className="mr-2 leading-8 text-xs">状態</p>
                      <select
                        id=""
                        className="focus:outline-none w-[260px] border border-gray-400 rounded-[3px] pl-2"
                        {...formik.getFieldProps("category")}
                      >
                        <option value="All">Tất cả</option>
                        <option value="Thời trang nam">Thời trang nam</option>
                        <option value="Đồng hồ">Đồng hồ</option>
                        <option value="Thời trang và du lịch">
                          Thời trang và du lịch
                        </option>
                        <option value="Sắc đẹp">Sắc đẹp</option>
                      </select>
                    </div>
                  </div>
                  <div className="flex my-4 justify-start">
                    <p className="mr-2 leading-8 text-xs">キーワード</p>
                    <input
                      type="text"
                      className="flex-1 rounded-[3px] border border-gray-400 mr-6 focus:border-blue-400 focus:outline-none pl-[8px] py-1"
                      {...formik.getFieldProps("name")}
                      autoComplete="off"
                    />
                  </div>
                  <div className="text-xs">
                    ※文字数は最大100文字、ワードは10個までスペース区切りで入力可能
                  </div>
                </div>
                <button
                  className="w-[80px] bg-[#1F334D] rounded h-[30px] ml-4 text-white m-auto cursor-pointer hover:bg-[#7fafee]"
                  type="submit"
                >
                  <i className="fa-solid fa-magnifying-glass"></i>
                  <span className="ml-[2px]">検索</span>
                </button>
              </div>
            </form>
          </div>

          <div className="ml-3" onClick={() => setShow(true)}>
            <div className="border border-blue-600 w-[50px] h-[50px] rounded cursor-pointer hover:bg-[#0D66D0] hover:text-white">
              <i className="fa-solid fa-arrow-down text-3xl text-center block leading-[50px] text-[#0D66D0] hover:text-white"></i>
            </div>
          </div>
        </div>

        <Overlay show={show} setShow={setShow}></Overlay>

        <TableList
          user={user}
          loading={loading}
          setUser={setUser}
          setLoading={setLoading}
          totalItem={totalItem}
        ></TableList>
      </div>
    </>
  );
};

export default FormPage;
