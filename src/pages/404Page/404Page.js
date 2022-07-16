import React from "react";
import "./notFoundPage.css";
export default function NotFoundPage() {
  let handleHomePage = () => {
    window.location.href = "/";
  };
  return (
    <section className="page_404">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 ">
            <div className="col-sm-10 col-sm-offset-1  text-center">
              <div className="four_zero_four_bg">
                <h1 className="text-center text-red-600 ">404</h1>
              </div>

              <div className="contant_box_404 ">
                <h2>Look like you're lost</h2>

                <p>The page you are looking for not avaible!</p>

                <button
                  onClick={handleHomePage}
                  href=""
                  className="link_404 rounded"
                >
                  Go to Home
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
