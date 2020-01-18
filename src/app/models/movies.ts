export interface IMovie {
    Title: string;
    Year: string;
    imdbID: string;
    Type: string;
    Poster: string;
}

export interface IMovies {
    Search: IMovie[];
    totalResults: string;
    Response: string;
}