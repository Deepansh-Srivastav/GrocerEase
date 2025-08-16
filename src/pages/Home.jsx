import LeftCard from '../components/LeftCard';
import RightCard from '../components/RightCard';
import { Box } from '@mui/material'
import { useState, useEffect } from 'react';
import Control from '../components/Control';

const items = [
    { id: 1, name: "Milk" },
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
            return;
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

    useEffect(() => {
        if (selectedPendingItems?.length > 0) {
            transferItemsToCompleted();
        }
        else if (selectedCompletedItems?.length > 0) {
            transferItemsToPending()
        }
    }, [selectedPendingItems, selectedCompletedItems])

    return (
        <Box sx={{
            width: '100%',
            height: "auto",
            maxWidth: "1500px",
            display: "flex",
            flexDirection: { md: "row", sm: "column", xs: "column" },
            justifyContent: "space-evenly",
            alignItems: "center",
            margin: "50px 0 30px 0"
        }}>
            <LeftCard items={pendingItems} handleSelectedItems={handleSelectedItems} selectedPendingItems={selectedPendingItems} />

            <RightCard items={completedItems} selectedCompletedItems={selectedCompletedItems} handleCompletedSelectedItems={handleCompletedSelectedItems} />

        </Box>
    );
};

export default Home;