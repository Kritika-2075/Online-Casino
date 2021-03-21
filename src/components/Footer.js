import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    textAlign: 'center',
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 50,
    fontSize: '18px',
    fontWeight: 'bond',
    padding: '5px 0px 5px 0px',
    position: 'fixed',
    bottom: 0,
    width: '100%',
  },
});

export default function Footer() {
  const classes = useStyles();
  return (

    <div className={classes.root}>
      <hr />

         © 2020, Casino, All Right Reserved
    </div>
  )
}
