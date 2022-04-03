export interface peliculaModel {
    id: number;
    titulo: string;
    poster: string;
}

export interface peliculasLandingPageModel {
    enCartelera?: peliculaModel[];
    proximosEstrenos?: peliculaModel[];
}