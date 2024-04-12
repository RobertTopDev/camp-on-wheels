export const selectCars = (state) => state.cars.cars.items;

export const selectFiltersCars = (state) => state.cars.filter;

export const selectFavoriteCars = (state) => state.cars.cars.favorites;

export const selectIsLoading = (state) => state.cars.cars.isLoading;

export const selectError = (state) => state.cars.error;
