import React from "react";

// Componente Card que recibe props
const Card = ({ imgSrc, imgAlt, title, text, buttonText }) => {
  return (
    <div className="col">
      <div className="card h-100">
        <img src={imgSrc} className="card-img-top" alt={imgAlt} />
        <div className="card-body">
          <h5 className="card-title d-flex justify-content-center">{title}</h5>
          <p className="card-text">{text}</p>
        </div>
        <div className="card-footer d-flex justify-content-center">
          <button type="button" className="btn btn-primary">
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

// Componente Gridcards que recibe los datos de las tarjetas
const Gridcards = () => {
  const cardData = [
    {
      imgSrc: "https://dummyimage.com/500x325",
      imgAlt: "Image 1",
      title: "Card title 1",
      text: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      buttonText: "Find Out More!",
    },
    {
      imgSrc: "https://dummyimage.com/500x325",
      imgAlt: "Image 2",
      title: "Card title 2",
      text: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      buttonText: "Find Out More!",
    },
    {
      imgSrc: "https://dummyimage.com/500x325",
      imgAlt: "Image 3",
      title: "Card title 3",
      text: "This card has supporting text below as a natural lead-in to additional content.",
      buttonText: "Find Out More!",
    },
    {
      imgSrc: "https://dummyimage.com/500x325",
      imgAlt: "Image 4",
      title: "Card title 4",
      text: "This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.",
      buttonText: "Find Out More!",
    },
  ];

  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-md-4 g-4 mb-4">
        {cardData.map((card, index) => (
          <Card
            key={index}
            imgSrc={card.imgSrc}
            imgAlt={card.imgAlt}
            title={card.title}
            text={card.text}
            buttonText={card.buttonText}
          />
        ))}
      </div>
    </div>
  );
};

export default Gridcards;
