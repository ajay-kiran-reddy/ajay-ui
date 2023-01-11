import * as React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Avatar,
  Button,
  Tooltip,
  MenuItem,
  Grid,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AdbIcon from "@mui/icons-material/Adb";
import { storeUserDetails } from "../../features/authReducer";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import {
  ABOUT,
  ACCOUNT,
  ACHIEVEMENTS,
  APPS,
  CONTACT,
  DASHBOARD,
  EDUCATION,
  EXPERIENCE,
  LOGOUT,
  PERSONALS,
  PROFILE,
  SKILLS,
} from "../../constants/appConstants";
import "../../App.css";
import CodeIcon from "@mui/icons-material/Code";

const navTabs = [APPS, PERSONALS, ABOUT];
const settings = [PROFILE, ACCOUNT, DASHBOARD, LOGOUT];

const aboutTabs = [ABOUT, EXPERIENCE, SKILLS, ACHIEVEMENTS, EDUCATION, CONTACT];

const ResponsiveAppBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useLocation();
  const [pages, setPages] = React.useState(Array<string>);
  const [activeTab, setActiveTab] = React.useState(0);
  const contactRef: any = React.useRef(null);

  React.useEffect(() => {
    params.pathname.includes("/about")
      ? setPages(aboutTabs)
      : setPages(navTabs);
  }, [params]);

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleNavLinks = (navLink: string, index: number) => {
    if (navLink === APPS) {
      navigate("/apps");
    } else if (navLink === ABOUT) {
      navigate("/about");
    } else if (navLink === SKILLS) {
      navigate("/about/skills");
    } else if (navLink === ACHIEVEMENTS) {
      navigate("/about/achievements");
    } else if (navLink === EDUCATION) {
      navigate("/about/education");
    } else if (navLink === CONTACT) {
      navigate("/about/contact");
    } else if (navLink === EXPERIENCE) {
      navigate("/about/experience");
    }
    setActiveTab(index);
    // contactRef.current.scrollIntoView();
  };

  const handleCloseUserMenu = (setting: String) => {
    setAnchorElUser(null);
    if (setting === LOGOUT) {
      dispatch(storeUserDetails(null));
      navigate("/");
    }
  };

  return (
    <AppBar position="static" className="appBar">
      <div style={{ marginTop: "-0.5rem" }}>
        <Toolbar className="appBar">
          <Grid container spacing={3}>
            <Grid item xs={1} style={{ textAlign: "end" }}>
              <CodeIcon
                sx={{ display: { xs: "none", md: "flex" }, mr: 2 }}
                style={{ marginTop: "0.3rem" }}
              />
            </Grid>
            <Grid item xs={5} style={{ textAlign: "left" }}>
              <Typography
                variant="h6"
                noWrap
                component="a"
                href={params.pathname === "/about*" ? "/about" : "/home"}
                sx={{
                  mr: 5,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                {params.pathname === "/about*"
                  ? "AJAY KIRAN REDDY"
                  : "AJ BRANDS"}
              </Typography>
            </Grid>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page, i) => (
                  <MenuItem
                    style={{}}
                    key={page}
                    onClick={(page: any) => handleNavLinks(page, i)}
                  >
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Grid>

          <CodeIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            AJAY KIRAN REDDY
          </Typography>

          <Grid item xs={6} style={{ textAlign: "end" }}>
            <Box
              sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
              style={{ textAlign: "end", width: "100%" }}
            >
              {pages.map((page, i) => (
                <Button
                  disabled={params.pathname === "/"}
                  key={page}
                  style={{
                    border: i === activeTab ? "1px solid white" : "",
                    borderRadius: "10px",
                    marginLeft: "1rem",
                    padding: 3,
                  }}
                  onClick={() => handleNavLinks(page, i)}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page}
                </Button>
              ))}
            </Box>
          </Grid>
          {params.pathname !== "/about*" && (
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="AJAY" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem
                    key={setting}
                    onClick={() => handleCloseUserMenu(setting)}
                  >
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          )}
        </Toolbar>
      </div>
    </AppBar>
  );
};
export default ResponsiveAppBar;
