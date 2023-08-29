import React, { useState } from "react";
import { Box, Button, TextField, Typography, styled, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { getDatabase, ref, push } from "firebase/database"; // Import the required methods for Firebase Realtime Database
import { getAuth } from "firebase/auth";

const Container = styled(Box)`
    display: flex;
    flex-direction: column;
    & > div, & > button {
        margin-top: 30px;
    }
`;

const NewTransactions = ({ setTransaction }) => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState();
    const [type, setType] = useState('');

    const auth = getAuth();

    const addTransaction = () => {
        const transaction = {
            id:auth.currentUser.uid,
            type: type,
            text: text,
            amount: +amount
        };

        // Initialize Firebase and create a reference to the "transactions" path
        const database = getDatabase();
        const transactionsRef = ref(database, "expenses");

        // Push the new transaction data to the database
        push(transactionsRef, transaction);

        // Clear the input fields after successfully adding the transaction
        setText('');
        setAmount('');
        setType('');

        // Optionally, you can update the local state with the new transaction
        setTransaction(prevState => [transaction, ...prevState]);
    };

    return (
        <>
            <Container className="text-center">
                <Typography variant="h5" className="text-center mt-3 mb-2">New Transaction</Typography>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Type</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Age"
                        onChange={(e) => setType(e.target.value)}
                        value={type} // Set the value prop for controlled component
                    >
                        <MenuItem value="Expense">Expense</MenuItem>
                        <MenuItem value="Income">Income</MenuItem>
                    </Select>
                </FormControl>
                <TextField label="Enter Expense" required onChange={(e) => setText(e.target.value)} value={text} />
                <TextField label="Enter Amount" required onChange={(e) => setAmount(e.target.value)} value={amount} />
                <Button variant="contained" onClick={addTransaction}>Add Transaction</Button>
            </Container>
        </>
    );
};

export default NewTransactions;
