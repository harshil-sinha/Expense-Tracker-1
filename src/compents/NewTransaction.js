import { Box, Button, TextField, Typography,styled} from "@mui/material";
import { useState } from "react";

const Container = styled(Box)`

    display: flex;
    flex-direction: column;
    &>div, &>button{
        margin-top: 30px;
    }
`


const NewTransactions = ({setTransaction}) =>{
    const [text, setText] = useState('');
    const [amount,setAmount] = useState();

    const addTransaction = () =>{
        const transaction = {
            id: Math.floor(Math.random()*1000000),
            text:text,
            amount:+amount
        }

        setTransaction(prevState => [transaction,...prevState])
    }

    return (
        <>
            <Container className="text-center">
                <Typography variant="h5" className="text-center mt-3 mb-2">New Transaction</Typography>
                <TextField label="Enter Expense" required onChange={(e) => setText(e.target.value)}/>
                <TextField label="Enter Amount" required onChange={(e) => setAmount(e.target.value)}/>
                <Button variant="contained" onClick={addTransaction}>Add Transaction</Button>

            </Container>
        </>
    )
}
export default NewTransactions;