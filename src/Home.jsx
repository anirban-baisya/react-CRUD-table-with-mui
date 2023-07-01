import {
    Backdrop,
    Box,
    Button,
    Chip,
    Fade,
    FormControl,
    FormLabel,
    IconButton,
    Input,
    MenuItem,
    Modal,
    Paper,
    Select,
    Stack,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { addNewItem, changeItemStatusbyid, deleteItembyid, fetchChallenges, fetchItems, updateItembyid } from "./services/apiServices";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    height: 600,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};


const pencil = [
    <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="black"
        xmlns="http://www.w3.org/2000/svg"
        key={0}
    >
        <path
            d="M13.5858 3.58579C14.3668 2.80474 15.6332 2.80474 16.4142 3.58579C17.1953 4.36683 17.1953 5.63316 16.4142 6.41421L15.6213 7.20711L12.7929 4.37868L13.5858 3.58579Z"
            className="fill-gray-7"
        ></path>
        <path
            d="M11.3787 5.79289L3 14.1716V17H5.82842L14.2071 8.62132L11.3787 5.79289Z"
            className="fill-gray-7"
        ></path>
    </svg>,
];

const deletebtn = [
    <svg
        width="16"
        height="16"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        key={0}
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9 2C8.62123 2 8.27497 2.214 8.10557 2.55279L7.38197 4H4C3.44772 4 3 4.44772 3 5C3 5.55228 3.44772 6 4 6L4 16C4 17.1046 4.89543 18 6 18H14C15.1046 18 16 17.1046 16 16V6C16.5523 6 17 5.55228 17 5C17 4.44772 16.5523 4 16 4H12.618L11.8944 2.55279C11.725 2.214 11.3788 2 11 2H9ZM7 8C7 7.44772 7.44772 7 8 7C8.55228 7 9 7.44772 9 8V14C9 14.5523 8.55228 15 8 15C7.44772 15 7 14.5523 7 14V8ZM12 7C11.4477 7 11 7.44772 11 8V14C11 14.5523 11.4477 15 12 15C12.5523 15 13 14.5523 13 14V8C13 7.44772 12.5523 7 12 7Z"
            fill="red"
            className="fill-danger"
        ></path>
    </svg>,
];


