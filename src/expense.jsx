import React, {useState} from "react"

function ExpenseTracker() {

    const [balance, setBalance] = useState(1000);
    const [spent, setSpent] = useState(500);

    //inputs
    const [amount, setAmount] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [date, setDate] = useState("");

    const [transactions, setTransactions] = useState([]);

    const handleAddExpense = () => {
        const numAmount = Number(amount);

        if(!numAmount) {
            alert("Please enter a valid amount!");
            return;
        }

        setSpent(prev => prev + numAmount);
        setBalance(prev => prev - numAmount);

        setTransactions(prev=>[...prev, {
                                            amount:numAmount,
                                            description,
                                            category,
                                            date,
                                            type: "expense"
                                        }])

        setAmount("");
        setDescription("");
        setCategory("");
        setDate("");
    }

    const handleAddIncome = () => {
        const numAmount = Number(amount);

        if(!numAmount) {
            alert("Please enter a valid amount!");
            return;
        }

        setBalance(prev => prev + numAmount);

        setTransactions(prev=>[...prev, {
                                            amount:numAmount,
                                            description,
                                            category,
                                            date,
                                            type: "income"
                                        }])

        setAmount("");
        setDescription("");
        setCategory("");
        setDate("");
    }

    return(
        <div className="expense-container">

            <h1>Smart Expense</h1>

            <div className="balance-card">
                <label>Available Balance</label> <br />
                <span><b>₹{balance}</b></span>
            </div>

            <div className="expense-card">
                <label>Spent</label> <br />
                <span><b>₹{spent}</b></span>
            </div>

            <br />

            <h2>Add Expense</h2>
            <div className="expense-layout">
                <p>Enter the Amount</p>
                <input className="text-box" 
                    value={amount} 
                    type="number" 
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="Enter the amount"/>

                <p>Add Description</p>
                <input className="text-box"
                    value={description}
                    type="text"
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Enter the description"/>

                <p>Choose Category</p>
                <input className="text-box"
                    value={category}
                    type="text"
                    onChange={(e) => setCategory(e.target.value)}
                    placeholder="Ex: Food, Travel etc..."/>

                <p>Select the Date</p>
                <input className="text-box"
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}/>
                <br /> <br />
                <button className="expense-button" onClick={handleAddExpense}>Add Expense</button>
            </div>

            <br />

            <h2>Add Income</h2>
            <div className="income-layout">
                <p>Enter the Amount</p>
                <input className="text-box" 
                    value={amount} 
                    type="number" 
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="Enter the amount"/>

                <p>Add Description</p>
                <input className="text-box"
                    value={description}
                    type="text"
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Enter the description"/>

                <p>Choose Category</p>
                <input className="text-box"
                    value={category}
                    type="text"
                    onChange={(e) => setCategory(e.target.value)}
                    placeholder="Ex: Food, Travel etc..."/>

                <p>Select the Date</p>
                <input className="text-box"
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}/>
                <br /> <br />
                <button className="income-button" onClick={handleAddIncome}>Add Income</button>
            </div>

            <br />

            <h2>Transaction History</h2>
            <div className="history-layout">
                {transactions.length ===0 ? (
                    <p>No Transactions yet.</p>
                ) : (
                    transactions.map((tx, index) =>(
                        <div key={index} className="history-card">
                            <h4 style={{color: tx.type=== "expense" ? "red" : "green"}}>
                                {tx.type === "expense" ? "Expense" : "Income"}
                            </h4>
                            <p><b>₹{tx.amount}</b></p>
                            <p><b>{tx.description}</b></p>
                            <p><b>Category: {tx.category}</b></p>
                            <p><b>Date: {tx.date}</b></p>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

export default ExpenseTracker