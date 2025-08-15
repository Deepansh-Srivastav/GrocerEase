import { Box, Button } from '@mui/material'
import React from 'react'

const Control = () => {
  return (
    <Box sx={{
      display: "flex",
      flexDirection: 'column'
    }}>
      <Button
        sx={{
          background: "white",
          fontSize: "26px",
          marginBottom: "20px"
        }}>
        {"->"}
      </Button>

      <Button sx={{
        background: "white",
        fontSize: "26px"
      }}>
        {"<-"}
      </Button>
    </Box>
  )
}

export default Control
