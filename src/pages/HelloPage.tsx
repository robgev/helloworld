import '../styles/hello.css';

const HelloPage = () => (
  <main
    className="hello-page"
    data-testid="hello-container"
    data-hello-world="container"
  >
    <h1
      className="hello-heading fade-in"
      data-testid="hello-text"
      data-hello-world="text"
    >
      Hello World
    </h1>
  </main>
);

export default HelloPage;
