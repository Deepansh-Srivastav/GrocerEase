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
    const [selectedItems, setSelectedItems] = useState([]);

    function transferItemsToCompleted() {

        const newCompleted = [...completedItems, ...selectedItems];

        const updatedPending = pendingItems.filter(
            (item) => newCompleted.every((completed) => completed.id !== item.id)
        );

        // 3. Update state
        setCompletedItems(newCompleted);
        setPendingItems(updatedPending);
        setSelectedItems([]);
    }

    function handleSelectedItems(product) {
        const isDuplicateItem = selectedItems.some(item => item.id === product.id);

        if (isDuplicateItem) {
            setSelectedItems(prev => prev.filter(item => item.id !== product.id));
        } else {
            setSelectedItems(prev => [...prev, product]);
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
            <LeftCard items={pendingItems} handleSelectedItems={handleSelectedItems} selectedItems={selectedItems} />
            <Control transferToCompleted={transferItemsToCompleted} selectedItems={selectedItems} />
            <RightCard items={completedItems} />

        </Box>
    );
};

export default Home;