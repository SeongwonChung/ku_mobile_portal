import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '100%',
    },
  },
}));

export default function SearchField() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <Input 
      id="standard-basic" 
      label="Search"
      placeholder="검색어를 입력하세요"
      fullWidth={true}
      />
    </form>
  );
}
