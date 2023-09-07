import { create } from "zustand";
import { Genre } from "./game-hub/hooks/useGenres";
import { Platform } from "./game-hub/hooks/usePlatforms";

interface GameQuery {
  genre?: Genre | null;
  platform?: Platform | null;
  ordering?: string;
  searchText?: string;
}

interface GameQueryStore {
  gameQuery: GameQuery;
  setSearchText: (searchText: string) => void;
  setGenreId: (genre: Genre) => void;
  setPlatformId: (platform: Platform) => void;
  setSortOrder: (ordering: string) => void;
}

const useGameQueryStore = create<GameQueryStore>((set) => ({
  gameQuery: {},
  setSearchText: (searchText) => set(() => ({ gameQuery: { searchText } })),
  setGenreId: (genre) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, genre } })),
  setPlatformId: (platform) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, platform } })),
  setSortOrder: (ordering) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, ordering } })),
}));

export default useGameQueryStore;
