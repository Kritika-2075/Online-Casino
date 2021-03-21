import React, {useCallback,useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Avatar } from '@material-ui/core';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  totalAmount: {
      marginRight: theme.spacing(2),
  }
}));


export default function Header({Balance, onBalanceChange, slotList, onSlotChange}) {
  const classes = useStyles();
  const [open,setOpen] = useState(false);
  const [log, setLog]=useState(false);
    
const handleInputChange = useCallback(event => {
    onBalanceChange(event.target.value)
  }, [onBalanceChange])
  
  let x=Balance.valueOf();
  let obj={};
  const[userName,setUserName] = useState("");

  const addUser=(userName,setLog)=>{
    let user=localStorage.getItem(userName);
    if(user==null){
       obj = {
          slot  : [],
          balance : 0.00,
        }
    
    }else{
      obj=JSON.parse(user);
    }
    onBalanceChange(obj.balance);
    onSlotChange(obj.slot);
    
    localStorage.setItem(userName,JSON.stringify(obj));
    console.log(userName);
    localStorage.setItem("login",userName);
  }
  
  return (
    <div className={classes.root}>
      
        <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Online Casino
          </Typography>
          <Typography variant="h6" className={classes.totalAmount}>
            ${x.toFixed(2)}
          </Typography>

          <Dialog
                    open={open}
                    onClose={()=>{
                        setOpen(false);
                    }}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                  >
                    <DialogTitle id="alert-dialog-title">Login</DialogTitle>
                    <DialogContent>
                      <DialogContentText id="alert-dialog-description">
                    
                        <FormControl className={classes.margin}>
                            <InputLabel htmlFor="input-with-icon-adornment">Enter Your Name</InputLabel>
                            <Input onChange={(e)=>{
                                setUserName(e.target.value);
                            }} required
                            id="input-with-icon-adornment" startAdornment={
                                <InputAdornment position="start">
                                <AccountCircle />
                                </InputAdornment>
                            }
                        />
                        </FormControl>
                            
               
            
                    </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                    <Button variant="contained" onClick={()=>{
                         setOpen(false);
                        setLog(true);
                        addUser(userName,1);
                       
                        // addValueToLocal(userName);
                      }} color="secondary">
                        Login 
                      </Button>
                      
                      <Button variant="contained" onClick={()=>{
                        setOpen(false);
                      }} color="">
                        Cancel
                       
                      </Button>
                      
                    </DialogActions>
                  </Dialog>
            
         {
           localStorage.getItem("login") == null ? <Button color="inherit" onClick={()=>{
            setOpen(true);

}}>  
Login
</Button> : <Button color="inherit" onClick={()=>{
            localStorage.removeItem("login");
            onSlotChange([]);
            onBalanceChange(0.00);
          

}}>  <Avatar src="/broken-image.jpg" />Logout
</Button>
         }
          
        </Toolbar>
      </AppBar>
    </div>
  );
}