/** @format */

import React, { useEffect, useState } from "react";
import Pagination from "../../components/pagination/Pagination";
import Product from "../../components/product/Product";
import "./index.scss";

export default function Products({ filterdProducts, theme }) {
  const [page, setPage] = useState(1);
  const [itemsNumberInPage, setItemsNumberInPage] = useState(9);

  useEffect(() => {
    setPage(1);
  }, [filterdProducts]);
  return (
    <>
      <div className={`product-page menu-mode`}>
        {filterdProducts.map((pro, i) =>
          i >= (page - 1) * itemsNumberInPage &&
          i < page * itemsNumberInPage ? (
            <Product key={pro.id} product={pro} theme={theme} />
          ) : (
            ""
          )
        )}
      </div>
      <Pagination
        itemsList={filterdProducts}
        itemsNumberInPage={itemsNumberInPage}
        page={page}
        setPage={setPage}
        theme={theme}
      />
    </>
  );
}
