import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const Navbar = () => {
    return (
        <AppBar
            position="static"
            elevation={0}
            sx={{
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                borderBottom: "1px solid rgba(255, 255, 255, 0.1)"
            }}
        >
            <Toolbar sx={{ minHeight: "70px !important", px: { xs: 2, md: 4 } }}>
                {/* Brand Logo / Name */}
                <Typography
                    variant="h5"
                    component="div"
                    sx={{
                        flexGrow: 1,
                        fontWeight: 700,
                        cursor: "pointer",
                        letterSpacing: "-0.025em",
                        fontSize: { xs: "1.5rem", md: "1.75rem" },
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                        transition: "all 0.2s ease",
                        "&:hover": {
                            transform: "scale(1.02)"
                        }
                    }}
                >
                    🛒 GrocerEase
                </Typography>

                {/* Login / Signup Button */}
                <Box>
                    <Button
                        variant="contained"
                        sx={{
                            fontWeight: 600,
                            borderRadius: "12px",
                            px: 3,
                            py: 1.2,
                            textTransform: "none",
                            fontSize: "0.95rem",
                            background: "rgba(255, 255, 255, 0.15)",
                            backdropFilter: "blur(10px)",
                            border: "1px solid rgba(255, 255, 255, 0.2)",
                            color: "white",
                            transition: "all 0.3s ease",
                            "&:hover": {
                                background: "rgba(255, 255, 255, 0.25)",
                                transform: "translateY(-2px)",
                                boxShadow: "0 8px 25px rgba(0, 0, 0, 0.2)"
                            },
                            "&:active": {
                                transform: "translateY(0)"
                            }
                        }}
                    >
                        Sign In
                    </Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;