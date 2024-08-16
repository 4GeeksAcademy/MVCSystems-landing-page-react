import React from "react";

const Gridcards = () => {
  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-md-4 g-4 mb-4">
        <div className="col">
          <div className="card h-100">
            <img
              src="https://dummyimage.com/500x325"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title d-flex justify-content-center">
                Card title
              </h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
            <div className="card-footer">
              <button type="button" class="btn btn-primary">
                Find Out More!
              </button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img
              src="https://dummyimage.com/500x325"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title d-flex justify-content-center">
                Card title
              </h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
            <div className="card-footer">
              <button type="button" class="btn btn-primary">
                Find Out More!
              </button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img
              src="https://dummyimage.com/500x325"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title d-flex justify-content-center">
                Card title
              </h5>
              <p className="card-text">
                This card has supporting text below as a natural lead-in to
                additional content.
              </p>
            </div>
            <div className="card-footer">
              <button type="button" class="btn btn-primary">
                Find Out More!
              </button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img
              src="https://dummyimage.com/500x325"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title d-flex justify-content-center">
                Card title
              </h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </p>
            </div>
            <div className="card-footer">
              <button type="button" class="btn btn-primary">
                Find Out More!
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gridcards;
