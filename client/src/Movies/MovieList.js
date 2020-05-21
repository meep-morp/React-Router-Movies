import React from "react";
import { Link } from "react-router-dom";

const MovieList = props => {
	const { savedList, setSavedList } = props;
	console.log(props.movies.id);
	return (
		<div className="movie-list">
			{props.movies.map(movie => (
				<MovieDetails
					key={movie.id}
					movie={movie}
					savedList={savedList}
					setSavedList={setSavedList}
				/>
			))}
		</div>
	);
};

function MovieDetails(props) {
	const { title, director, metascore, stars, id } = props.movie;
	const { savedList, setSavedList } = props;
	return (
		<div
			className="movie-card"
			className="movie-card"
			draggable="true"
			onDragStart={event => {
				console.log("Being Dragged");
				setTimeout(event.target.classList.add("dragged"), 0);
			}}
			onDragEnd={event => {
				event.target.classList.remove("dragged");
				setSavedList(savedList.concat({ title, id: props.movie.id }));
			}}>
			<Link to={`/movies/${id}`}>
				<h2>{title}</h2>
			</Link>
			<div className="movie-director">
				Director: <em>{director}</em>
			</div>
			<div className="movie-metascore">
				Metascore: <strong>{metascore}</strong>
			</div>
			<h3>Actors</h3>

			{stars.map(star => (
				<div key={star} className="movie-star">
					{star}
				</div>
			))}
		</div>
	);
}

export default MovieList;
