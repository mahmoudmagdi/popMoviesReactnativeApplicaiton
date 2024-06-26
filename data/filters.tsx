export interface Filter {
  keyword: string;
  title: {
    "English": string;
    "Spanish": string;
    "French": string;
    "German": string;
    "Arabic": string;
  };
}

export const Filters: Filter[] = [
  {
    keyword: "search",
    title: {
      "English": "Search",
      "Spanish": "Buscar",
      "French": "Rechercher",
      "German": "Beliebt",
      "Arabic": "بحث"
    }
  },
  {
    keyword: "popular",
    title: {
      "English": "Popular",
      "Spanish": "Popular",
      "French": "Populaire",
      "German": "Beliebt",
      "Arabic": "شعبي"
    }
  },
  {
    keyword: "top_rated",
    title: {
      "English": "Top Rated",
      "Spanish": "Más valoradas",
      "French": "Les mieux notés",
      "German": "Top bewertet",
      "Arabic": "أعلى تقييما"
    }
  },
  {
    keyword: "now_playing",
    title: {
      "English": "Now Playing",
      "Spanish": "En cines",
      "French": "En cours",
      "German": "In Kinos",
      "Arabic": "يعرض الآن"
    }
  },
  {
    keyword: "upcoming",
    title: {
      "English": "Upcoming",
      "Spanish": "Próximas",
      "French": "À venir",
      "German": "Kommend",
      "Arabic": "قادم"
    }
  }
];
