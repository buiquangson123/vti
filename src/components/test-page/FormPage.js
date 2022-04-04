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

  const [page, setPage] = useState(1);

  const [listSearch, setListSearch] = useState([]);

  const [limit, setLimit] = useState(3);

  const [isSub, setIsSub] = useState(false);

  const getName = async (page) => {
    const res = await api.get(`/`).catch((error) => console.log(error));
    const res1 = await api
      .get(`/?_limit=${limit}`)
      .catch((error) => console.log(error));

    setUser(res1.data);
    setLoading(false);
    setTotalItem(res.data.length);
    setListSearch(res.data);
  };

  useEffect(() => {
    getName();
  }, []);

  const formik = useFormik({
    initialValues: {
      category: "All",
      name: "",
    },
    onSubmit: async (values) => {
      setLoading(true);
      console.log(">>>check all: ", values);
      if (values.name === "" && values.category === "All") {
        const res = await getCategoryAll();
        const res1 = await api
          .get(`/?_limit=${limit}`)
          .catch((error) => console.log(error));
        setUser(res1.data);
        setLoading(false);
        setTotalItem(res.data.length);
        setListSearch(res.data);
      } else if (values.name !== "" && values.category === "All") {
        const res = await getNameAll(values.name);
        const res1 = await api
          .get(`/?name_like=${values.name}&_limit=${limit}`)
          .catch((error) => console.log(error));
        setUser(res1.data);
        setLoading(false);
        setTotalItem(res.data.length);
        setListSearch(res.data);
      } else {
        const response = await getNameCategory(values.name, values.category);
        const res1 = await api
          .get(
            `/?name_like=${values.name}&category=${values.category}&_limit=${limit}`
          )
          .catch((error) => console.log("Lỗi get api: ", error));

        setUser(res1.data);
        setLoading(false);
        setTotalItem(response.data.length);
        setListSearch(response.data);
      }
      setIsSub(!isSub);
    },
  });

  const getCategoryAll = async () => {
    return await api.get(`/`).catch((error) => console.log(error));
  };

  const getNameAll = async (nameItem) => {
    return await api
      .get(`/?name_like=${nameItem}`)
      .catch((error) => console.log(error));
  };

  const getNameCategory = async (nameItem, cate) => {
    return await api
      .get(`/?name_like=${nameItem}&category=${cate}`)
      .catch((error) => console.log("Lỗi get api: ", error));
  };

  useEffect(() => {
    setPage(1);
  }, [isSub]);
  return (
    <>
      <div className="w-[100%]">
        <CalenderPick></CalenderPick>
        <div className="form my-4 flex justify-between">
          <form
            onSubmit={formik.handleSubmit}
            className="flex-1 flex bg-white rounded"
          >
            <div className="flex-1 p-4">
              <div className="flex justify-between">
                <div className="flex-1">
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
              </div>
            </div>
            <div className="h-full border-[#C9CED4] border"></div>
            <div className="p-4 flex justify-center">
              <button
                className="w-[80px] bg-[#1F334D] rounded h-[30px] ml-4 text-white m-auto cursor-pointer hover:bg-[#7fafee]"
                type="submit"
              >
                <i className="fa-solid fa-magnifying-glass"></i>
                <span className="ml-[2px]">検索</span>
              </button>
            </div>
          </form>

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
          page={page}
          setPage={setPage}
          listSearch={listSearch}
          limit={limit}
          setLimit={setLimit}
        ></TableList>
      </div>
    </>
  );
};

export default FormPage;
