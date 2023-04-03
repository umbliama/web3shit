import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useSelector } from "react-redux";
import "./Stats.scss";

const Stats = () => {
  const state = useSelector((state: any) => state.apiCollectionReducer.stats);

  const { total_volume, total_supply, total_sales, floor_price } = state;

  return (
    <Container>
      <Typography
        sx={{ color: "#fff", textTransform: "uppercase" }}
        variant="h1"
      >
        Cryptoverse
      </Typography>

      <TableContainer>
        <Table sx={{ maxWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ color: "#fff" }}>Total sales</TableCell>
              <TableCell sx={{ color: "#fff" }}>Total Volume</TableCell>
              <TableCell sx={{ color: "#fff" }}>Total Supply</TableCell>
              <TableCell sx={{ color: "#fff" }}>Floor Price</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell sx={{ color: "#fff" }}>{total_sales}</TableCell>
              <TableCell sx={{ color: "#fff" }}>{total_volume}</TableCell>
              <TableCell sx={{ color: "#fff" }}>{total_supply}</TableCell>
              <TableCell sx={{ color: "#fff" }}>{floor_price}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default Stats;
