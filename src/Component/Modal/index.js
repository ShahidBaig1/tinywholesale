import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    textAlign: "center",
  },
  paper: {
    width: "500px",
    backgroundColor: theme.palette.background.paper,
    border: "none",
    boxShadow: theme.shadows[10],
    padding: theme.spacing(2, 4, 3),
  },
  btn: {
    display: "inline",
    padding: "20px 50px",
    backgroundColor: "#00CCFF",
    color: "#fff",
    border: "none",
    borderRadius: "15px",
    fontSize: "18px",
    cursor: "pointer",
  },
  para1: {
    fontSize: "18px",
  },
  para2: {
    fontSize: "18px",
  },
  para3: {
    fontSize: "18px",
  },
}));

const WalletModal=()=> {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button type="button" onClick={handleOpen}>
        react-transition-group
      </button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h1 id="transition-modal-title">Connect Your Wallet</h1>
            <p className={classes.para1} id="transition-modal-description">
              By connecting your wallet, you agree to our Terms of Service and
              our Privacy Policy
            </p>
            <button className={classes.btn}>
              Connect your Etherium wallet
            </button>
            <p className={classes.para2} id="transition-modal-description">
              {" "}
              New to Etherium
            </p>
            <p className={classes.para3} id="transition-modal-description">
              Learn more about wallets
            </p>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
export default WalletModal;
