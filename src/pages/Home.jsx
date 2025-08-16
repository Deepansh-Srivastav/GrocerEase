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
    const [selectedCompletedItems, setSelectedCompletedItems] = useState([]);

    function transferItemsToCompleted() {

        const newCompleted = [...completedItems, ...selectedPendingItems];

        const updatedPending = pendingItems?.filter((pendingItem) => {
            return !(selectedPendingItems?.some((selectedItem) => {
                return selectedItem?.id === pendingItem?.id;
            }))
        }
        )

        setCompletedItems(newCompleted);
        setPendingItems(updatedPending);
        setSelectedPendingItems([]);
    }

    function transferItemsToPending() {
        const selectedItems = [...selectedCompletedItems]

        setPendingItems((prev) => {
            return [...prev,
            ...selectedItems
            ]
        });

        const updatedCompletedList = completedItems?.filter((item) => {
            return !(selectedCompletedItems?.some((selectedItem) => {
                return selectedItem?.id === item?.id
            }))
        })

        setCompletedItems([...updatedCompletedList]);

        setSelectedCompletedItems([]);

    };

    function handleCompletedSelectedItems(product) {
        const isProductPresent = selectedCompletedItems?.some((item) => {
            return item?.id === product?.id;
        });

        if (!isProductPresent) {
            setSelectedCompletedItems((prev) => {
                return [
                    ...prev,
                    product
                ];
            });
        }
        else {
            const newArray = selectedCompletedItems?.filter((item) => {
                return item?.id !== product?.id;
            });
            setSelectedCompletedItems(() => {
                return [
                    ...newArray
                ];
            });

        };
    };

    function handleSelectedItems(product) {
        const isDuplicateItem = selectedPendingItems.some(item => item.id === product.id);

        if (isDuplicateItem) {
            setSelectedPendingItems(prev => prev.filter(item => item.id !== product.id));
        } else {
            setSelectedPendingItems(prev => [...prev, product]);
        }
    }

    console.log(" items are - ", selectedCompletedItems);

    return (
        <Box sx={{
            width: '100%',
            height: "auto",
            maxWidth: "1500px",
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            margin: "100px 0 100px 0"
        }}>
            <LeftCard items={pendingItems} handleSelectedItems={handleSelectedItems} selectedPendingItems={selectedPendingItems} />
            <Control transferToCompleted={transferItemsToCompleted} selectedPendingItems={selectedPendingItems} selectedCompletedItems={selectedCompletedItems} transferItemsToPending={transferItemsToPending} />
            <RightCard items={completedItems} selectedCompletedItems={selectedCompletedItems} handleCompletedSelectedItems={handleCompletedSelectedItems} />

        </Box>
    );
};

export default Home;