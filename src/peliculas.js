import React, { useEffect, useState } from 'react';
import './peliculas.css'
import UncontrolledExample from './carrusel'

function Peliculas() {

    const [listado, setListado] = useState([])

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlOGYxYjMyMjMwN2RiMGIzYjMwODM4MTllMzYyOGQyYyIsInN1YiI6IjY0OGM2YTc4YzNjODkxMDBjYWQ5NzVhMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2dmn1SNN2gVtKRapNC0DyfqMxgAU-BTM9syOynx3cak'
        }
    };

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/popular?language=es-MX', options)
            .then(response => response.json())
            .then(data => setListado(data.results))
            .catch(err => console.error(err));

    });

    return (
        <>
        < UncontrolledExample />
        <div className='contenedor'>
            <div className='conte'>
                {listado.map((listados, idx) => (
                    <div key={idx} className='peli'>
                        <div class="flip-card">
                            <div class="flip-card-inner">
                                <div class="flip-card-front">
                                    <img src={`https://image.tmdb.org/t/p/w500/${listados.poster_path}`} alt="si" />
                                </div>
                                <div class="flip-card-back">
                                    <div className='info'>
                                        <p>ID: {listados.id}</p>
                                        <p className='name'> Nombre: {listados.original_title}</p>
                                        <p> Idioma: {listados.original_language}</p>
                                        <p className='descrip'> Descripcion General: {listados.overview}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>

                        </div>

                    </div>
                ))}
            </div>
        </div>
        </>
    )
}

export default Peliculas;

