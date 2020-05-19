import React from "react";
import { Link, NavLink } from "react-router-dom";

const SavedList = props => {
	return (
		<div
			className="saved-list dropzone"
			onDragOver={event => {
				event.preventDefault();
				return false;
			}}>
			<h3>Saved Movies:</h3>
			{props.list.map(movie => (
				<NavLink to={`/movies/${movie.id}`}>
					<span className="saved-movie">{movie.title}</span>
				</NavLink>
			))}
			<Link to="/">
				<div className="home-button">Home</div>
			</Link>
		</div>
	);
};

export default SavedList;
