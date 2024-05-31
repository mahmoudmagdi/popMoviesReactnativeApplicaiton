
export function getSelectedFilterKey(selectedFilter: string): string {
  switch (selectedFilter) {
    case "Popular":
      return "popular";
    case "Top Rated":
      return "top_rated";
    case "Upcoming":
      return "upcoming";
    case "Now Playing":
      return "now_playing";
    default:
      return "popular";
  }
}
