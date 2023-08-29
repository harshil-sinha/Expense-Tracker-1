import { Box, Divider, List, Typography } from "@mui/material"
import TransactionData from "./TransactionData"

const Transaction = ({transaction ,setTransaction}) =>{
    return (
        <>
            <Box>
                <Typography variant="h5" className="mt-2">Transaction History</Typography>
                <hr />
                <List>
                    {
                        transaction.map((data)=>(
                            <TransactionData data={data} setTransaction={setTransaction} transaction={transaction}/>
                        ))
                    
                    }
                </List>
            </Box>
        </>
    )
}
export default Transaction