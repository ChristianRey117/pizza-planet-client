import React, { useState, useEffect } from "react";
import CommonSection from "../components/UI/common-section/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";
import ProductCard from "../components/UI/product-card/ProductCard";
import ReactPaginate from "react-paginate";
import axios from "axios";
import "../styles/all-foods.css";
import "../styles/pagination.css";
import products from "../assets/fake-data/products";

const baseUrl = "http://localhost:5000/productos";

const AllFoods = () => {
  const [productos, setProductos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [pageNumber, setPageNumber] = useState(0);
  const [orderBy, setOrderBy] = useState(""); // Tipo de orden (nombre o precio)

  useEffect(() => {
    axios.get(baseUrl).then((response) => {
      setProductos(response.data);
      products.setProducts(response.data);
    });
  }, []);

  const sortProducts = (items) => {
    if (orderBy === "ascending") {
      return [...items].sort((a, b) =>
        a.product_name.localeCompare(b.product_name)
      );
    } else if (orderBy === "descending") {
      return [...items].sort((a, b) =>
        b.product_name.localeCompare(a.product_name)
      );
    } else if (orderBy === "high-price") {
      return [...items].sort((a, b) => a.product_price - b.product_price);
    } else if (orderBy === "low-price") {
      return [...items].sort((a, b) => b.product_price - a.product_price);
    } else {
      return items;
    }
  };

  const searchedProduct = productos.filter((item) =>
    item.product_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedProducts = sortProducts(searchedProduct);

  const productPerPage = 8;
  const visitedPage = pageNumber * productPerPage;
  const displayPage = sortedProducts.slice(
    visitedPage,
    visitedPage + productPerPage
  );

  const pageCount = Math.ceil(sortedProducts.length / productPerPage);

  const handleFilterChange = (e) => {
    setOrderBy(e.target.value);
  };

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <Helmet title="Menú">
      <CommonSection title="Menú" />
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="6" xs="12">
              <div className="search__widget d-flex align-items-center justify-content-between">
                <input
                  type="text"
                  placeholder="Estoy buscando ..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <span>
                  <i className="ri-search-line"></i>
                </span>
              </div>
            </Col>
            <Col lg="6" md="6" sm="6" xs="12" className="mb-4">
              <div className="sorting__widget text-end">
                <select
                  className="w-50"
                  value={orderBy}
                  onChange={handleFilterChange}
                >
                  <option value="">Filtro</option>
                  <option value="ascending">Alfabéticamente, A-Z</option>
                  <option value="descending">Alfabéticamente, Z-A</option>
                  <option value="high-price">Precio más bajo</option>
                  <option value="low-price">Precio más alto</option>
                </select>
              </div>
            </Col>

            {displayPage.map((item) => (
              <Col
                lg="3"
                md="4"
                sm="6"
                xs="6"
                key={item.id_product}
                className="mb-4"
              >
                <ProductCard item={item} />
              </Col>
            ))}
            <div>
              <ReactPaginate
                pageCount={pageCount}
                onPageChange={changePage}
                previousLabel="Anterior"
                nextLabel="Siguiente"
                containerClassName="paginationBtns"
              />
            </div>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default AllFoods;
