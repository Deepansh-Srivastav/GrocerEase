import { Box, Button } from '@mui/material'
import React from 'react'

const Control = ({ selectedPendingItems, transferToCompleted }) => {

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
        }}
        disabled={selectedPendingItems?.length > 0 ? false : true}
        onClick={transferToCompleted}
      >
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
