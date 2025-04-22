import React from "react";

const Banner = () => {
  return (
    <div className="w-4/5 mx-auto my-10 text-white ">
      <div
        className="hero min-h-screen bg-[url(https://i.postimg.cc/BQHyhFsf/banner-img-1.png)] bg-cover bg-center rounded-3xl"
      >
        <div className="hero-overlay rounded-3xl bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>

        <div className="hero-content text-neutral-content text-center">
          <div className="w-full px-10">
            <h1 className="mb-10 text-5xl font-bold">
              It avoids subjective claims or <br /> exaggeration that might raise red <br /> flags legally
            </h1>
            <p className="mb-5">
              Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a <br /> routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
