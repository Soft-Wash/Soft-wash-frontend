import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { addNotification } from '../utils/slicers/notificationSlice';
import { Stack, Tag, TagLabel, TagCloseButton, IconButton, Select, InputGroup, InputLeftElement, Input, InputRightElement, Button, Table, Thead, Tr, Th, Td, Tbody, TableContainer, Box, TableCaption } from '@chakra-ui/react';
import { RiEditLine } from 'react-icons/ri';
import { SearchIcon } from '../asset';
import CustomPagination from './Pagination';

function TableComponent({ getData, params = null, defaultQuery = null, title = "", filterOptions, rowRenderer, variant = "striped" }) {
    const [data, setData] = useState([]);
    const [filters, setFilters] = useState([]);
    const [selectedFilter, setSelectedFilter] = useState('');
    const [filterValue, setFilterValue] = useState('');
    const [paginationData, setPaginationData] = useState({ page: 1, limit: 10, totalPages: 1, totalCount: 0 });
    const dispatch = useDispatch();


    const filterOutZeros = (key) => {
        const parts = key.split('0');
        return parts.filter(part => part !== '');
    };

    const fetchData = async () => {
        try {
            let queryParams = {};
            let search = filters.map(({ key, value }) => ({ keys: filterOutZeros(key), type: filterOptions[key]?.type || 'partial', value }));


            queryParams = new URLSearchParams({
                search: JSON.stringify([...search, ...defaultQuery || []]),
                limit: paginationData?.limit,
                page: paginationData?.page,
            })


            let { status, message, data, pagination } = params ? await getData(params, queryParams) : await getData(queryParams);
            if (status) {
                setData(data);
                setPaginationData(pagination);
            } else {
                dispatch(
                    addNotification({
                        type: "error",
                        title: "Operation Failed!",
                        description: message,
                    })
                );
            }

        } catch (error) {
            console.log(error)
            dispatch(
                addNotification({
                    type: "error",
                    title: "Operation Failed!",
                    description: "Failed to fetch data",
                })
            );

        }
    };

    useEffect(() => {
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [filters, filterValue, paginationData.limit, paginationData.page, params, defaultQuery]);



    const handleFilterChange = (event) => {
        setSelectedFilter(event.target.value);
    };

    const handleInputChange = (event) => {
        setFilterValue(event.target.value);
    };

    const handleAddFilter = () => {
        if (selectedFilter && !filters.find((filter) => filter.key === selectedFilter)) {
            const filterOption = filterOptions[selectedFilter];
            const newFilter = {
                key: selectedFilter,
                name: filterOption?.name || selectedFilter,
                value: filterValue,
                type: filterOption?.type || 'partial',
                inputType: filterOption?.inputType || 'text',
                options: filterOption?.options || [],
            };
            setFilters([...filters, newFilter]);
            setSelectedFilter('');
            setFilterValue('');
        }
    };


    const handleRemoveFilter = (removedFilter) => {
        const updatedFilters = filters.filter((filter) => filter.key !== removedFilter);
        setFilters(updatedFilters);
    };

    const handleEditFilter = (editedFilter) => {
        // Set the selected filter and input value when editing
        setSelectedFilter(editedFilter.key);
        setFilterValue(editedFilter.value);
        // Remove the filter being edited from the array
        const updatedFilters = filters.filter((filter) => filter.key !== editedFilter.key);
        setFilters(updatedFilters);
    };
    return (
        <Box width={"100%"} pb={3}>
            <Stack direction="row" spacing={2} mb={5}>
                {filters.map((selectedFilter) => (
                    <Tag key={selectedFilter.key} size="md" variant="solid" backgroundColor={"secondary.500"}>
                        <TagLabel>{selectedFilter.name}: {selectedFilter.value}</TagLabel>
                        <TagCloseButton onClick={() => handleRemoveFilter(selectedFilter.key)} />
                        <IconButton borderRadius={100} onClick={() => handleEditFilter(selectedFilter)} icon={<RiEditLine />} aria-label="Edit Filter" size="sm" ml={1} />
                    </Tag>
                ))}

            </Stack>
            <Stack direction={['column', 'row']} spacing={4} align="center" mb={5}>
                <Select
                    flex={['auto', '0.3']} // Adjust based on your design
                    borderColor={'gray.200'}
                    value={selectedFilter}
                    onChange={handleFilterChange}
                    borderWidth={1.5}
                    // background={'gray.200'}
                    placeholder="Select Filter"
                >
                    {Object.keys(filterOptions).map((key) => (
                        <option key={key} value={key}>
                            {filterOptions[key].name}
                        </option>
                    ))}
                </Select>

                <InputGroup flex={['auto', '0.7']} borderColor={'white'}>
                    <InputLeftElement pointerEvents="none">
                        <SearchIcon />
                    </InputLeftElement>

                    {/* ... (inside InputGroup) */}
                    {filterOptions[selectedFilter]?.inputType === 'date_range' ? (
                        <>
                            <Box mb={2} display={{ base: 'block', md: 'flex' }} flexWrap="wrap" >
                                <Input
                                    mb={{ base: 2, md: 0 }}
                                    pl={8}
                                    flex="1"
                                    type="date"
                                    borderWidth={1.5}
                                    //   borderWidth={1.5}
                                    value={filterValue.split('|')[0]} // Extract start date
                                    onChange={(e) => setFilterValue(`${e.target.value}|${filterValue.split('|')[1]}`)} // Concatenate with existing end date
                                    borderColor={'gray.200'}
                                    placeholder={`Start Date`}
                                />
                                <Input
                                    pl={8}
                                    flex="1"
                                    type="date"
                                    borderWidth={1.5}
                                    value={filterValue.split('|')[1]} // Extract end date
                                    onChange={(e) => setFilterValue(`${filterValue.split('|')[0]}|${e.target.value}`)} // Concatenate with existing start date
                                    borderColor={'gray.200'}
                                    placeholder={`End Date`}
                                />
                            </Box>
                        </>

                    ) : filterOptions[selectedFilter]?.inputType === 'number_range' ? (
                        <>
                            <Box mb={2} display={{ base: 'block', md: 'flex' }} flexWrap="wrap">
                                <Input
                                    mb={{ base: 2, md: 0 }}
                                    pl={8}
                                    flex="1"
                                    type="number"
                                    borderWidth={1.5}
                                    value={filterValue.split('|')[0]} // Extract min value
                                    onChange={(e) => setFilterValue(`${e.target.value}|${filterValue.split('|')[1]}`)} // Concatenate with existing max value
                                    borderColor={'gray.200'}
                                    placeholder={`Min Value`}
                                />
                                <Input
                                    flex="1"
                                    type="number"
                                    borderWidth={1.5}
                                    value={filterValue.split('|')[1]} // Extract max value
                                    onChange={(e) => setFilterValue(`${filterValue.split('|')[0]}|${e.target.value}`)} // Concatenate with existing min value
                                    borderColor={'gray.200'}
                                    placeholder={`Max Value`}
                                />
                            </Box>
                        </>

                    ) :
                        filterOptions[selectedFilter]?.inputType === 'dropdown' ? (
                            <Select
                                flex="1"
                                borderColor={'gray.200'}
                                borderWidth={1.5}
                                value={filterValue}
                                onChange={handleInputChange}
                                pl={10} // Adjust based on your design
                                placeholder={`Select ${filterOptions[selectedFilter]?.name}`}
                            >
                                {filterOptions[selectedFilter]?.options.map((option) => (
                                    <option key={option} value={option}>
                                        {option}
                                    </option>
                                ))}
                            </Select>
                        ) : (
                            <Input
                                flex="1"
                                type={filterOptions[selectedFilter]?.inputType || 'text'}
                                value={filterValue}
                                onChange={handleInputChange}
                                borderWidth={1.5}
                                paddingRight={['7.5rem']}
                                borderColor={'gray.200'}
                                placeholder={`Search ${filterOptions[selectedFilter]?.name || ""}`}
                            />
                        )}
                    <InputRightElement flex={['2', 'auto']} width={['9rem', '7.5rem']}>
                        <Button h="1.75rem" size="sm" onClick={handleAddFilter} backgroundColor={'primary.300'} color={'white'}>
                            {selectedFilter ? 'Edit Filter' : 'Add Filter'}
                        </Button>
                    </InputRightElement>
                </InputGroup>
            </Stack>

            {/* Display Data */}
            <TableContainer>
                <Table mb={5} size={"md"}>
                    <TableCaption >{title + `: (${paginationData?.totalCount || 0} Row(s))`} </TableCaption>
                    <Thead>
                        <Tr>
                            {/* Add headers based on rowRenderer configuration */}
                            {rowRenderer.headers.map((header, index) => (
                                <Th key={index}>{header}</Th>
                            ))}
                        </Tr>
                    </Thead>
                    <Tbody>
                        {data.map((item) => (
                            <Tr key={item._id}>
                                {/* Render rows based on rowRenderer configuration */}
                                {rowRenderer.cells.map((cell, index) => (
                                    <Td key={index} size="md" py={2.5}>{cell(item)}</Td>
                                ))}
                                <hr />
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
            </TableContainer>
            <CustomPagination
                pagination={paginationData}
                setPagination={setPaginationData}
            />

        </Box>
    )
}

export default TableComponent
