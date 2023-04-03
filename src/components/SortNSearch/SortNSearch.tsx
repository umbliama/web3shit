import { Search } from "../Search/Search";
import { Sort } from "../Sort/Sort";

export const SearchNSort = () => {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <Search />
      <Sort />
    </div>
  );
};
