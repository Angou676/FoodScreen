import React from 'react'
import { TextField, } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './search.css'

const theme = createTheme({
  palette: {
    primary: {
      main: '#00',
    },
  },
  components: {
    MuiInput: {
      styleOverrides: {
        input: {
          paddingLeft: '15px',
        },
      }
    },
  },
});


const Search = () => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <TextField
          variant="standard"
          className='search_blck'
          placeholder="Search foor venue..."
          InputProps={{
            disableUnderline: true,
            endAdornment: (
              <SearchIcon
                className='sarch_icon'
              />
            ),
            style: {
              borderRadius: "20px",
              fontSize: "15px",
              width: "94%",
              margin: 'auto',
              height: "100%",
              marginTop: '20px',
              boxShadow: "0px 2px 20px rgba(0, 0, 0, 0.05)",
              border: '1px solid  #D9D9D9 '
            },
          }}
        />
      </ThemeProvider>
    </div>
  )
}

export default Search