import {
  Button,
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import SortIcon from "@mui/icons-material/Sort";

export const Sort = () => {
  const dispatch = useDispatch();
  const state = useSelector((state: any) => state.filterReducer.sort);
  const handleChange = (event: SelectChangeEvent<{ value: unknown }>) => {
    dispatch({
      type: "SET_SORT_VALUE",
      payload: event.target.value as string,
    });
  };
  return (
    <FormControl style={{ margin: "0 0 0 20px", background: "#fff" }}>
      <Button>
        <SortIcon>
          <Select value={state} onChange={handleChange}>
            <MenuItem value="ASC">ASC</MenuItem>
            <MenuItem value="DESC">DESC</MenuItem>
          </Select>
        </SortIcon>
      </Button>
    </FormControl>
  );
};
