import React, { Suspense, lazy } from "react";
import PageLoader from "./components/PageLoader";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Menu from "./components/Menu";
const Price = lazy(() => import("./views/Price"));

/**
 *
 * api
 * - currentprice : /api/currentprice
 * - currentprice By code : /api/currentprice/:id
 * - supported-currencies" : /api/supported-currencies"
 *
 * ถ้า npm i ไม่ได้ให้ลบ package-lock ออกแล้ว npm i ไหม่
 */

function App() {
  return (
    <>
      <Router>
        <Menu>
          <Suspense fallback={<PageLoader />}>
            <Switch>
              <Route path="/" exact>
                <Price />
              </Route>
              <Route path="/buy">
                <span>eiei</span>
              </Route>
              {/* 404 */}
              <Route component={Price} />
            </Switch>
          </Suspense>
        </Menu>
      </Router>
    </>
  );
}

export default App;
