import React from "react";
import "./App.css";
import { Store } from "./context/Store";
import { IAction, IEpisode } from "./interface/interface";
import { Button } from "reactstrap";
import HomePage from "./components/HomePage";
import FavoritesPage from "./components/FavoritesPage";
import { Switch, Route, Link } from "react-router-dom";
function App(): JSX.Element {
  const { state, dispatch } = React.useContext(Store);

  React.useEffect(() => {
    state.episodes.length === 0 && fetchDataAction();
  });

  const fetchDataAction = async () => {
    const URL =
      "https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes";
    const data = await fetch(URL);
    const jsonData = await data.json();

    dispatch({
      type: "FETCH_DATA",
      payload: jsonData._embedded.episodes.slice(0, 36)
    });
  };

  const toggleFavAction = (episode: IEpisode): IAction => {
    if (state.favorites.includes(episode)) {
      return dispatch({
        type: "REMOVE_FAV",
        payload: episode.id
      });
    } else {
      return dispatch({
        type: "ADD_FAV",
        payload: episode
      });
    }
  };

  const homePageProps = {
    state,
    toggleFavAction
  };

  const favoritesPageProps = {
    state: { ...state, episodes: state.favorites },
    toggleFavAction
  };

  return (
    <React.Fragment>
      <header className="header">
        <div>
          <h1>Rick and Morty</h1>
          <Link to="/">
            <Button color="primary" size="lg">
              Home
            </Button>{" "}
          </Link>
          <Link to="/favorites">
            <Button outline color="danger" size="lg">
              Favorites: {state.favorites.length}
            </Button>{" "}
          </Link>
        </div>
      </header>
      <Switch>
        <Route path="/favorites">
          <FavoritesPage {...favoritesPageProps} />
        </Route>
        <Route path="/">
          <HomePage {...homePageProps} />
        </Route>
      </Switch>
    </React.Fragment>
  );
}

export default App;
