import React from "react";
import Weather from "./Weather";
import Calender from "./Calender";
import "./News.css";
import userImage from "../assets/images/user.jpg";

const News = () => {
  return (
    <div className="news">
      <header className="news-header">
        <h1 className="logo">News & Blogs</h1>
        <div className="search-bar">
          <form>
            <input type="text" placeholder="Search News..." />

            <button type="submit">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </form>
        </div>
      </header>
      <div className="news-content">
        {/* Nav */}
        <div className="navbar">
          {/* User */}
          <div className="user">
            <img src={userImage} alt="User Image" />
            <p>Mary's Blog</p>
          </div>
          {/* Categories */}
          <div className="categories">
            <hi className="nav-heading">Categories</hi>
            <div className="nav-links">
              <a href="#" className="nav-link">
                General
              </a>
              <a href="#" className="nav-link">
                World
              </a>
              <a href="#" className="nav-link">
                Business
              </a>
              <a href="#" className="nav-link">
                Technology
              </a>
              <a href="#" className="nav-link">
                Entertainment
              </a>
              <a href="#" className="nav-link">
                Sports
              </a>
              <a href="#" className="nav-link">
                Science
              </a>
              <a href="#" className="nav-link">
                Health
              </a>
              <a href="#" className="nav-link">
                Nation
              </a>
              <a href="#" className="nav-link">
                Bookmark <i className="fa-regular fa-bookmark"></i>
              </a>
            </div>
          </div>
        </div>

        {/* News Section || includes the headlings and also news grid*/}
        <div className="news-section">
          <div className="headline">Headline</div>
          <div className="news-grid">News Grid</div>
        </div>

        {/* Blogs Section */}
        <div className="my-blogs">My Blogs</div>
        <div className="weather-calender">
          <Weather />
          <Calender />
        </div>
      </div>

      {/* Footer */}
      <footer className="news-footer">Footer</footer>
    </div>
  );
};

export default News;
