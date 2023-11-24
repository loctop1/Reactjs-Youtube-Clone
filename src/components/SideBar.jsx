import React from 'react'
import { Stack } from '@mui/material'

//Danh mục
import { categories } from '../utils/constants'

const SideBar = ({ selectedCategory, setSelectedCategory }) => {
    return (
        <Stack
            direction="row"
            sx={{
                overflow: {
                    sx: 'auto',
                    md: '95%'
                },
                flexDirection: {
                    md: 'column'
                }
            }}
        >
            {categories.map((category) => {
                return (
                    <button
                        onClick={() => setSelectedCategory(category.name)}
                        className='category-btn'
                        style={{
                            background: category.name === selectedCategory && 'red',
                            color: 'white'
                        }}
                        key={category.name}
                    >
                        <span
                            style={{
                                color: category.name === selectedCategory ? 'white' : 'red',
                                marginRight: '15px'
                            }}
                        >
                            {category.icon}
                        </span>
                        <span
                            style={{
                                opacity: category.name === selectedCategory ? '1' : '0.8'
                                /**opacity: Thuộc tính này kiểm soát độ trong suốt của phần tử. Giá trị của opacity được xác định bởi điều kiện: 
                                 * category.name === selectedCategory. Nếu điều kiện này đúng, opacity được đặt thành '1', ngược lại, nó được đặt thành '0.8'. */
                            }}
                        >
                            {category.name}
                        </span>
                    </button>
                )
            })}
        </Stack>
    )
}

export default SideBar