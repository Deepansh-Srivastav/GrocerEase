import LeftCard from '../components/LeftCard';
import RightCard from '../components/RightCard';
import { Box } from '@mui/material'
import { useState } from 'react';
import Control from '../components/Control';

const items = [
    { id: 1, name: "Milk" },
    { id: 2, name: "Bread" },
    { id: 3, name: "Eggs" },
    { id: 4, name: "Tomatoes" },
    { id: 5, name: "Onion" },
];

const Home = () => {

    const [pendingItems, setPendingItems] = useState(items);
    const [completedItems, setCompletedItems] = useState([]);
    const [selectedPendingItems, setSelectedPendingItems] = useState([]);

    function transferItemsToCompleted() {

        const newCompleted = [...completedItems, ...selectedPendingItems];

        const updatedPending = pendingItems.filter(
            (item) => newCompleted.every((completed) => completed.id !== item.id)
        );

        setCompletedItems(newCompleted);
        setPendingItems(updatedPending);
        setSelectedPendingItems([]);
    }

    function handleSelectedItems(product) {
        const isDuplicateItem = selectedPendingItems.some(item => item.id === product.id);

        if (isDuplicateItem) {
            setSelectedPendingItems(prev => prev.filter(item => item.id !== product.id));
        } else {
            setSelectedPendingItems(prev => [...prev, product]);
        }
    }

    console.log("Completed items are - ", completedItems);

    return (
        <Box sx={{
            width: '100%',
            height: "auto",
            maxWidth: "1500px",
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            marginTop: "100px"
        }}>
            <LeftCard items={pendingItems} handleSelectedItems={handleSelectedItems} selectedPendingItems={selectedPendingItems} />
            <Control transferToCompleted={transferItemsToCompleted} selectedPendingItems={selectedPendingItems} />
            <RightCard items={completedItems} />

        </Box>
    );
};

export default Home;