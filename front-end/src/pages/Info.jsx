import { useState, useEffect } from "react";

export function Info() {
    const [animes, setAnimes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchAnimes() {
            try {
                setLoading(true);

                const query = `
                    query ($ids: [Int]) {
                        Page(perPage: 10) {
                            media(id_in: $ids, type: ANIME) {
                                id
                                title {
                                    romaji
                                    native
                                }
                                coverImage {
                                    large
                                }
                                averageScore
                                episodes
                                genres
                                startDate {
                                    year
                                    month
                                    day
                                }
                                description
                            }
                        }
                    }
                `;

                const variables = {
                    ids: [21311, 120150]
                };

                const response = await fetch(
                    "https://graphql.anilist.co",
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            Accept: "application/json",
                        },
                        body: JSON.stringify({
                            query,
                            variables
                        })
                    }
                );

                if (!response.ok) {
                    throw new Error(
                        "Erro ao buscar os animes"
                    );
                }

                const data = await response.json();

                setAnimes(data.data.Page.media);

            } catch (err) {
                setError(err.message);
                console.error(err);

            } finally {
                setLoading(false);
            }
        }

        fetchAnimes();
    }, []);

    if (loading) {
        return (
            <p className="text-white text-center mt-10">
                Carregando...
            </p>
        );
    }

    if (error) {
        return (
            <p className="text-red-500 text-center mt-10">
                {error}
            </p>
        );
    }

    return (
        <div className="flex flex-col bg-violet-950">
            <div className="h-30 pt-15 items-center justify-center">
                <p className="font-serif text-white text-[80px] font-bold">Informações</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 m-4">
                {animes.map(anime => (
                    <div key={anime.id} className="flex flex-row bg-red-900 rounded-xl p-4 shadow-lg text-white justify-center transition-transform duration-700 hover:scale-102">
                        <img
                            src={anime.coverImage.large}
                            alt={anime.title.romaji}
                            className="w-80 rounded-lg"
                        />
                        <div className="flex flex-col gap-1">
                            <p className="font-serif text-white text-[50px] font-bold">
                                {anime.title.romaji}
                            </p>
                            <p className="pt-3 text-gray-300">
                                {anime.title.native}
                            </p>
                            <div className="flex flex-row justify-center gap-1">
                                <p className="mt-3 text-white font-bold"> Lançamento: </p>
                                <p> {anime.startDate.day}/{anime.startDate.month}/{anime.startDate.year}</p>
                            </div>
                            <div className="flex flex-row justify-center gap-1">
                                <p className="mt-3 text-white font-bold"> Nota: </p>
                                <p> {anime.averageScore}</p>
                            </div>
                            <div className="flex flex-row justify-center gap-1">
                                <p className="mt-3 text-white font-bold"> Gêneros: </p>
                                <p> {anime.genres.join(", ")}</p>
                            </div>
                            <div className="flex flex-row justify-center gap-1">
                                <p className="mt-3 text-white font-bold"> Episódios: </p>
                                <p> {anime.episodes}</p>
                            </div>
                            <p className="mt-3 text-white font-bold"> Sinopse: </p>
                            <p className="text-[20px]"> {anime.description} </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}