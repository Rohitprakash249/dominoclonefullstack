import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  //   border: "1px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function ErrorModal({
  errorOccured,
  setErrorOccured,
  errorMessage,
}) {
  const [open, setOpen] = React.useState(false);
  // const handleOpen = () => setOpen(true);
  const handleClose = () => setErrorOccured(false);

  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={errorOccured}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="flex items-center flex-col justify-between">
            <p>{errorMessage}</p>
            <button
              onClick={handleClose}
              className="bg-[#82bb37] text-white font-semibold mt-5  rounded-md px-2"
            >
              OK
            </button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
