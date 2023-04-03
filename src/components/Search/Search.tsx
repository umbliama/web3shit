import { TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import "./Search.scss";
import { useDispatch } from "react-redux";
import { setFilterValue, filterData } from "../../features/api/filterActions";
import { fetchTokenByID } from "../../app/api";

export const Search = () => {
  const dispatch = useDispatch();
  const handleSearch = (event: any) => {
    const searchText = event.target.value;
    dispatch(setFilterValue(searchText));
    dispatch(filterData(searchText));
  };

  return (
    <TextField
      className="search"
      variant="outlined"
      size="medium"
      fullWidth
      style={{ background: "#FFF" }}
      onChange={handleSearch}
      InputProps={{
        startAdornment: <SearchIcon />,
      }}
    />
  );
};
