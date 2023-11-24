import React from 'react'
import { useState, useEffect } from 'react'
import { Box, Stack, Typography } from '@mui/material'
import { SideBar, Videos } from './'
// API
import { fecthFromAPI } from '../utils/fecthFromAPI'

const Feed = () => {

    const [selectedCategory, setSelectedCategory] = useState('Trang chủ')

    const [videos, setVideos] = useState([])

    useEffect(() => {
        fecthFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) => setVideos(data.items));
        /**Đây là một hàm giả định (chưa được đưa ra trong đoạn mã bạn cung cấp). Giả sử nó là một hàm gọi API, có thể sử dụng fetch hoặc một thư viện khác 
         * để thực hiện các yêu cầu mạng. Trong trường hợp này, nó đang gọi API với một endpoint có dạng search?part=snippet&q=${selectedCategory}, với 
         * selectedCategory được thêm vào URL để thực hiện tìm kiếm theo danh mục đã chọn.
         * Khi yêu cầu API được hoàn thành thành công, hàm then() sẽ được gọi với dữ liệu trả về từ API (được truyền vào thông qua tham số data).
         * data.items: Giả sử API trả về một đối tượng data và có một thuộc tính items chứa danh sách video hoặc thông tin cần thiết.
         * setVideos(data.items): Đây là một hàm được sử dụng để cập nhật state videos. Giả sử bạn đã sử dụng một state khác bên ngoài để lưu trữ danh sách 
         * video (videos), và khi có dữ liệu mới từ API, nó được cập nhật bằng cách gọi setVideos với danh sách video mới. */
    }, [selectedCategory]);
    /**Trong trường hợp này, useEffect được sử dụng để gọi hàm fecthFromAPI khi giá trị của selectedCategory thay đổi. Mảng thứ hai ([selectedCategory]) là 
     * một mảng dependencies, chỉ khi giá trị trong mảng này thay đổi, useEffect mới được gọi lại. */

    return (
        <Stack
            sx={{
                flexDirection: {
                    sx: "column",
                    md: "row"
                }
            }}
        >
            <Box
                /**<Box>: Đây là một thành phần chung được sử dụng để tạo ra một hộp hoặc container. Nó cung cấp một cách thuận tiện để đặt kiểu (style) và 
                 * thuộc tính khác cho các phần tử. Trong trường hợp của bạn, <Box> được sử dụng để tạo ra một sidebar với một số kiểu và chiều cao khác 
                 * nhau tùy thuộc vào kích thước của màn hình. */
                sx={{
                    height: {
                        sx: 'auto',
                        md: 'auto'
                    },
                    borderRight: '1px solid white',
                    px: {
                        sx: 0, md: 2
                    }
                }}
            >
                <SideBar
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                />
                <Typography
                    /**<Typography>: Đây là một thành phần được sử dụng để hiển thị văn bản với các kiểu chữ, kích thước và màu sắc khác nhau. Trong trường 
                     * hợp của bạn, <Typography> được sử dụng để hiển thị thông tin về bản quyền. */
                    className='copyright'
                    variant='body2'
                    sx={{
                        mt: 1.5,
                        color: 'white'
                    }}
                >
                    Bản quyền: © 2023 Google LLC
                </Typography>
            </Box>
            {/* Video mới */}
            <Box
                p={2}
                sx={{
                    overflowY: 'auto',
                    height: '90vh',
                    flex: 2
                }}
            >
                <Typography
                    variant='h4'
                    fontWeight="bold"
                    mb={2}
                    sx={{
                        color: 'white'
                    }}
                >
                    Trang: <span style={{ color: '#F31503' }}>
                        {selectedCategory}
                    </span>
                </Typography>
                <Videos videos={videos} />
            </Box>
        </Stack >
    )
}

export default Feed