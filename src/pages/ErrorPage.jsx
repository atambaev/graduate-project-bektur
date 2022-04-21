import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header/Header";
import "./pagesCSS/ErrorPage.scss";

const ErrorPage = () => {
  return (
    <>
      <div className="err-page">
        <Header />
        <div className="err-image container">
          <div className="err-title">
            <h2>Sorry, page was not found</h2>
          </div>
          <div className="err-phrase">
            <Link to="/">
              <p>Click to return to home page</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
