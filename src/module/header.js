import { DashUl,DashLi } from "../component/style";
import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";

const Header = () =>{
    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(1),
          width: 'auto',
        },
      }));
      
      const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }));
      const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        '& .MuiInputBase-input': {
          padding: theme.spacing(1, 1, 1, 0),
          // vertical padding + font size from searchIcon
          paddingLeft: `calc(1em + ${theme.spacing(4)})`,
          transition: theme.transitions.create('width'),
          width: '100%',
          [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
              width: '20ch',
            },
          },
        },
      }));  
    const navigate = useNavigate();
    const removeToken=()=>{
        localStorage.removeItem("token")
        navigate('/loginMUI')
    console.log("hiii login",navigate)
    }  
 
    return(
        <div>
            <DashUl>
                <DashLi><a href="">Dashboard</a></DashLi>
                <DashLi><a href="/contact" >Contact</a></DashLi>
                <DashLi><a href= "/about" >About us</a></DashLi>
                <DashLi><a href= "/login" >Login</a></DashLi>
                <DashLi><a href= "/modals" >Modal</a></DashLi>
                <DashLi><a href= "/loginMUI" >LoginMUI</a></DashLi>
                <DashLi><a href= "/registerMUI" >RegisterMUI</a></DashLi>
                <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search???"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
                  <Button onClick={removeToken}>Logout</Button> 

            </DashUl>

        </div>
    )
}
export default Header;