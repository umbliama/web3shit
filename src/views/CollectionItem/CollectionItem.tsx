import {
  Box,
  Card,
  CardActionArea,
  CardHeader,
  CardMedia,
  Link,
  Modal,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";

import TwitterIcon from "@mui/icons-material/Twitter";
import CloseIcon from "@mui/icons-material/Close";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import "./CollectionItem.scss";

interface ICItem {
  image: string;
  tokenId: number;
  name: string;
  attributes: any[];
  key: string;
  value: string;
}

interface Trait {
  key: string;
  value: string;
}

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const CollectionItem = (props: ICItem) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleDownload = () => {
    const downloadLink = document.createElement("a");
    downloadLink.href = props.image;
    downloadLink.download = "material-ui-logo.png";
    downloadLink.click();
  };

  return (
    <div className="c-item">
      <Card
        onClick={handleOpen}
        style={{ background: "#101010" }}
        sx={{ maxWidth: 350 }}
      >
        <CardActionArea>
          <CardMedia
            className="c-item-image"
            component="img"
            image={props.image}
            alt={"Spike #" + props.tokenId}
          />
        </CardActionArea>
      </Card>
      <Modal
        aria-labelledby="picture-modal-title"
        aria-describedby="picture-modal-description"
        open={open}
        onClose={handleClose}
        className="c-item-modal"
        sx={{ maxWidth: "90%" }}
      >
        <Stack direction="row">
          <Box
            sx={{
              backgroundColor: "#101010",
            }}
          >
            <img src={props.image} alt="" />
          </Box>
          <Box
            sx={{
              backgroundColor: "#101010",
              padding: "20px",
            }}
          >
            <Typography sx={{ color: "#fff" }}>{props.name}</Typography>

            <TableContainer>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableBody>
                  {props.attributes.map((trait: Trait) => (
                    <TableRow>
                      <TableCell
                        sx={{ color: "#fff" }}
                        component="th"
                        scope="row"
                      >
                        {trait.value}
                      </TableCell>
                      <TableCell
                        sx={{ color: "#fff" }}
                        component="th"
                        scope="row"
                      >
                        {trait.key}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <Stack direction="row">
              <Link href="https://twitter.com/cryptoversehome">
                <TwitterIcon sx={{ color: "#1DA1F2", margin: "20px 0 0 0" }} />
              </Link>
              <Link onClick={handleDownload}>
                <FileDownloadIcon
                  sx={{ color: "#fff", margin: "20px 0 0 0" }}
                />
              </Link>
            </Stack>
          </Box>
        </Stack>
      </Modal>
    </div>
  );
};

export default CollectionItem;
