import React, { useState } from "react";
import { Box, TextField, Button, Paper, Stack } from "@mui/material";

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
            elevation={3}
            sx={{
                p: 2,
                mb: 3,
                borderRadius: 2,
                bgcolor: "background.paper",
            }}
        >
            <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{ display: "flex", alignItems: "center", gap: 2 }}
            >
                <TextField
                    label="Item Name"
                    variant="outlined"
                    size="small"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    sx={{ flex: 2 }}
                />
                <TextField
                    label="Qty"
                    type="number"
                    variant="outlined"
                    size="small"
                    inputProps={{ min: 1 }}
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    sx={{ width: 100 }}
                />
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    sx={{ px: 3, borderRadius: 2 }}
                >
                    Add
                </Button>
            </Box>
        </Paper>
    );
}
