import {} from "formik";
import { useEffect } from "react";

const TableList = ({
  user,
  loading,
  setUser,
  totalItem,
  page,
  setPage,
  listSearch,
  limit,
  setLimit,
}) => {
  const handle = async (page, limit) => {
    const arrNew = await listSearch.slice(limit * page - limit, limit * page);
    setUser(arrNew);
  };

  useEffect(() => {
    handle(page, limit);
  }, [page, limit]);

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
          <div
            className={`fa-solid fa-angle-left ${
              page === 1 ? "" : "text-black"
            }`}
          ></div>
        </button>
        <span className="flex flex-col justify-center mx-2">{page}</span>
        <button
          className="flex flex-col justify-center mx-2 cursor-pointer text-gray-400"
          onClick={() => setPage(page + 1)}
          disabled={
            page === totalItem / limit ||
            page === Math.floor(totalItem / limit + 1)
              ? true
              : false
          }
        >
          <i
            className={`fa-solid fa-angle-right ${
              page === totalItem / limit ||
              page === Math.floor(totalItem / limit + 1)
                ? ""
                : "text-black"
            }`}
          ></i>
        </button>
        <div className="flex">
          <p className="mr-2 leading-8 text-xs text-[14px]">表示件数</p>
          <select
            id=""
            className="focus:outline-none w-[80px] border border-gray-400 rounded-[3px] pl-1"
            onChange={(e) => setLimit(e.target.value)}
          >
            <option value="3">3件</option>
            <option value="5">5件</option>
            <option value="7">7件</option>
          </select>
        </div>
      </div>

      <table id="table-list" className="flex-1 overflow-auto bg-white rounded">
        <thead>
          <tr>
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
          <>
            {user.length === 0 && (
              <tr>
                <td colSpan="7" className="no-data m-auto text-center">
                  No data
                </td>
              </tr>
            )}
            {!loading &&
              user &&
              user.length > 0 &&
              user.map((item, index) => (
                <tr key={index} style={{ textAlign: "center" }}>
                  <td>{item.name}</td>
                  <td>{item.description}</td>
                  <td>{item.price}</td>
                  <td>{item.title}</td>
                  <td>{item.category}</td>
                  <td>{item.rating.rate}</td>
                  <td>{item.date}</td>
                </tr>
              ))}
          </>
        </tbody>
      </table>
    </div>
  );
};

export default TableList;
