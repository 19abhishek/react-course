import { Route, Switch } from "react-router-dom";

import AllQuote from "./pages/AllQuotes";
import NewQuote from "./pages/NewQuote";
import QuoteDetail from "./pages/QuoteDetail";

function App() {
  return (
    <Switch>
      <Route path="/quotes" exact>
        <AllQuote />
      </Route>
      <Route path="/quotes/:quoteId">
        <NewQuote />
      </Route>
      <Route path="/new-quote">
        <QuoteDetail />
      </Route>
    </Switch>
  );
}

export default App;
