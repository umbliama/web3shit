import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.scss";
import { fetchData, fetchStats, fetchTokenByID } from "./app/api";
import Header from "./components/Header/Header";
import { SearchNSort } from "./components/SortNSearch/SortNSearch";
import Stats from "./components/Stats/Stats";
import Collection from "./views/Collection/Collection";
import Filter from "./views/Filter/Filter";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { Container } from "@mui/material";

interface State {
  apiCollectionReducer: {
    data: Object[];
    stats: {
      traits: Object[];
    };
  };
  apiReducer: {
    isReady: boolean;
  };
  filterReducer: {
    sort: string;
    filterIsOpen: boolean;
  };
}
const App = () => {
  const dispatch = useDispatch();

  const data = useSelector<State, any>(
    (state) => state.apiCollectionReducer.data
  );

  const stateTraits = useSelector<State, any>(
    (state) => state.apiCollectionReducer
  );

  const { limit, tokenIdFirst, tokenIdLast, continuation } = useSelector<
    State,
    any
  >((state) => state.apiCollectionReducer);

  const { sort, filterValue, filterIsOpen, filteredData } = useSelector<
    State,
    any
  >((state) => state.filterReducer);

  const stateRef = useRef();
  stateRef.current = continuation;

  useEffect(() => {
    // dispatch(fetchStats());
    dispatch(fetchData());
    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } =
        document.documentElement;

      if (scrollTop + clientHeight >= scrollHeight && stateRef.current) {
        console.log(scrollTop + clientHeight);
        dispatch(fetchData(stateRef.current));
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [dispatch, filterValue]);

  if (!data && !stateTraits) {
    return <div>Loading</div>;
  }

  const toggleFilter = () => {
    dispatch({ type: "TOGGLE_FILTER" });
  };

  return (
    <div className="App">
      <Header />
      <Stats />
      <SearchNSort />
      <div
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <button className="button button--filter" onClick={toggleFilter}>
          <FilterAltIcon />
          Filter
        </button>
        <div style={{ display: "flex", margin: "100px 0 0 0" }}>
          <div style={{ display: "flex", flexDirection: "column" }}></div>
          {/* {!stateTraits ? (
            <div>Loading...</div>
          ) : filterIsOpen ? (
            <Filter items={stateTraits} />
          ) : (
            <div></div>
          )} */}

          {filterValue ? (
            <Collection items={filteredData} />
          ) : (
            <Collection items={data} />
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
