import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import { userRoutes } from "./routes/userRoutes";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Switch>
          {/* <Route path="/" component={HomePage} /> */}
          {userRoutes.map((route, index) => {
            if (route.isUseLayout) {
              return (
                <Route
                  key={index}
                  exact={route.exact}
                  path={route.path}
                  render={() => {
                    return route.component;
                  }}
                />
              );
            }
            return (
              <Route
                key={index}
                exact={route.exact}
                path={route.path}
                component={route.component}
              />
            );
          })}
          {/* <Route path="/" component={HomePage} /> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
