import React from 'react'
import { useState, useEffect } from 'react'
import { Box, Typography } from '@mui/material'
import { Videos } from './'
import { useParams } from 'react-router-dom'
// API
import { fecthFromAPI } from '../utils/fecthFromAPI'

const SearchFeed = () => {

    const [videos, setVideos] = useState([])

    // Đường dẫn kết quả tìm kiếm
    const { searchTerm } = useParams();

    useEffect(() => {
        fecthFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) => setVideos(data.items));
        /**Dòng này thực hiện một cuộc gọi API để lấy danh sách video dựa trên từ khóa tìm kiếm (searchTerm). Tham số 
         * part=snippet cho biết bạn muốn lấy phần snippet của video. q=${searchTerm} thêm từ khóa tìm kiếm vào URL.
         * Khi promise của cuộc gọi API được giải quyết, hàm callback này sẽ được thực hiện. Tham số data là dữ liệu trả về 
         * từ cuộc gọi API. data.items là mảng các video được trả về. Hàm setVideos được gọi để cập nhật trạng thái của 
         * videos bằng mảng các video này. */
    }, [searchTerm]);
    /**Mảng phụ thuộc [searchTerm] cho biết useEffect sẽ chạy lại mỗi khi giá trị của searchTerm thay đổi. Điều này giúp 
     * đảm bảo rằng mỗi khi người dùng nhập một từ khóa mới để tìm kiếm, cuộc gọi API mới sẽ được thực hiện để lấy danh 
     * sách video mới tương ứng với từ khóa tìm kiếm mới. */

    return (
        <>
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
                    Kết quả tìm kiếm cho: <span style={{ color: '#F31503' }}>
                        {searchTerm}
                    </span>
                </Typography>
                {/* Danh sách video */}
                <Videos videos={videos} />
            </Box>
        </>
    )
}

export default SearchFeed;