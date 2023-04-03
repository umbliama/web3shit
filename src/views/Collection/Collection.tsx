import CollectionItem from "../CollectionItem/CollectionItem";
import { Grid } from "@mui/material";
import "./Collection.scss";

interface ICItem {
  token: {
    image: string;
    tokenId: number;
    name: string;
    attributes: Array<Object>;
    key: string;
    value: string;
  };
}

interface ICItems {
  items: ICItem[];
}

const Collection = ({ items }: ICItems) => {
  return (
    <div className="collection">
      <Grid container spacing={3}>
        {items.map((item: ICItem) => (
          <Grid item xs={12} sm={2}>
            <CollectionItem
              image={item.token.image}
              tokenId={item.token.tokenId}
              name={item.token.name}
              attributes={item.token.attributes}
              key={item.token.key}
              value={item.token.value}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Collection;
