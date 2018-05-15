import React, { Component } from "react";
import StackList from "./components/StackList";
import Stack from "./components/StackList";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createStore } from "redux";
import rootReducer from "./reducers";
import { setStack } from "./actions";
import { Provider } from "react-redux";

const store = createStore(rootReducer);
store.subscribe(() => {
  console.log("store", store.getState());
});

store.dispatch(
  setStack({
    id: 0,
    title: "example",
    cards: [],
  }),
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <h2>Pro Flash Card</h2>
            <Switch>
              <Route exact path="/" component={StackList} />
              <Route exact path="/stacks/:stack" component={Stack} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
