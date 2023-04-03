import { useDispatch, useSelector } from "react-redux";
import { TreeView, TreeItem } from "@mui/lab";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

interface Head {
  [key: string]: string;
}

interface Traits {
  Head: Head;
}

interface FilterProps {
  props: {
    Head: Object;
    Background: Object;
    Emotion: Object;
    Clothes: Object;
    Skin: Object;
    Accessories: Object;
    Eyes: Object;
  };
  filterReducer: {
    traits: {
      Head: {
        [key: string]: string | number;
      };
      Eyes: {
        [key: string]: string | number;
      };
      Emotion: {
        [key: string]: string | number;
      };
    }[];
  };
}

interface Prop {
  items: Object;
}

const Filter = ({ items }: Prop) => {
  const dispatch = useDispatch();

  const handleItemClick = (value: string) => {
    dispatch({ type: "SET_FILTER_TRAIT_VALUE", payload: value });
  };

  return (
    <TreeView
      style={{ flex: "2", width: "10%", height: "100vh", overflowY: "hidden" }}
      aria-label="file system navigator"
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
      sx={{ height: 240, flexGrow: 1, maxWidth: 400, overflowY: "auto" }}
    >
      {Object.entries(items).map((trait, index) => (
        <TreeItem
          style={{ color: "#FFF", margin: "0 0 20px 0", padding: "10px 10px" }}
          nodeId={`${index + 1}`}
          label={trait[0]}
        >
          {Object.keys(trait[1]).map((trait, index) => (
            <TreeItem
              onClick={() => handleItemClick(trait)}
              style={{ padding: "10px 20px", textTransform: "capitalize" }}
              nodeId={`${index + Math.random()}`}
              label={trait}
            />
          ))}
        </TreeItem>
      ))}
    </TreeView>
  );
};
export default Filter;
