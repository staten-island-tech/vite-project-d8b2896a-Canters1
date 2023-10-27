const movies = [
    {
      title: 'The Shawshank Redemption', 
      year: 1994,
      director: 'Frank Darabont',
      poster: 'https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg',
      metacritic: 80
    },
    {
      title: 'The Godfather',
      year: 1972,
      director: 'Francis Ford Coppola',
      poster: 'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY268_CR3,0,182,268_AL_.jpg',
      metacritic: 100
    },
    {
      title: 'The Godfather: Part II',
      year: 1974,
      director: 'Francis Ford Coppola', 
      poster: 'https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY268_CR3,0,182,268_AL_.jpg',
      metacritic: 90
    },
    {
      title: 'The Dark Knight',
      year: 2008,
      director: 'Christopher Nolan',
      poster: 'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_UY268_CR0,0,182,268_AL_.jpg',
      metacritic: 84
    },
    {
      title: '12 Angry Men',
      year: 1957,
      director: 'Sidney Lumet',
      poster: 'https://m.media-amazon.com/images/M/MV5BMWU4N2FjNzYtNTVkNC00NzQ0LTg0MjAtYTJlMjFhNGUxZDFmXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_UX182_CR0,0,182,268_AL_.jpg', 
      metacritic: 96
    },
    {
      title: 'Schindler\'s List',
      year: 1993,
      director: 'Steven Spielberg',
      poster: 'https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL_.jpg',
      metacritic: 94
    },
    {
      title: 'The Lord of the Rings: The Return of the King',
      year: 2003,
      director: 'Peter Jackson',
      poster: 'https://m.media-amazon.com/images/M/MV5BYWY1ZWQ5YjMtMDE0MS00NWIzLWE1M2YtODYzYTk2OTNlYWZmXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_UX182_CR0,0,182,268_AL_.jpg',
      metacritic: 94
    },
    {
      title: 'Pulp Fiction',
      year: 1994,
      director: 'Quentin Tarantino',
      poster: 'https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY268_CR0,0,182,268_AL_.jpg',
      metacritic: 94
    },
    {
      title: 'The Good, the Bad and the Ugly',
      year: 1966,
      director: 'Sergio Leone',
      poster: 'https://m.media-amazon.com/images/M/MV5BOTQ5NDI3MTI4MF5BMl5BanBnXkFtZTgwNDQ4ODE5MDE@._V1_UY268_CR9,0,182,268_AL_.jpg',
      metacritic: 90
    },
    {
      title: 'Fight Club',
      year: 1999,
      director: 'David Fincher',
      poster: 'https://m.media-amazon.com/images/M/MV5BMmEzNTkxYjQtZTc0MC00YTVjLTg5ZTEtZWMwOWVlYzY0NWIwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL_.jpg',
      metacritic: 66
    },
    {
      title: 'Forrest Gump',
      year: 1994,
      director: 'Robert Zemeckis',
      poster: 'https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UY268_CR4,0,182,268_AL_.jpg',
      metacritic: 82
    },
    {
      title: 'Inception',
      year: 2010,
      director: 'Christopher Nolan',
      poster: 'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_UX182_CR0,0,182,268_AL_.jpg',
      metacritic: 74
    },
    {
      title: 'The Lord of the Rings: The Fellowship of the Ring', 
      year: 2001,
      director: 'Peter Jackson',
      poster: 'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_UX182_CR0,0,182,268_AL_.jpg',
      metacritic: 92
    },
    {
      title: 'Star Wars: Episode V - The Empire Strikes Back',
      year: 1980,
      director: 'Irvin Kershner',
      poster: 'https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL_.jpg',
      metacritic: 82
    },
    {
      title: 'The Matrix',
      year: 1999,
      director: 'The Wachowskis', 
      poster: 'https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL_.jpg',
      metacritic: 73
    }
  ];

  export {movies}