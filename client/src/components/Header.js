import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import AdbIcon from '@mui/icons-material/Adb';
import { Stack } from '@mui/system';
import { Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import styles from '../asserts/stylesheet/Header.module.css'
import { useUser } from '../context/UserContext';
import logo from '../asserts/images/logo3.png'
import { useNotification } from '../context/NotificationContext';

const items = [
  { id: 1, text: 'Latest event' },
  { id: 2, text: 'Search' },
  { id: 3, text: 'Community' },
  { id: 4, text: 'About us' },
];


const Header = () => {

  const {auth,signOut} = useUser();
  const {subscribeEvent,sendEventMessage,sendUserMessage,disconnect} = useNotification();

  const TESTsendNotificiton =()=>{
    // sendEventMessage("1","Send Test")
    sendUserMessage("ken@test.com","User test")
  }

  const TESTSubscribe = ()=>{
    subscribeEvent(5)
  }

  const logout = ()=>{
    signOut()
    disconnect()
  }


  return (
    <div className={styles["header-container"]}>
      <Container sx={{ display: "flex", padding: 3 }} className={styles["header-container-inner"]}>

        <Box className={styles["left"]}>
          <Stack direction="row" spacing={2}>
            <img src={logo}/>
            <Typography className={styles["header-logo-font"]}>
              Event Plaza
            </Typography>
          </Stack>
        </Box>

        <div className={styles["mid"]}>
          {
            items.map(item => {
              return (
                <Button key={item.id} className={styles["header-mid-btn"]}>
                  <Typography className="header-font" sx={{ color: '#7780A1', fontSize: 'small' }}>
                    {item.text}
                  </Typography>
                </Button>
              )
            })
          }
        </div>

        <div className={styles["right"]}>
          {auth === null?(            
          <Stack className={styles["right-stack"]} direction="row" spacing={2}>
            <Link to="/login"><Button variant="outlined" sx={{ borderRadius: 2 }} className="header-btn">Sign in</Button></Link>
            <Link to="/register"><Button variant="contained" sx={{ borderRadius: 2 }} className="header-btn">Register</Button></Link>
          </Stack>):(
          <Stack className={styles["right-stack"]} direction="row" spacing={2}>
            <Button variant="outlined" sx={{ borderRadius: 2 }} onClick={logout} className="header-btn">Log out</Button>
            <Button variant="outlined" sx={{ borderRadius: 2 }} onClick={TESTSubscribe} className="header-btn">Test</Button>
            <Button variant="outlined" sx={{ borderRadius: 2 }} onClick={TESTsendNotificiton} className="header-btn">Send</Button>

          </Stack>

          )
          }
 
        </div>


      </Container>
    </div>
  )
}

export default Header