function Portfolio() {
  return (
    <div>
      <h1>Portfolio</h1>
      <div className="row row-cols-3 g-3">
        <div className="col">
          <div className="card">
            <img
              src="src/assets/images/trivia.png"
              className="card-img-top"
              alt="Sign for Trivia Night"
            />
            <div className="card-body">
              <h5 className="card-title">Trivia Mania</h5>
              <p className="card-text"></p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img
              src="src/assets/images/tipout-app.png"
              className="card-img-top"
              alt="Server holding order pad"
            />
            <div className="card-body">
              <h5 className="card-title">Tipout App</h5>
              <p className="card-text"></p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img
              src="src/assets/images/bookflix.png"
              className="card-img-top"
              alt="Screenshot of bookflix app"
            />
            <div className="card-body">
              <h5 className="card-title">BookFlix</h5>
              <p className="card-text"></p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img
              src="src/assets/images/weather-app.png"
              className="card-img-top"
              alt="Skyscrapers"
            />
            <div className="card-body">
              <h5 className="card-title">Weather Dashboard</h5>
              <p className="card-text"></p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img
              src="src/assets/images/ace-hearts.png"
              className="card-img-top"
              alt="Ace of Hearts"
            />
            <div className="card-body">
              <h5 className="card-title">OFC Poker Calculator</h5>
              <p className="card-text"></p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img
              src="https://mdbcdn.b-cdn.net/img/new/standard/city/050.webp"
              className="card-img-top"
              alt="Skyscrapers"
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
