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

export default function AnchorTemporaryDrawer({
  couponName,
  couponDescription,
  gradientFrom,
  gradientTo,
}) {
  const [state, setState] = React.useState({
    bottom: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <h1>hello</h1>
      <Divider />
    </Box>
  );
  const color = "#0050ae";
  return (
    <div className="mx-1">
      <div
        className={`flex justify-between rounded-lg text-white my-2 py-3 px-2 items-center bg-gradient-to-b ${gradientFrom} ${gradientTo}`}
        onClick={toggleDrawer("bottom", true)}
      >
        <div className="w-[288px]">
          <div className="flex">
            <img
              className="h-[21px] bg-white rounded-full"
              alt="offerimage"
              src="OfferLogo.png"
            ></img>
            <p className="text-sm font-semibold ml-1">{couponName}</p>
          </div>

          <p className="text-xs">{couponDescription}</p>
        </div>
        <div className="border px-[11px] py-1 rounded-lg text-sm font-semibold">
          View
        </div>
      </div>
      {/* <Button onClick={toggleDrawer("bottom", true)}>view</Button> */}
      <Drawer
        anchor="bottom"
        open={state["bottom"]}
        onClose={toggleDrawer("bottom", false)}
      >
        {list("bottom")}
      </Drawer>
    </div>
  );
}
