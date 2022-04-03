import {} from "formik";
import { useEffect, useState } from "react";
import { api } from "../api/api";

const TableList = ({ user, loading, setUser, setLoading, totalItem }) => {
  const [page, setPage] = useState(1);

  const handlePage = async (page) => {
    const res = await api
      .get(`?_page=${page}&_limit=3`)
      .catch((error) => console.log("Lỗi api: ", error));

    setUser(res.data);
    setLoading(false);
  };

  useEffect(() => {
    handlePage(page);
  }, [page]);

  console.log(">>check page: ", page);

  return (
    <div>
      <div className="flex mb-4">
        <span className="flex flex-col justify-center text-[14px]">
          全件中  {page > 0 ? page : 0} ~ {totalItem} 件表示
        </span>
        <button
          className="flex flex-col justify-center mx-2 cursor-pointer text-gray-400"
          onClick={() => setPage(page - 1)}
          disabled={page === 1 ? true : false}
        >
          <i className="fa-solid fa-angle-left"></i>
        </button>
        <span className="flex flex-col justify-center mx-2">{page}</span>
        <button
          className="flex flex-col justify-center mx-2 cursor-pointer text-gray-400"
          onClick={() => setPage(page + 1)}
          disabled={page === Math.floor(totalItem / 3 + 1) ? true : false}
        >
          <i className="fa-solid fa-angle-right"></i>
        </button>
        <div className="flex">
          <p className="mr-2 leading-8 text-xs text-[14px]">表示件数</p>
          <select
            id=""
            className="focus:outline-none w-[80px] border border-gray-400 rounded-[3px] pl-1"
          >
            <option value="3">3件</option>
            <option value="5">5件</option>
            <option value="7">7件</option>
          </select>
        </div>
      </div>

      <table id="table-list" className="flex-1 overflow-auto">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
            <th>Price(VNĐ)</th>
            <th>Title</th>
            <th>Rating</th>
            <th>Cate</th>
            <th>Date</th>
          </tr>
        </thead>

        <tbody>
          {/* {loading && <div>Loading ....</div>} */}
          {!loading &&
            user &&
            user.length > 0 &&
            user.map((item, index) => (
              <tr key={index} style={{ textAlign: "center" }}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.description}</td>
                <td>{item.price}</td>
                <td>{item.title}</td>
                <td>{item.category}</td>
                <td>{item.rating.rate}</td>
                <td>{item.date}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableList;
