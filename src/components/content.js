// import React from 'react';
import React, {useCallback, useMemo, useState, useEffect} from 'react';
// import SlotM from './Slots';
import { makeStyles } from '@material-ui/core/styles';
import LocalPlayIcon from '@material-ui/icons/LocalPlay';
import Header from './Header';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { LineStyleTwoTone } from '@material-ui/icons';
import { Container } from '@material-ui/core';
const useStyles = makeStyles({
  table: {
    minWidth: 650,
    
    // width: 1300, 
    textAlign:'center',   
  },
  tableCell: {
    fontSize: '20px',
    textTransform: 'uppercase',
    letterSpacing: '0.03em',
    borderRadius: '3px',
    padding: '15px 15px',
    justifyContent: 'space-between',
    marginBottom: '25px',
    fontWeight:'bold',
    backgroundColor: '#f9fbe7',
  },
  containerButton: {
    alignContent: 'center',
    // margin: '6%',
    margin:'2% 45% 2% 45%',
  },
  
});
const useStyles2 = makeStyles((theme) => ({
    typography: {
      padding: theme.spacing(2),
      alignContent: 'center',
      margin: '14px',
    },
    buton: {
        margin: '13%',

    },
    root: {
          flexGrow: 1,
          marginTop: '20px',
        },
        paper: {
          height: 140,
          width: 100,
          textAlign: 'center',
        },
        control: {
          padding: theme.spacing(2),
        },
      button: {
        alignSelf: 'center',
      }
  }));
  

function createData(id,slot1,slot2, slot3, time) {
  return {id,slot1,slot2,slot3,time };
}


let balance=0.0;


function randomNumber(min, max){
    return Math.random()*(max-min)+min;
  }
  let a;
  let b;
  let c;
  let x;
  let y;
  let z;
  
export default function Content(){
    const classes = useStyles();
  let obj = null;

  if(localStorage.getItem("login") != null){
    obj = JSON.parse(localStorage.getItem(localStorage.getItem("login")));
    console.log(obj);
  }

    const [open,setOpen] = useState(false);

    const [slotList, setSlots] = useState(
       obj != null ? obj.slot : []);
    // let Balance=0.0;
    const [Balance, setBalance] = useState(
      obj != null ? obj.balance : 0.00
    );
    
    const [spacing, setSpacing] = React.useState(2);
    const classes2 = useStyles2();

    
    // const generateRandomNumber=()=>{
        a=randomNumber(1,9);
        b=randomNumber(1,9);
        c=randomNumber(1,9);
        
        x=a.toFixed(0);
        y=b.toFixed(0);
        z=c.toFixed(0);
        // }
        
      //   const calculate=({setBalance,setSlots,slotList,Balance})=>{
      const calculate=()=>{
        let a=randomNumber(1,9);
        let b=randomNumber(1,9);
        let c=randomNumber(1,9);
        
        let x=a.toFixed(0);
        let y=b.toFixed(0);
        let z=c.toFixed(0);
       
        //   calulate the balance according to random numbers.
        balance=balance-1;
          

          if((x===y) && (y===z)){
        
              balance=balance+5.00;
        
            }
            else if((x!=y)&&(y!=z)){
              //all different number does nothing
            }
            else if((x===y)||(y===z)||(z===z)){
        
                balance=balance+0.05;
            }
            else if((x===7)&&(y===7)&&(z===7)){
        
              balance=balance+10.00;
            
           }
           let obj;
           if(slotList.length==0)
           {
            obj = {id:0, slot1: x, slot2:y, slot3:z, time:""+new Date()}

           }
           else{
             obj = {id:slotList[slotList.length-1].id+1, slot1: x, slot2:y, slot3:z, time:""+new Date()}
           }
            slotList.push(obj);
            setBalance(balance);

            //if user is logged in then update data
            if(localStorage.getItem("login") != null){
              let userName = localStorage.getItem("login");
                let obj = JSON.parse(localStorage.getItem(userName));

                obj.slot = slotList;
                obj.balance = balance;

                localStorage.setItem(userName,JSON.stringify(obj));
            }
        }
        
    return (
        <div>
            <Header Balance={Balance} onBalanceChange={setBalance} slotList={slotList} onSlotChange={setSlots} />
            
           
        
    <Dialog
        open={open}
        onClose={()=>{
            setOpen(false);
        }}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Be a campion</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
        

       
    <Grid container className={classes2.root} spacing={2}>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={spacing}>
           
              <Grid item>
                  
                <Paper className={classes2.paper}>
                <Typography variant="h1">{x}</Typography>
             
                  </Paper> 
                
              </Grid>
              <Grid item>
                  
                <Paper className={classes2.paper}> 
                <Typography variant="h1">{y}</Typography>
                </Paper>
              </Grid>
  
              <Grid item>
                  
                <Paper className={classes2.paper}> 
                <Typography variant="h1">{z}</Typography>
                </Paper>
              </Grid>
            
          </Grid>
        </Grid>
        </Grid>
   

           </DialogContentText>
        </DialogContent>
        <DialogActions>
        <Button variant="contained" onClick={()=>{
            // calculate (setBalance,setSlots,slotList,Balance);
            

            calculate();
          }} color="primary">
            Spin 
          </Button>
          
          <Button variant="contained" onClick={()=>{
            setOpen(false);
            x=7;
            y=7;
            z=7;
            slotList.push({id:slotList[slotList.length-1].id+1, slot1: x, slot2:y, slot3:z, time:""+new Date()});

          }} >
            Debug
           
          </Button>
          <Button variant="contained" onClick={()=>{
              setOpen(false);
          }} color="secondary" autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
      <div className={classes.containerButton}>
        <Button variant="contained"  color="primary" onClick={()=>{
            setOpen(true);
            // slotList.push({id: 0}); 
        }}>
          Play Game
        </Button>
      </div>

      <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead >
          <TableRow className={classes.tableRow}>
            <TableCell className={classes.tableCell}>Id</TableCell>
            <TableCell className={classes.tableCell} align="right">Slot1</TableCell>
            <TableCell className={classes.tableCell} align="right">SLot2</TableCell>
            <TableCell className={classes.tableCell} align="right">Slot3</TableCell>
            <TableCell className={classes.tableCell} align="right">Time</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
              slotList.length > 0 ? 
          slotList.map((row) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="right">{row.slot1}</TableCell>
              <TableCell align="right">{row.slot2}</TableCell>
              <TableCell align="right">{row.slot3}</TableCell>
              <TableCell align="right">{row.time}</TableCell>
            </TableRow>
          )): <h3 className={{textAlign:'center'}}>"No Data Available"</h3>}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
    );
}
