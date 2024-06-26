import React, { createContext, useState } from "react";
import { Filter, Filters } from "../../data/filters";

type SelectedFilterContextProps = {
  selectedFilter: Filter;
  setSelectedFilter: (filter: Filter) => void;
}

export const SelectedFilterContext: React.Context<SelectedFilterContextProps | null> = createContext<SelectedFilterContextProps | null>(null);

function SelectedFilterContextProvider({ children }: any): React.JSX.Element {
  const initialSelectedFilter: Filter = Filters[0];
  const [selectedFilterState, setFilterState] = useState<Filter>(initialSelectedFilter);

  const setSelectedFilter = (selectedFilter: Filter) => {
    setFilterState(selectedFilter);
  };

  const value = {
    selectedFilter: selectedFilterState,
    setSelectedFilter: setSelectedFilter
  };

  return (
    <SelectedFilterContext.Provider value={value}>{children}</SelectedFilterContext.Provider>
  );
}

export default SelectedFilterContextProvider;
