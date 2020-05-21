import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Movie = props => {
	let [isSaved, setIsSaved] = useState(false);
	const { savedList, setSavedList } = props;
	const [movie, setMovie] = useState();

	const urlId = useParams();

	useEffect(() => {
		const id = urlId.id;
		// change ^^^ that line and grab the id from the URL
		// You will NEED to add a dependency array to this effect hook

		axios
			.get(`http://localhost:5000/api/movies/${id}`)
			.then(response => {
				setMovie(response.data);
			})
			.catch(error => {
				console.error(error);
			});
	}, [urlId]);

	if (!movie) {
		return <div>Loading movie information...</div>;
	}

	const { title, director, metascore, stars } = movie;

	// Uncomment this only when you have moved on to the stretch goals
	const saveMovie = event => {
		if (isSaved === false) {
			setIsSaved(true);
			setSavedList(savedList.concat({ title, id: movie.id }));
		} else {
			console.log("Already saved!");
		}
		console.log(isSaved);
	};

	return (
		<div className="save-wrapper">
			<div>
				<h2>{title}</h2>
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
			<div className="save-button" onClick={saveMovie}>
				Save
			</div>
		</div>
	);
};

export default Movie;
