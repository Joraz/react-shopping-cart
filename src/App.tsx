import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Items } from "./components/Items";
import { MenuBar } from "./components/MenuBar";
import { store } from "./store/store";
import { Cart } from "./components/Cart";
import { ThemeProvider } from "@material-ui/core";
import theme from "./theme";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <BrowserRouter>
          <MenuBar />
          <Switch>
            <Route exact path="/">
              <Items />
            </Route>
            <Route path="/cart">
              <Cart />
            </Route>
          </Switch>
        </BrowserRouter>
      </Provider>
    </ThemeProvider>
  );
};

export default App;
