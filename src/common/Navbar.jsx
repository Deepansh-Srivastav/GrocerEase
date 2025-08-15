import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const Navbar = () => {
    return (
        <AppBar position="static" sx={{ backgroundColor: "#1976d2" }}>
            <Toolbar>
                {/* Brand Logo / Name */}
                <Typography
                    variant="h6"
                    component="div"
                    sx={{ flexGrow: 1, fontWeight: "bold", cursor: "pointer" }}
                >
                    GrocerEase
                </Typography>

                {/* Login / Signup Button */}
                <Box>
                    <Button
                        variant="contained"
                        color="secondary"
                        sx={{ fontWeight: "bold" }}
                    >
                        Login / Signup
                    </Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;