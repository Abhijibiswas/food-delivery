function Search(){
    return <>
         <section className="row">
        <section className="col-12 bg-danger px-0 px-lg-3">
          <header className="container d-flex justify-content-between py-3">
            <p className="m-0 brand bg-white fw-bold fs-3 text-danger">e!</p>
            <div>
              <button className="btn text-white">Login</button>
              <button className="btn btn-outline-light">Create an account</button>
            </div>
          </header>
        </section>
      </section>
      <section className="row bg-light">
        <section className="col-11 col-lg-10 m-auto">
          <h3 className="fw-bold header-text-color mt-2 d-none d-lg-block">
            Breakfast Places in Mumbai
          </h3>

          <h5 className="fw-bold header-text-color mt-2 d-lg-none">
            Breakfast Places in Mumbai
          </h5>
          <section className="row gap-lg-4">
            {/* <!-- collapse filter ui for mobile--> */}
            <section
              className="col-12 col-lg-3 my-shadow p-2 bg-white mb-2 d-flex justify-content-between d-lg-none"
            >
              <p className="m-0 fw-bold">Filter/Sort</p>
              <button
                data-bs-toggle="collapse"
                data-bs-target="#collapseFilter"
              >
                Show/Hide
              </button>
            </section>
            {/* <!-- filter --> */}
            <section
              className="col-12 col-lg-3 my-shadow p-3 pt-2 bg-white collapse d-lg-block"
              id="collapseFilter"
            >
              <p className="m-0 fw-bold">Filter</p>
              <div className="my-2">
                <label htmlFor="" className="form-label text-primary fw-bold"
                  >Select Location</label
                >
                <select name="" id="" className="form-select text-muted">
                  <option value="">location</option>
                </select>
              </div>
              <div className="my-2 mt-3">
                <label htmlFor="" className="form-label text-primary fw-bold"
                  >Cuisine</label
                >
                <div className="form-check">
                  <input type="checkbox" className="form-check-input" />
                  <label htmlFor="" className="form-check-label text-muted"
                    >North Indian</label
                  >
                </div>
                <div className="form-check">
                  <input type="checkbox" className="form-check-input" checked />
                  <label htmlFor="" className="form-check-label text-muted"
                    >South Indian</label
                  >
                </div>
                <div className="form-check">
                  <input type="checkbox" className="form-check-input" checked />
                  <label htmlFor="" className="form-check-label text-muted"
                    >Chinese</label
                  >
                </div>
                <div className="form-check">
                  <input type="checkbox" className="form-check-input" />
                  <label htmlFor="" className="form-check-label text-muted"
                    >Fast Food</label
                  >
                </div>
                <div className="form-check">
                  <input type="checkbox" className="form-check-input" />
                  <label htmlFor="" className="form-check-label text-muted"
                    >Street Food</label
                  >
                </div>
              </div>

              <div className="my-2 mt-3">
                <label htmlFor="" className="form-label text-primary fw-bold"
                  >Cost For Two</label
                >
                <div className="form-check">
                  <input type="radio" className="form-check-input" />
                  <label htmlFor="" className="form-check-label text-muted"
                    >Less than ` 500</label
                  >
                </div>
                <div className="form-check">
                  <input type="radio" className="form-check-input" />
                  <label htmlFor="" className="form-check-label text-muted"
                    >` 500 to ` 1000</label
                  >
                </div>
                <div className="form-check">
                  <input type="radio" className="form-check-input" />
                  <label htmlFor="" className="form-check-label text-muted"
                    >` 1000 to ` 1500</label
                  >
                </div>
                <div className="form-check">
                  <input type="radio" className="form-check-input" />
                  <label htmlFor="" className="form-check-label text-muted"
                    >` 1500 to ` 2000</label
                  >
                </div>
                <div className="form-check">
                  <input type="radio" className="form-check-input" />
                  <label htmlFor="" className="form-check-label text-muted"
                    >` 2000+</label
                  >
                </div>
              </div>

              <div className="my-2 mt-3">
                <label htmlFor="" className="form-label text-primary fw-bold"
                  >Sort</label
                >
                <div className="form-check">
                  <input type="radio" className="form-check-input" />
                  <label htmlFor="" className="form-check-label text-muted"
                    >Price low to high</label
                  >
                </div>
                <div className="form-check">
                  <input type="radio" className="form-check-input" />
                  <label htmlFor="" className="form-check-label text-muted"
                    >Price high to low</label
                  >
                </div>
              </div>
            </section>

            {/* <!-- restaurant --> */}
            <section className="col-12 col-lg-8 mt-3 mt-lg-0 px-0 px-lg-3">
              {/* <!--  w-100 = width:100% --> */}
              {/* <!-- 1st restaurant --> */}
              <section className="my-shadow bg-white p-4 mb-3">
                <section className="d-flex gap-3 align-items-center">
                  <img
                    src="./images/img2.png"
                    alt=""
                    className="restaurant-image"
                  />
                  <div>
                    <p className="mb-2 h4 fw-bold header-text-color">
                      The Big Chill Cakery
                    </p>
                    <p className="mb-1 fw-bold">FORT</p>
                    <p className="text-muted mb-0">
                      Shop 1, Plot D, Samruddhi Complex, Chincholi …
                    </p>
                  </div>
                </section>
                <hr />
                {/* <!-- horizontal line --> */}
                <section className="row">
                  <section className="col-lg-3 col-6">
                    <p className="mb-1">CUISINES:</p>
                    <p className="m-0">COST FOR TWO:</p>
                  </section>
                  <section className="col-lg-3 col-6">
                    <p className="mb-1">Bakery</p>
                    <p className="m-0">₹700</p>
                  </section>
                </section>
              </section>

              {/* <!-- 2nd restaurant --> */}
              <section className="my-shadow bg-white p-4 mb-3">
                <section className="d-flex gap-3 align-items-center">
                  <img
                    src="./images/img1.png"
                    alt=""
                    className="restaurant-image"
                  />
                  <div>
                    <p className="mb-2 h4 fw-bold header-text-color">
                      The Big Chill Cakery
                    </p>
                    <p className="mb-1 fw-bold">FORT</p>
                    <p className="text-muted mb-0">
                      Shop 1, Plot D, Samruddhi Complex, Chincholi …
                    </p>
                  </div>
                </section>
                <hr />
                {/* <!-- horizontal line --> */}
                <section className="row">
                  <section className="col-lg-3 col-6">
                    <p className="mb-1">CUISINES:</p>
                    <p className="m-0">COST FOR TWO:</p>
                  </section>
                  <section className="col-lg-3 col-6">
                    <p className="mb-1">Bakery</p>
                    <p className="m-0">₹700</p>
                  </section>
                </section>
              </section>

              {/* <!--  pagination --> */}
              {/* <!-- <input type="checkbox" className="change-color" /> --> */}
              <section className="d-flex justify-content-center">
                <ul className="my-pagination">
                  <li className="my-page-items">&lt;</li>
                  <li className="my-page-items active">1</li>
                  <li className="my-page-items">2</li>
                  <li className="my-page-items">3</li>
                  <li className="my-page-items">4</li>
                  <li className="my-page-items">&gt;</li>
                </ul>
              </section>
            </section>
          </section>
        </section>
      </section>
    </>
}

export default Search;