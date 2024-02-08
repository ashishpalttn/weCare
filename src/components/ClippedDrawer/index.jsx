import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import PrimarySearchAppBar from "../PrimarySearchAppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import MailIcon from "@mui/icons-material/Mail";
import { Outlet } from "react-router-dom";
import { Collapse } from "@mui/material";
import NewLink from "../Link";

const drawerWidth = 240;

export default function ClippedDrawer() {
  const [subPatient, setSubPatient] = React.useState(false);
  const [subReport, setSubReport] = React.useState(false);
  const [subDoctor, setSubDoctor] = React.useState(false);
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <PrimarySearchAppBar />
      export
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth - 40,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <ListItem disablePadding>
          <NewLink
            to="/view_patient"
            component={
              <ListItemButton>
                <ListItemIcon>
                  <MailIcon />
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
              </ListItemButton>
            }
          ></NewLink>
        </ListItem>
        <ListItem
          disablePadding
          onClick={() => {
            setSubPatient(!subPatient);
          }}
        >
          <ListItemButton>
            <ListItemIcon>
              <MailIcon />
            </ListItemIcon>
            <ListItemText primary="Patient" />
            {!subPatient ? <ExpandMoreIcon /> : <ExpandLessIcon />}
          </ListItemButton>
        </ListItem>
        <Box sx={{ overflow: "auto" }}>
          <Collapse in={subPatient}>
            <List>
              {[
                { btnName: "Add Patient", to: "/add_patient" },
                { btnName: "View Patients", to: "/view_patient" },
              ].map((child, index) => (
                <NewLink
                  to={child.to}
                  component={
                    <ListItem key={child} disablePadding>
                      <ListItemButton>
                        <ListItemIcon></ListItemIcon>
                        <ListItemText primary={child.btnName} />
                      </ListItemButton>
                    </ListItem>
                  }
                />
              ))}
            </List>
          </Collapse>
        </Box>
        <ListItem disablePadding onClick={() => setSubReport(!subReport)}>
          <ListItemButton>
            <ListItemIcon>
              <MailIcon />
            </ListItemIcon>
            <ListItemText primary="Report" />
            {!subReport ? <ExpandMoreIcon /> : <ExpandLessIcon />}
          </ListItemButton>
        </ListItem>
        <Box sx={{ overflow: "auto" }}>
          <Collapse in={subReport}>
            <List>
              {[
                { btnName: "Add Report", to: "/add_report" },
                { btnName: "View Reports", to: "/view_report" },
              ].map((child, index) => (
                <NewLink
                  to={child.to}
                  component={
                    <ListItem key={child} disablePadding>
                      <ListItemButton>
                        <ListItemIcon></ListItemIcon>
                        <ListItemText primary={child.btnName} />
                      </ListItemButton>
                    </ListItem>
                  }
                />
              ))}
            </List>
          </Collapse>
        </Box>
        <ListItem
          disablePadding
          onClick={() => {
            setSubDoctor(!subDoctor);
          }}
        >
          <ListItemButton>
            <ListItemIcon>
              <MailIcon />
            </ListItemIcon>
            <ListItemText primary="Doctor" />
            {!subDoctor ? <ExpandMoreIcon /> : <ExpandLessIcon />}
          </ListItemButton>
        </ListItem>
        <Box sx={{ overflow: "auto" }}>
          <Collapse in={subDoctor}>
            <List>
              {[
                { btnName: "Add Doctor", to: "/add_doctor" },
                { btnName: "View Doctors", to: "/view_doctor" },
              ].map((child, index) => (
                <NewLink
                  to={child.to}
                  component={
                    <ListItem key={child} disablePadding>
                      <ListItemButton>
                        <ListItemIcon></ListItemIcon>
                        <ListItemText primary={child.btnName} />
                      </ListItemButton>
                    </ListItem>
                  }
                />
              ))}
            </List>
          </Collapse>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 2 }}>
        <Toolbar />
        <Outlet />
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem
          ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do
        </Typography>
      </Box>
    </Box>
  );
}
