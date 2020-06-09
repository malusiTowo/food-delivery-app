import React from "react";
import { Provider } from "mobx-react";

import Navigation from "./src/navigation/navigation";
import Root from "./src/mobx/Root";

export default function App() {
  return (
    <Provider root={Root}>
      <Navigation />
    </Provider>
  );
}
