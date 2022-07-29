import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import { LightMode, DarkMode } from "@mui/icons-material/";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import { CardMedia, Switch, useTheme } from "@mui/material";

import logo from "/assets/images/marvel_logo.png";
import { SearchBar } from "../SearchBar";

type propsNav = {
  toggleTheme: () => void;
  pages: string[];
};

export const Navbar = ({ toggleTheme, pages }: propsNav) => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const theme = useTheme();

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="static"
      sx={{
        background: theme.navBar.background,
        height: "72px",
        justifyContent: "center",
        "z-index": "1",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              justifyContent: "space-between",
            }}
            color="secondary.main"
          >
            {pages.length > 0 && (
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
            )}
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
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                    <Link to={page.toLowerCase()}>{page}</Link>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/* " <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />" */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
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
            {/* LOGO */}
            <img
              src="https://www.freepnglogos.com/uploads/marvel-logo-png/image-marvel-logo-marvel-microheroes-wiki-fandom-12.png"
              alt=""
            />
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                <Link to={page.toLowerCase()}>{page}</Link>
              </Button>
            ))}
          </Box>
          <SearchBar />
          <Box />

          <Box
            sx={{
              marginLeft: "1rem",
              display: "flex",
              flexGrow: 0,
              alignItems: "center",
            }}
          >
            <LightMode fontSize="small" />
            <Switch
              color="secondary"
              onChange={toggleTheme}
              checked={theme.palette.mode === "dark"}
            />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
