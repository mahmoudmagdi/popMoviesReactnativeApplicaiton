import React, { createContext, useReducer } from "react";

type SelectedFilterContextProps = {
  selectedFilter: string;
  setSelectedFilter: (filter: string) => void;
}

type SelectedFilterActionProps = {
  type: string;
  selectedFilter: string;
}

export const SelectedFilterContext: React.Context<SelectedFilterContextProps | null> = createContext<SelectedFilterContextProps | null>(null);

const selectedFilterReducer = (state: string, action: SelectedFilterActionProps) => {
  switch (action.type) {
    case "SET_SELECTED_FILTER":
      return action.selectedFilter;
    default:
      return state;
  }
};

function SelectedFilterContextProvider({ children }: any): React.JSX.Element {
  const [selectedFilterState, dispatchSelectedFilter] = useReducer(selectedFilterReducer, "Popular");

  const setSelectedFilter = (selectedFilter: string) => {
    const selectedFilterActionProps: SelectedFilterActionProps = {
      type: "SET_SELECTED_FILTER",
      selectedFilter: selectedFilter
    };
    dispatchSelectedFilter(selectedFilterActionProps);
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
