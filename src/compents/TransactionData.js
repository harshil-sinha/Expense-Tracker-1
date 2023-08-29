import React from "react";
import { ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { styled } from "@mui/system"; // Correct import for the styled function
import DeleteIcon from '@mui/icons-material/Delete';

const Detail = styled(ListItem)`
    margin-top: 10px;
`;

const TransactionData = ({ data, setTransaction, transaction }) => { 
    const clr = data.amount > 0 ? 'Green' : 'Red';

    const deleteTransaction = (id) => {
        setTransaction(transaction.filter(data => data.id !== id)); 
    }

    return (
        <>
            <Detail style={{ background: clr, color: "#fff" }}>
                <ListItemText>{data.type}</ListItemText>
                <ListItemText>{data.text}</ListItemText>
                <ListItemText>{data.amount}</ListItemText>
                <ListItemIcon>
                    <DeleteIcon onClick={() => deleteTransaction(data.id)} />
                </ListItemIcon>
            </Detail>
        </>
    );
}

export default TransactionData;
