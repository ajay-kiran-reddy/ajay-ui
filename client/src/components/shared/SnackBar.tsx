import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import { useDispatch, useSelector } from "react-redux";
import { snackBar, storeSnackBarData } from "../../features/sharedUiSlice";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function SnackBar() {
  const snackBarData = useSelector(snackBar);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(storeSnackBarData({ open: false }));
  };

  return (
    <Stack spacing={2} sx={{ width: "100%" }}>
      <Snackbar
        open={snackBarData?.open}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ horizontal: "center", vertical: "bottom" }}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          {snackBarData?.message}
        </Alert>
      </Snackbar>
    </Stack>
  );
}
