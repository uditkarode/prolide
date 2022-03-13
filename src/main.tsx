import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./styles/Main.css";

const Index = React.lazy(() => import("./pages/Index"));

ReactDOM.render(
  <Suspense fallback={<h2 style={{ fontSize: 60 }}>Loading.. please wait!</h2>}>
    <Index />
  </Suspense>,
  document.getElementById("root")
);