export default function Home() {

    const [open, setOpen] = useState(false);

    const [isEditingItem, setIsEditingItem] = useState(false);
    const [fetchedItemsInfo, setFetchedItemsInfo] = useState([]);
    const [fetchedChallengeListInfo, setFetchedChallengeListInfo] = useState([]);
    const [editingItem, setEditingItem] = useState({});




    const fetchItemsList = () => {

        Promise.all([fetchItems()])
            .then(([res]) => {
                setFetchedItemsInfo(res?.data?.docs)
                // console.log(res, '->>>')
            })
            .catch(error => console.log(error,));
    }

    const fetchChallengeList = () => {

        Promise.all([fetchChallenges()])
            .then(([res]) => {
                setFetchedChallengeListInfo(res?.docs)
                // console.log(res.docs, '->>>')
            })
            .catch(error => console.log(error,));
    }

    useEffect(() => {
        fetchItemsList()
        fetchChallengeList()
    }, [])


    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setOpen(false)
        setIsEditingItem(false)
        setEditingItem({})
    };


    const onEditItem = (record) => {
        setOpen(true)
        setIsEditingItem(true);
        setEditingItem({ ...record });
    };


    const changeStatus = (id, status) => {

        const dataSet = {
            ids: [
                id
            ],
            status: status == 1 ? "2" : "1"
        };

        Promise.all([changeItemStatusbyid(dataSet)])
            .then(([res]) => {
                // console.log(res, '->>>')
                fetchItemsList()
            })
            .catch(error => console.log(error));
    }

    const removeItemFromList = (id) => {

        Promise.all([deleteItembyid({ id })])
            .then(([res]) => {
                // console.log(res, '->>>')
                fetchItemsList()
            })
            .catch(error => console.log(error));
    }

    const onModalSubmit = () => {
        if (isEditingItem) {
            const dataSet = {
                id: editingItem._id,
                title: editingItem.title,
                image: editingItem.image,
                challenges: editingItem.challenges

            };

            Promise.all([updateItembyid(dataSet)])
                .then(([res]) => {
                    console.log(res, '->>> update')
                    fetchItemsList()
                    setIsEditingItem(false)
                    setEditingItem({})
                    setOpen(false)
                })
                .catch(error => console.log(error));

        } else { //createNewItem

            const dataSet = {
                title: editingItem.title,
                description: editingItem.description,
                image: editingItem.image,
                challenges: editingItem.challenges
            };

            Promise.all([addNewItem(dataSet)])
                .then(([res]) => {
                    console.log(res, '->>>Create Item')
                    fetchItemsList()
                    setEditingItem({})
                    setOpen(false)
                })
                .catch(error => console.log(error));

        }
    }


    return (
        <>

            <div>
                <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    open={open}
                    onClose={handleClose}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                        timeout: 500,
                    }}
                >
                    <Fade in={open}>
                        <Box sx={style}>
                            <h1 style={{ display: 'flex', justifyContent: 'center' }}>{isEditingItem ? 'Edit Item' : 'Create New Item'} </h1>
                            <Stack direction="column" spacing={4}>
                                <FormControl id="title" isRequired>
                                    <FormLabel>Title</FormLabel>
                                    <Input
                                        placeholder="Enter Item Title"
                                        _placeholder={{ color: 'gray.500' }}
                                        type="text"
                                        value={editingItem?.title}
                                        onChange={(e) => {
                                            setEditingItem((pre) => {
                                                return { ...pre, title: e.target.value };
                                            });
                                        }}
                                    />
                                </FormControl>

                                <FormControl id="description" isRequired>
                                    <FormLabel>Description</FormLabel>
                                    <Input
                                        placeholder="Enter Item Description"
                                        _placeholder={{ color: 'gray.500' }}
                                        type="text"
                                        value={editingItem?.description}
                                        onChange={(e) => {
                                            setEditingItem((pre) => {
                                                return { ...pre, description: e.target.value };
                                            });
                                        }}
                                    />
                                </FormControl>

                                <FormControl id="image" isRequired>
                                    <FormLabel>Image</FormLabel>
                                    <Input
                                        placeholder="Enter Image URL"
                                        _placeholder={{ color: 'gray.500' }}
                                        type="text"
                                        value={editingItem?.image}
                                        onChange={(e) => {
                                            setEditingItem((pre) => {
                                                return { ...pre, image: e.target.value };
                                            });
                                        }}
                                    />
                                </FormControl>

                                <FormControl id="challenges" isRequired>
                                    <FormLabel>Challenges</FormLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        label="Challenges"
                                        value={typeof (editingItem?.challenges) == 'string' ? editingItem?.challenges : editingItem?.challenges?.find((el, idx) => el._id)?._id}
                                        onChange={(e) => {
                                            setEditingItem((pre) => {
                                                return { ...pre, challenges: e.target.value };
                                            });
                                        }}
                                    >
                                        {fetchedChallengeListInfo?.map((item) => (

                                            <MenuItem value={item._id}>{item.name}</MenuItem>
                                        ))}

                                    </Select>
                                </FormControl>

                                <Button variant='contained' onClick={() => onModalSubmit()}
                                    sx={{ width: '80%', display: 'flex', alignSelf: 'center' }}>Save</Button>
                            </Stack>
                        </Box>
                    </Fade>
                </Modal>
            </div>


            <Button variant='contained' onClick={handleOpen}
                sx={{ position: "absolute", top: 15, right: 54, }}>Add a new Item</Button>

            <Box pl={5} pt={10} sx={{
                marginBottom: { xs: "3%", md: "5%" },
                paddingRight: { xs: "none", md: "3%" },
            }}>

                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow style={{ backgroundColor: 'grey' }}>
                                <TableCell style={{ fontWeight: 'bold', color: '#fff', fontSize: '21px' }}>Title</TableCell>
                                <TableCell style={{ fontWeight: 'bold', color: '#fff', fontSize: '21px' }} align="right">Image</TableCell>
                                <TableCell style={{ fontWeight: 'bold', color: '#fff', fontSize: '21px' }} align="right">Description</TableCell>
                                <TableCell style={{ fontWeight: 'bold', color: '#fff', fontSize: '21px' }} align="right">Status</TableCell>
                                <TableCell style={{ fontWeight: 'bold', color: '#fff', fontSize: '21px' }} align="right">CreatedAt</TableCell>
                                <TableCell style={{ fontWeight: 'bold', color: '#fff', fontSize: '21px' }} align="right">Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {fetchedItemsInfo?.map((rowItem) => (
                                <TableRow
                                    key={rowItem._id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {rowItem.title}
                                    </TableCell>
                                    <TableCell align="right">
                                        <img
                                            src={rowItem.image}
                                            alt={'image'}
                                            style={{ height: 70, Width: 70 }}
                                        />
                                    </TableCell>
                                    <TableCell align="right">{rowItem.description}</TableCell>
                                    <TableCell align="right">{rowItem.status == 1 ? <Chip label="ACTIVE" color="success" /> : <Chip label="INACTIVE" color="error" />}</TableCell>
                                    <TableCell align="right">{rowItem.createdAt}</TableCell>
                                    <TableCell align="right">
                                        <Stack direction="row" spacing={1}>

                                            <IconButton
                                                aria-label="edit item"
                                                size="small"
                                                onClick={() => onEditItem(rowItem)}
                                            >
                                                {pencil}
                                            </IconButton>
                                            <IconButton
                                                aria-label="delete item"
                                                size="small"
                                                onClick={() => removeItemFromList(rowItem._id)}
                                            >
                                                {deletebtn}
                                            </IconButton>

                                            <IconButton
                                                aria-label="change status"
                                                size="small"
                                                onClick={() => changeStatus(rowItem._id, rowItem.status)}
                                            >
                                                <img
                                                    src={'https://cdn-icons-png.flaticon.com/128/1721/1721929.png'}
                                                    alt={'image'}
                                                    style={{
                                                        width: 24,
                                                        height: 24
                                                    }}
                                                />
                                            </IconButton>
                                        </Stack>

                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>

            </Box>



        </>
    );
}
