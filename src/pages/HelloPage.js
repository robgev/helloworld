import { jsx as _jsx } from "react/jsx-runtime";
import '../styles/hello.css';
const HelloPage = () => (_jsx("main", { className: "hello-page", "data-testid": "hello-container", "data-hello-world": "container", children: _jsx("h1", { className: "hello-heading fade-in", "data-testid": "hello-text", "data-hello-world": "text", children: "Hello World" }) }));
export default HelloPage;
