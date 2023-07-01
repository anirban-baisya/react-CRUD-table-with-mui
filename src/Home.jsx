import {
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Box,
    Typography,
    Grid,
    TextField,
    FormControl,
    Button,
    IconButton,
    Modal,
    Fade,
    Backdrop,
    TableContainer,
    Table,
    TableHead,
    TableRow,
    TableCell,
    Paper,
    TableBody,
    Chip,
    Stack,
    FormLabel,
    Input,
    Select,
    MenuItem,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { fetchChallenges, fetchItems } from "./services/apiServices";
// import DialogBox from "../../../components/DialogBox";
// import Spinner from "../../../components/Spinner";
// import { API } from "../../../constants/apiUrl";
// import { fetchWrapper } from "../../../helpers";
// import DeleteIcon from '@mui/icons-material/Delete';
// import { DragDropContext, Draggable, Droppable, DropResult } from "react-beautiful-dnd";
// import PlayArrowIcon from '@mui/icons-material/PlayArrow';
// import dynamic from "next/dynamic";
// import AlertDialog from "../../../components/AlertDialog";
// const RPlayer = dynamic(() => import('../../../components/WrappedPlayer'), { ssr: false })

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
    // const [isLoading, setIsLoading] = useState(true);
    // const [courses, setCourses] = useState([]);
    // const [sections, setSections] = useState<any>([]);
    // const [actSectTab, setActSectTab] = React.useState<number | undefined | null>(0);
    // const [actCoursTab, setActCoursTab] = React.useState<number | undefined | null>(0);
    // const [sectionID, setSectionID] = React.useState<number | undefined | null>();
    // const [courseID, setCourseID] = React.useState<any>();
    // const [yvidolink, setYvidolink] = useState<any>();
    // const [codelink, setCodelink] = useState<any>();
    // const [notes, setNotes] = useState<any>();
    // const [chaptDetail, setChaptDetail] = useState<any>("");
    const [open, setOpen] = useState(false);
    // const [modalContent, setModalContent] = React.useState('');
    // const [openCourseAlertModal, setOpenCourseAlertModal] = React.useState(false);
    // const [openSectionAlertModal, setOpenSectionAlertModal] = React.useState(false);
    const [isEditingItem, setIsEditingItem] = useState(false);
    const [itemInputFieldsInfo, setItemInputFieldsInfo] = useState({});
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


    // const [openCourDial, setOpenCourDial] = React.useState(false);
    // const [openSecDial, setOpenSecDial] = React.useState(false);
    // const [nameInput, setNameInput] = React.useState('');
    // const [descInput, setDescInput] = React.useState('');

    // const handleClickOpen = () => {
    //     setOpenCourDial(true);
    // };
    // const handleClickOpenAddSec = () => {
    //     setOpenSecDial(true);
    // };

    // const handlePlayContent = (value: any) => {
    //     switch (value) {
    //         case 'video':
    //             setModalContent(value);
    //             setOpen(true)
    //             break;
    //         case 'code':
    //             setModalContent(value);
    //             setOpen(true)
    //             break;
    //         default:
    //             break;
    //     }
    // };
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    // const fetchCourses = () => {
    //     fetchWrapper.get(`${API.portalURL}${API.getAllCourses}`).then(res => {
    //         if (res.length > 0) {
    //             if (!courseID || res.length == 1 && actSectTab != undefined) {
    //                 setCourseID(res?.slice().sort((a: any, b: any) => Number(a.slNo) - Number(b.slNo))[0].id)
    //             }
    //             setCourses(res?.slice().sort((a: any, b: any) => Number(a.slNo) - Number(b.slNo)))
    //         } else {
    //             setCourses([])
    //         }
    //         setIsLoading(false)
    //     }).catch(error => {
    //         console.log(error, 'error--')
    //         setIsLoading(false)
    //     });
    // };

    // useEffect(() => {
    //     fetchCourses()

    // }, [openCourDial]);

    // const handleCourseItemSwitch = (index: any, cID: any) => {

    //     if (index == actCoursTab) {
    //         return
    //     } else {

    //         setActCoursTab(index),
    //             setCourseID(cID),
    //             setChaptDetail(''),
    //             setSectionID(null),
    //             setSections([]),
    //             setActSectTab(null),
    //             setYvidolink(null)
    //         setCodelink(null)
    //         setNotes(null)
    //     }

    // };

    // const handleCoursesItemAdd = () => {

    //     fetchWrapper.post(`${API.portalURL}${API.createCourses}`,
    //         {
    //             "slNo": courses.length + 1,
    //             "title": nameInput,
    //             "description": descInput
    //         }
    //     ).then(res => {
    //         setNameInput('')
    //         setDescInput('')
    //         setOpenCourDial(false)
    //     }).catch(error => {
    //         console.log(error, 'error--')
    //     });
    // };

    // const handleCoursesItemDelete = () => { 
    //     if (!openCourseAlertModal) {
    //         setOpenCourseAlertModal(true)
    //         return
    //     }

    //     setIsLoading(true)

    //     fetchWrapper.post(`${API.portalURL}${API.coursesDelete}`,
    //         {
    //             "id": courseID
    //         }
    //     ).then(res => {

    //         fetchCourses()

    //         setSections([])
    //         setIsLoading(false),
    //             setOpenCourseAlertModal(false),
    //             setActSectTab(null)
    //         setActCoursTab(null)

    //     }).catch(error => {
    //         console.log(error, 'error--')
    //         setIsLoading(false)
    //     });
    // };


    // const fetchSectionsItems = (courseID: any) => {
    //     setIsLoading(true)
    //     fetchWrapper.get(`${API.portalURL}${API.getSection(courseID)}`).then(res => {
    //         if (res.length > 0) {
    //             if (!sectionID && actSectTab != null) {
    //                 setSectionID(res?.slice().sort((a: any, b: any) => Number(a.slNo) - Number(b.slNo))[0].id)
    //             }
    //             setSections(res?.slice().sort((a: any, b: any) => Number(a.slNo) - Number(b.slNo)))
    //         } else {
    //             setSections([])
    //         }
    //         setIsLoading(false)
    //     }).catch(error => {
    //         console.log(error, 'error--')
    //         setIsLoading(false)
    //     });
    // };


    // useEffect(() => {
    //     if (openSecDial == false) {

    //         fetchSectionsItems(courseID)
    //     }
    // }, [courseID, openSecDial]);

    // const handleSectionsItemSwitch = (index: any, sID: any) => {
    //     if (index == actSectTab) {
    //         return
    //     } else {
    //         setActSectTab(index),
    //             setSectionID(sID)
    //         setYvidolink('')
    //         setCodelink('')
    //         setNotes('')

    //     }
    // };


    // const handleSectionsItemAdd = () => {
    //     fetchWrapper.post(`${API.portalURL}${API.createSecton(courseID)}`,
    //         {
    //             "slNo": sections.length + 1,
    //             "name": nameInput,
    //             "description": descInput
    //         }
    //     ).then(res => {
    //         setNameInput('')
    //         setDescInput('')
    //         setOpenSecDial(false)
    //     }).catch(error => {
    //         console.log(error, 'error--')
    //     });
    // };

    // const handleSectionItemDelete = () => {
    //     if (!openSectionAlertModal) {
    //         setOpenSectionAlertModal(true)
    //         return
    //     }
    //     setIsLoading(true)

    //     fetchWrapper.post(`${API.portalURL}${API.deleteSectionItem}`,
    //         {
    //             "cId": courseID,
    //             "sId": sectionID,
    //         }
    //     ).then(res => {
    //         setIsLoading(false)

    //         fetchSectionsItems(courseID)
    //         setChaptDetail("")
    //         setOpenSectionAlertModal(false),

    //         setSectionID(null)
    //         setActSectTab(null)

    //     }).catch(error => {
    //         console.log(error, 'error--')
    //         setIsLoading(false)
    //     });
    // };

    // const getSectionItemDetails = () => {
    //     fetchWrapper.get(`${API.portalURL}${API.getsectionDetails(courseID, sectionID)}`).then(res => {
    //         if (res.length > 0) {
    //             setChaptDetail(res[0])
    //             setYvidolink(res[0].videoLink)
    //             setCodelink(res[0].codeLink)
    //             setNotes(res[0].textContent)
    //         } else {
    //             setChaptDetail("")
    //         }
    //         setIsLoading(false)
    //     }).catch(error => {
    //         console.log(error, 'error--')
    //         setIsLoading(false)
    //     });
    // }


    // useEffect(() => {
    //     { actSectTab != null && setIsLoading(true) }

    //     {
    //         actSectTab != null && getSectionItemDetails()
    //     }
    // }, [sectionID]);


    // const handleContentDetailsSave = () => {
    //     setIsLoading(true)
    //     fetchWrapper.post(`${API.portalURL}${API.updateCourseDetails(courseID, sectionID, chaptDetail.id)}`,
    //         {
    //             "videoLink": yvidolink,
    //             "codeLink": codelink,
    //             "textContent": notes,
    //         }
    //     ).then(res => {
    //         setIsLoading(false)
    //         setYvidolink(null)
    //         setCodelink(null)
    //         setNotes(null)
    //         getSectionItemDetails()
    //     }).catch(error => {
    //         console.log(error, 'error--')
    //         setIsLoading(false)
    //     });
    // };

    // const handleContentDetailsAdd = () => {
    //     setIsLoading(true)

    //     fetchWrapper.post(`${API.portalURL}${API.createDetails(courseID, sectionID)}`,
    //         {
    //             "videoLink": yvidolink,
    //             "codeLink": codelink,
    //             "textContent": notes,
    //         }
    //     ).then(res => {
    //         setIsLoading(false)
    //         setYvidolink(null)
    //         setCodelink(null)
    //         setNotes(null)
    //         getSectionItemDetails()
    //     }).catch(error => {
    //         console.log(error, 'error--')
    //         setIsLoading(false)
    //     });
    // };
    const onEditItem = (record) => {
        setOpen(true)
        setIsEditingItem(true);
        setEditingItem({ ...record });
      };

    const createNewItem = () => {
        // const dataSet = {
        //     name: productInputFieldsInfo.name,
        //     description: productInputFieldsInfo.description,
        //     attributes: productInputFieldsInfo.attributes,
        //     price: productInputFieldsInfo.price,
        //     salePrice: productInputFieldsInfo.salePrice,
        //     stock: productInputFieldsInfo.stock,
        //     image: productInputFieldsInfo.image
        // };

        // Promise.all([addNewProduct(dataSet)])
        //     .then(([res]) => {
        //         console.log(res, '->>>')
        //         fetchProductsList()
        //         setProductInputFieldsInfo({})
        //     })
        //     .catch(error => console.log(error));
    }

    // console.log(editingItem,'editingItem -->');
    return (
        <>

            {/* <AlertDialog isCourseDelete={true} open={openCourseAlertModal} setOpen={setOpenCourseAlertModal} handleCoursesItemDelete={handleCoursesItemDelete} warningDesc={'Are you sure you want to delete this Course ? '} />
            <AlertDialog isSectionDelete={true} open={openSectionAlertModal} setOpen={setOpenSectionAlertModal} handleSectionItemDelete={handleSectionItemDelete} warningDesc={'Are you sure you want to delete this Section ? '} /> */}

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
                            <h1 style={{ display: 'flex', justifyContent: 'center' }}>{isEditingItem ?'Edit Item' :'Create New Item'} </h1>
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
                                    {/* <Input
                                    placeholder="Enter Image URL"
                                    _placeholder={{ color: 'gray.500' }}
                                    type="text"
                                    value={editingItem?.Challenges}
                                    onChange={(e) => {
                                        setEditingItem((pre) => {
                                            return { ...pre, image: e.target.value };
                                        });
                                    }}
                                /> */}
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        // value={age}
                                        label="Age"
                                        // onChange={handleChange}

                                        // value={editingItem?.Challenges.length > 0 ? editingItem?.Challenges[0]?._id :editingItem?.Challenges?._id}
                                        value={ editingItem?.Challenges?._id  }
                                        onChange={(e) => {
                                            setEditingItem((pre) => {
                                                return { ...pre, image: e.target.value };
                                            });
                                        }}
                                    >
                                        {fetchedChallengeListInfo?.map((item) => (

                                            <MenuItem value={item._id}>{item.name}</MenuItem>
                                        ))}

                                    </Select>
                                </FormControl>

                                <Button variant='contained' onClick={() => ''}
                                    sx={{ width: '80%', display: 'flex', alignSelf: 'center' }}>Save</Button>
                            </Stack>
                        </Box>
                    </Fade>
                </Modal>
            </div>


            <Button variant='contained' onClick={handleOpen}
                sx={{ position: "absolute", top: 15, right: 54, }}>Add a new User</Button>

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
                                            // onClick={() => setOpen(!open)}
                                            >
                                                {deletebtn}
                                            </IconButton>

                                            <IconButton
                                                aria-label="change status"
                                                size="small"
                                            // onClick={() => setOpen(!open)}
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
