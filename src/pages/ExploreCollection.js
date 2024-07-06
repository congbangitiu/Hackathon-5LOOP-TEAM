import { useEffect, useRef, useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { Link } from "react-router-dom";
import "./ExploreTwo.css";

import Breadcrumb from "../components/Breadcrumb";
import Divider from "../components/Divider";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import CollectionData from "../data/collection.json";

import $ from "jquery";

window.jQuery = window.$ = $;
require("jquery-nice-select");

const ExploreCollection = () => {
  const selectCategories = useRef();
  const selectItems = useRef();
  const selectSortedBy = useRef();
  const selectLevels = useRef();
  const selectSubjects = useRef();
  const selectToken = useRef();

  const [filteredDocument, setFilteredDocument] = useState(CollectionData);

  useEffect(() => {
    fetch(
      `https://api.shyft.to/sol/v1/collections/get_nfts?network=devnet&collection_address=${filteredDocument.id}&size=9`,
      {
        method: "GET",
        headers: {
          "x-api-key": process.env.REACT_APP_API_KEY,
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setFilteredDocument(data[0].result);
      })
      .catch((error) => console.log(error));
  }, []);

  const [count, setCount] = useState(9);
  const [noMorePost, setNoMorePost] = useState(false);

  const countSlice = filteredDocument.slice(0, count);

  const handleLoadMore = () => {
    setCount(count + 3);
    if (count >= filteredDocument.length) {
      setNoMorePost(true);
    }
  };

  const subjects = [
    "Object-Oriented Programming",
    "Data Structures and Algorithms",
    "Data Science and Data Visualization",
    "Principle of Database Management",
    "Data Mining",
    "Data Analysis",
    "Machine Learning Platforms",
    "Calculus 1",
    "Introduction to Data Science",
    "Digital Logic Design",
    "Mobile Application Development",
    "Computer Network",
    "Computer Architecture",
    "Web Application Development",
  ];

  useEffect(() => {
    $(selectCategories.current).niceSelect();
  }, []);

  useEffect(() => {
    $(selectItems.current).niceSelect();
  }, []);

  useEffect(() => {
    $(selectSortedBy.current).niceSelect();
  }, []);

  useEffect(() => {
    $(selectLevels.current).niceSelect();
  }, []);

  useEffect(() => {
    $(selectSubjects.current).niceSelect();
  }, []);

  useEffect(() => {
    $(selectToken.current).niceSelect();
  }, []);

  const printSelection = () => {
    console.log("Categories: " + selectCategories.current.value);
    console.log("Items: " + selectItems.current.value);
    console.log("Sorted By: " + selectSortedBy.current.value);
    console.log("Levels: " + selectLevels.current.value);
    console.log("Subjects: " + selectSubjects.current.value);
  };

  const DiscoverNFTCards = countSlice.map((elem, index) => (
    <div key={index} className="col-12 col-sm-6 col-md-12 col-lg-6 col-xxl-4">
      <Link to={`${process.env.PUBLIC_URL}/discover-items/${elem.id}`}>
        <div className="nft-card card shadow-sm">
          <div className="card-body">
            <div className="img-wrap">
              {/* Image */}
              <img
                src={`${process.env.PUBLIC_URL}/${elem.image}`}
                alt={elem.title}
              />

              {/* Badge */}
              {elem.badgeInfo && elem.badgeInfo[0] && (
                <div
                  className={`badge bg-${elem.badgeInfo[0].color} position-absolute section-${elem.badgeInfo[0].visibility}`}
                >
                  <img
                    src={`${process.env.PUBLIC_URL}/${elem.badgeInfo[0].icon}`}
                    alt=""
                  />
                  {elem.badgeInfo[0].text}
                </div>
              )}

              {/* Dropdown */}
              {elem.dropdownVisibility && (
                <Dropdown className={`section-${elem.dropdownVisibility}`}>
                  <Dropdown.Toggle
                    className="rounded-pill shadow-sm"
                    id={`discoverID${elem.id}`}
                  >
                    <i className="bi bi-three-dots-vertical" />
                  </Dropdown.Toggle>

                  <Dropdown.Menu align="end">
                    {elem.dropdownInfo &&
                      elem.dropdownInfo.map((item, index) => (
                        <Link
                          key={index}
                          className="dropdown-item"
                          to={item.dropdownItemURL}
                        >
                          <i className={`me-2 bi ${item.dropdownItemIcon}`}></i>
                          {item.dropdownItemText}
                        </Link>
                      ))}
                  </Dropdown.Menu>
                </Dropdown>
              )}
            </div>

            {/* Others Info */}
            <div className="row gx-2 align-items-center mt-3">
              <div className="col-8">
                {elem.topLevelInfo && elem.topLevelInfo[0] && (
                  <span className="d-block fz-12">
                    <i className={`bi ${elem.topLevelInfo[0].icon}`} />
                    {elem.topLevelInfo[0].text}
                  </span>
                )}
              </div>
              <div className="col-4 text-end">
                <button className="wishlist-btn" type="button">
                  <i className="bi" />
                </button>
              </div>
            </div>

            {/* Meta Info */}
            <div className="row gx-2 align-items-center mt-2">
              <div className="col-8">
                <div className="name-info d-flex align-items-center">
                  <div className="author-img position-relative">
                    <img
                      className="shadow"
                      src={`${process.env.PUBLIC_URL}/${elem.authorAvater}`}
                      alt={elem.authorName}
                    />
                    {elem.authorVerified && (
                      <i
                        className={`bi bi-check position-absolute bg-success`}
                      />
                    )}
                  </div>

                  <div className="name-author">
                    <OverlayTrigger
                      placement="top"
                      delay={{ show: 250, hide: 400 }}
                      overlay={
                        <Tooltip id={`discoverNFT${elem.id}`}>
                          {elem.title}
                        </Tooltip>
                      }
                    >
                      <span className="name d-block hover-primary text-truncate">
                        {elem.title}
                      </span>
                    </OverlayTrigger>

                    <Link
                      className="author d-block fz-12 hover-primary text-truncate"
                      to={`${process.env.PUBLIC_URL}/author/${elem.authorName}`}
                    >
                      @{elem.authorName}
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-4">
                <div className="price text-end">
                  <span className="fz-12 d-block">{elem.priceText}</span>
                  <h6 className="mb-0">{elem.currentPrice}</h6>
                </div>
              </div>
            </div>

            {/* Button */}
            <div className="row gx-2 align-items-center mt-3">
              <div className="col-6">
                {elem.buttonGroup && elem.buttonGroup[0] && (
                  <Link
                    className={`btn btn-${elem.buttonGroup[0].leftButtonStyle} rounded-pill btn-sm`}
                    to={elem.buttonGroup[0].leftButtonURL}
                  >
                    <i
                      className={`bi ${elem.buttonGroup[0].leftButtonIcon}`}
                    ></i>
                    {elem.buttonGroup[0].leftButtonText}
                  </Link>
                )}
              </div>
              <div className="col-6 text-end">
                {elem.buttonGroup && elem.buttonGroup[1] && (
                  <Link
                    className={`btn btn-${elem.buttonGroup[1].rightButtonStyle} btn-sm hover-primary`}
                    to={elem.buttonGroup[1].rightButtonURL}
                  >
                    <i
                      className={`bi ${elem.buttonGroup[1].rightButtonIcon} me-1`}
                    ></i>
                    {elem.buttonGroup[1].rightButtonText}
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  ));

  return (
    <>
      <Header
        originalDocument={CollectionData}
        filteredDocument={filteredDocument}
        setFilteredDocument={setFilteredDocument}
      />

      <Breadcrumb
        breadcrumbTitle="Explore all NFT pass"
        breadcrumbNav={[
          {
            navText: "Home",
            path: "/",
          },
        ]}
      />

      <Divider />

      <div className="explore-items-2-wrapper">
        <div className="container-fluid">
          <div className="row g-4 g-xl-5 justify-content-center">
            <div className="col-12 col-sm-9 col-md-5 col-lg-4 col-xxl-3">
              <h5>Categories</h5>
              <select
                ref={selectCategories}
                className="filter-select bg-gray w-100 mb-4"
              >
                <option value="Slides">Slides</option>
                <option value="Exam Papers">Exam Papers</option>
                <option value="Exercises">Exercises</option>
                <option value="Books">Books</option>
                <option value="Summary Records">Summary Records</option>
              </select>

              <h5>Items</h5>
              <select
                ref={selectItems}
                className="filter-select bg-gray w-100 mb-4"
              >
                <option value="Single">Single</option>
                <option value="Multiple">Multiple</option>
              </select>

              <h5>Sort By</h5>
              <select
                ref={selectSortedBy}
                className="filter-select bg-gray w-100 mb-4"
              >
                <option value="desc">Newest to Oldest</option>
                <option value="asc">Oldest to Newest</option>
              </select>

              <h5>Levels</h5>
              <select
                ref={selectLevels}
                className="filter-select bg-gray w-100 mb-4"
              >
                <option value="Simple">Simple</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Hard">Hard</option>
              </select>

              <h5>Subjects</h5>
              <select
                ref={selectSubjects}
                className="filter-select bg-gray w-100 mb-4"
                style={{ maxHeight: "10rem", overflowY: "auto" }}
              >
                {subjects.sort().map((subject, index) => (
                  <option key={index} value={subject}>
                    {subject}
                  </option>
                ))}
              </select>

              <button
                className="btn btn-primary rounded-pill w-100"
                type="submit"
                onClick={printSelection}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "10px",
                }}
              >
                Filter
                <i className="ms-1 bi bi-arrow-right" />
              </button>
            </div>

            <div className="col-12 col-md-7 col-lg-8 col-xxl-9">
              <div className="row g-4 justify-content-center">
                {DiscoverNFTCards}
              </div>

              <div className="text-center mt-70">
                <button
                  className="btn btn-primary px-4 rounded-pill"
                  onClick={() => handleLoadMore()}
                  disabled={noMorePost ? "disabled" : null}
                >
                  {noMorePost ? (
                    <span className="d-flex align-items-center">
                      No Items Here
                      <i className="ms-2 bi bi-emoji-frown" />
                    </span>
                  ) : (
                    <span className="d-flex align-items-center">
                      View More Items
                      <i className="ms-2 bi bi-arrow-repeat" />
                    </span>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Divider />

      <Footer />
    </>
  );
};

export default ExploreCollection;
