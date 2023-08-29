import React,{useState} from 'react';
import { Box, Typography, styled } from '@mui/material';
import Balance from './compents/Balance';
import ExpenseCard from './compents/ExpenseCard';
import NewTransactions from './compents/NewTransaction';
import Transaction from './compents/Transaction';

const Header = styled(Typography)`
    font-size : 30px;
    color : blue;
    text-transform : uppercase;
    text-align : center;

`

const Component = styled(Box)`

    display:flex;
    background:#e5e4e0;
    padding:10px;
    margin:auto;
    &>div{
      height:70vh;
      width:50%;
      padding:10px;
    }

`
export default function Form() {
  const [transaction, setTransaction] = useState([]);
  return (
   <>
      <Header>Welcome To Expense Tracker</Header>
      <Component>
        <Box>
          <Balance transaction={transaction}/>
          <ExpenseCard transaction={transaction}/>
          <NewTransactions setTransaction={setTransaction}/>
        </Box>
        <Box>
           <Transaction transaction={transaction} setTransaction={setTransaction}/>
        </Box>
      </Component>
   </>
  );
}
