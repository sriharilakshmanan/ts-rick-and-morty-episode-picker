import * as React from "react";
import { IEpisode } from "../interface/interface";
import { Button } from "reactstrap";

const Episodes = (props: any) => {
  const { state, toggleFavAction } = props;
  return state.episodes.map((episode: IEpisode) => (
    <section key={episode.id} className="episode-box">
      {episode.image !== null ? (
        <img src={episode.image.medium} alt={episode.name} />
      ) : (
        ""
      )}
      <div>{episode.name}</div>
      <div className="section">
        Season: {episode.season} Number: {episode.number}
        <Button
          type="button"
          color={state.favorites.includes(episode) ? "danger" : "success"}
          onClick={() => toggleFavAction(episode)}
        >
          {state.favorites.includes(episode) ? "Remove" : "Favorite"}
        </Button>
      </div>
    </section>
  ));
};

export default Episodes;

// With Reactstrap Cards
// <Card key={episode.id} className="episode-box">
// {episode.image !== null ? (
//   <CardImg
//     top
//     width="100%"
//     src={episode.image.medium}
//     alt={episode.name}
//   />
// ) : (
//   ""
// )}
// <CardBody>
//   <CardTitle>{episode.name}</CardTitle>
//   <CardSubtitle>
//     Season: {episode.season} Number: {episode.number}
//   </CardSubtitle>
//   <Button
//     type="button"
//     color={state.favorites.includes(episode) ? "danger" : "success"}
//     onClick={() => toggleFavAction(episode)}
//   >
//     {state.favorites.includes(episode) ? "Remove" : "Favorite"}
//   </Button>
// </CardBody>
// </Card>
