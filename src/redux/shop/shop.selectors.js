import { memoize } from "lodash";
import { createSelector } from "reselect";

const selectShop = (state) => state.shop;

export const selectCollections = createSelector([selectShop], (shop) => shop);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  (collections) => Object.keys(collections).map((key) => collections[key])
);

export const selectCollection = memoize((collectionUrlParam) =>
  createSelector(
    [selectCollections],
    (collections) => collections[collectionUrlParam]
  )
);
