import "./App.css";
import Home from "./components/Home/Home";
import { Route } from "react-router-dom";
import MovieDetail from "./components/MovieDetail/MovieDetail";
function App() {
  return (
    <div>
      <Route exact path={"/"} component={Home} />
      <Route path={"/movie/:id"} component={MovieDetail} />
    </div>
  );
}

export default App;
