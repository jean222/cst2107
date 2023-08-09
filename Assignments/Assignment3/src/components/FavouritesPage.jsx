function FavouritesPage({data}) {
    const favoriteItems = data.filter((data) => data.isFavorite);

    return (
        <div>
          <h1>Favorites</h1>
          <ul>
            {favoriteItems.map((favorite) => (
              <li key={favorite.id}>{favorite.name}</li>
            ))}
          </ul>
        </div>
      );
}

export default FavoritesPage;