function About() {
  return (
    <>
      <div className="card mb-3 about">
        <div className="row g-0">
          <div className="col-md-2">
            <img src="src/assets/images/profilepic.jpg" className="img-fluid rounded-start about" alt="photo of the author" />
          </div>
          <div className="col-md-10 about">
            <div className="card-body about">
              <h5 className="card-title about">About Me</h5>
              <p className="card-text about">Welcome! My name is Greg and I build things for the web. I began my coding journey writing web apps in Python using the Streamlit library, and recently switched to web development with HTML, CSS, and Java Script. Currently, I am studying MERN stacks at UC Berkley extension. I am always looking for new and interesting projects to work on, and enjoy colloaborating with developers who share my passion. If you have any questions, or would like to discuss a project, please reach out through any channels listed in the contact section.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


export default About;