import React, { useState } from "react";
import { Box, TextField, Button, Paper } from "@mui/material";

export default function AddItemForm({ onAdd }) {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);

    function handleSubmit(e) {
        e.preventDefault();
        if (!name.trim()) return;
        onAdd(name, quantity);
        setName("");
        setQuantity(1);
    }

    return (
        <Paper
            elevation={0}
            sx={{
                p: 3,
                mb: 3,
                borderRadius: "20px",
                background: "linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)",
                border: "1px solid rgba(226, 232, 240, 0.8)",
                boxShadow: "0 10px 25px rgba(0, 0, 0, 0.08), 0 4px 10px rgba(0, 0, 0, 0.06)",
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                "&:hover": {
                    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.12), 0 8px 16px rgba(0, 0, 0, 0.08)",
                    transform: "translateY(-2px)"
                }
            }}
        >
            <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{
                    display: "flex",
                    alignItems: "flex-end",
                    gap: 2,
                    flexWrap: { xs: "wrap", sm: "nowrap" }
                }}
            >
                <TextField
                    label="Add new item"
                    variant="outlined"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    sx={{
                        flex: { xs: "1 1 100%", sm: 2 },
                        "& .MuiOutlinedInput-root": {
                            borderRadius: "12px",
                            backgroundColor: "white",
                            transition: "all 0.2s ease",
                            "&:hover": {
                                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)"
                            },
                            "&.Mui-focused": {
                                boxShadow: "0 4px 12px rgba(59, 130, 246, 0.15)",
                                "& fieldset": {
                                    borderColor: "#3b82f6",
                                    borderWidth: "2px"
                                }
                            }
                        },
                        "& .MuiInputLabel-root": {
                            fontWeight: 500,
                            color: "#64748b"
                        }
                    }}
                />
                <TextField
                    label="Quantity"
                    type="number"
                    variant="outlined"
                    inputProps={{ min: 1, max: 99 }}
                    value={quantity}
                    onChange={(e) => setQuantity(Number(e.target.value))}
                    sx={{
                        width: { xs: "100px", sm: "100px" },
                        "& .MuiOutlinedInput-root": {
                            borderRadius: "12px",
                            backgroundColor: "white",
                            transition: "all 0.2s ease",
                            "&:hover": {
                                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)"
                            },
                            "&.Mui-focused": {
                                boxShadow: "0 4px 12px rgba(59, 130, 246, 0.15)",
                                "& fieldset": {
                                    borderColor: "#3b82f6",
                                    borderWidth: "2px"
                                }
                            }
                        },
                        "& .MuiInputLabel-root": {
                            fontWeight: 500,
                            color: "#64748b"
                        }
                    }}
                />
                <Button
                    type="submit"
                    variant="contained"
                    disabled={!name.trim()}
                    sx={{
                        px: 4,
                        py: 1.5,
                        borderRadius: "12px",
                        fontWeight: 600,
                        textTransform: "none",
                        fontSize: "0.95rem",
                        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                        minWidth: "100px",
                        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                        "&:hover": {
                            background: "linear-gradient(135deg, #5a67d8 0%, #6b46c1 100%)",
                            transform: "translateY(-2px)",
                            boxShadow: "0 8px 25px rgba(102, 126, 234, 0.4)"
                        },
                        "&:active": {
                            transform: "translateY(0)"
                        },
                        "&:disabled": {
                            background: "#e2e8f0",
                            color: "#94a3b8",
                            transform: "none",
                            boxShadow: "none"
                        }
                    }}
                >
                    ➕ Add
                </Button>
            </Box>
        </Paper>
    );
}