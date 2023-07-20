import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

// redux persist
import {
    FLUSH,
    PAUSE,
    PERSIST,
    persistReducer,
    persistStore,
    PURGE,
    REGISTER,
    REHYDRATE
} from "redux-persist";

import logger from "redux-logger";
import storage from "redux-persist/lib/storage";
import { rootReducer } from "./modules/rootReducer";



const persistConfig = {
    key: "persist-root",
    storage,
    blacklist: ["experience", "navbar", "search", "blog"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV === "development",
    middleware: (getDefaultMiddleware) =>
        (process.env.NODE_ENV === "development" &&
            getDefaultMiddleware({
                serializableCheck: {
                    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
                },
            }).concat(logger)) ||
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;

export const persistor = persistStore(store);
