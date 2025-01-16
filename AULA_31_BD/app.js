document.addEventListener('DOMContentLoaded', () => {
    const searchScreen = new SearchScreen();
    const detailsScreen = new DetailsScreen();

    searchScreen.render();
    detailsScreen.render();
}); 