function Portfolio() {
  return (
    <div>
      <h1>Portfolio</h1>
      <div className="row row-cols-3 g-3">
        <div className="col">
          <a href="https://trivia-mania-34ca81ef04dc.herokuapp.com/" target="blank">
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
          </a>
        </div>
        <div className="col">
          <a href="https://gsr142-tipcalcwebapp-web-zg4sej.streamlit.app/">
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
          </a>
        </div>
        <div className="col">
          <a href="https://gsr142.github.io/bookFlix/index.html">
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
          </a>
        </div>
        <div className="col">
          <a href="https://gsr142.github.io/five-day-forecast/">
          <div className="card">
            <img
              src="src/assets/images/weather-app.png"
              className="card-img-top"
              alt="Clouds"
            />
            <div className="card-body">
              <h5 className="card-title">Weather Dashboard</h5>
              <p className="card-text"></p>
            </div>
          </div>
          </a>
        </div>
        <div className="col">
          <a href="https://gsr142-ofc-royalty-calculator-main-q5amqf.streamlit.app/">
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
          </a>
        </div>
        <div className="col">
          <a href="https://github.com/gsr142/note-taker">
          <div className="card">
            <img
              src="src/assets/images/screenshot.png"
              className="card-img-top"
              alt="Screenshot of Notetaker app"
            />
            <div className="card-body">
              <h5 className="card-title">NoteTaker</h5>
              <p className="card-text"></p>
            </div>
          </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
