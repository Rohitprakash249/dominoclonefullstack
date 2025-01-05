import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useSelector } from "react-redux";
import AllDrawerNavigation from "../AllDrawerNavigation";
import { useNavigate } from "react-router-dom";

export default function TemporaryDrawer() {
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();
  //data from redux store//
  const nameOfUser = useSelector((store) => store.customer.name);
  const contactNoOfUser = useSelector((store) => store.customer.contactNo);

  // data from redux store//
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 330 }} role="presentation" onClick={toggleDrawer(false)}>
      <div className="bg-[#ecf7ff] flex justify-between items-center py-6 px-3">
        <div className="text-[#59a2d7] flex justify-between items-center">
          <div>
            <AccountCircleIcon />
          </div>

          <div className="px-2 text-xs">
            <p className="text-[#323232]">{nameOfUser}</p>
            <p className="text-[#2e2e2e]">{contactNoOfUser}</p>
          </div>
        </div>
        {nameOfUser && (
          <button
            onClick={() => navigate("/myprofile")}
            className="text-xs text-[#005491] font-bold mx-3"
          >
            Edit
          </button>
        )}

        {!nameOfUser && (
          <button
            onClick={() => navigate("/login")}
            className="text-xs text-[#005491] font-bold mx-3"
          >
            LOGIN
          </button>
        )}
      </div>
      <AllDrawerNavigation />
    </Box>
  );

  return (
    <div>
      <img
        onClick={toggleDrawer(true)}
        alt="usericon"
        className="h-[30px]"
        src="logo.png"
      ></img>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
