import React, { useContext } from "react";
import { SelectedFilterContext } from "../../store/context/selected-filter-context.tsx";
import CommonMoviesScreen from "../CommonMoviesScreen.tsx";

export default function MoviesScreen(): React.JSX.Element {
  const selectedFilterCtx = useContext(SelectedFilterContext);

  return (
    <CommonMoviesScreen selectedFilter={selectedFilterCtx?.selectedFilter || "Popular"} />
  );
}
