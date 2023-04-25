import { configureStore } from "@reduxjs/toolkit";
import { carsReducer, addCar, removeCar, changeSearchTerm } from "./slices/carsSlice";
import { formReducer, changeName, changeCost } from "./slices/formSlice";
import { usersReducer } from "./slices/usersSlice";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { albumsApi } from "./apis/albumApi";
import { photosApi } from "./apis/photosApi";
const store = configureStore({
    reducer:{
        cars: carsReducer,
        form: formReducer,
        users: usersReducer,
        [albumsApi.reducerPath]: albumsApi.reducer,
        [photosApi.reducerPath]: photosApi.reducer,
    },
    middleware:(getDefaultMiddleware)=>{
        return getDefaultMiddleware()
        .concat(albumsApi.middleware)
        .concat(photosApi.middleware);
    },
});

setupListeners(store.dispatch);

export {store, addCar, removeCar, changeSearchTerm, changeCost, changeName};
export * from './thunks/fetchUsers';
export * from './thunks/addUsers';
export * from './thunks/removeUser';
export { useFetchAlbumsQuery, useAddAlbumMutation, useRemoveAlbumMutation } from './apis/albumApi';
export { useFetchPhotosQuery, useAddPhotoMutation, useRemovePhotoMutation } from './apis/photosApi';