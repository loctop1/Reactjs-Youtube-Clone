import React from 'react'
import { Typography, Box, CardContent, CardMedia } from "@mui/material";
import { CheckCircle } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { demoProfilePicture } from '../utils/constants';

const ChannelCard = ({ channelDetail, marginTop }) => {
    return (
        <Box
            sx={{
                boxShadow: 'none',
                borderRadius: '20px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: { xs: '356px', md: '320px' },
                height: '326px',
                margin: 'auto',
                marginTop
            }}
        >
            {/* Đường dẫn kênh youtube */}
            <Link to={`/channel/${channelDetail?.id?.channelId}`}>
                <CardContent
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        textAlign: 'center',
                        color: '#fff'
                    }}
                >
                    {/* Ảnh kênh youtube */}
                    <CardMedia
                        image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
                        /**Đây là cách truy cập vào URL của hình ảnh cao nhất (high resolution) của kênh thông qua đối 
                         * tượng channelDetail. Sử dụng toán tử "?." để tránh lỗi nếu một trong những đối tượng này không 
                         * tồn tại.
                         * demoProfilePicture: Đây là một biến (hoặc giá trị) thay thế, có thể là một URL hình ảnh mẫu hoặc 
                         * hình ảnh mặc định để sử dụng nếu thông tin hình ảnh của kênh không có sẵn. */
                        alt={channelDetail?.snippet?.title}
                        sx={{
                            borderRadius: '50%',
                            height: '180px',
                            width: '180px',
                            mb: 2,
                            border: '1px solid #e3e3e3'
                        }}
                    />
                    {/* Tên kênh youtube */}
                    <Typography variant='h6'>
                        {channelDetail?.snippet?.title}
                        <CheckCircle
                            sx={{
                                fontSize: "15px", color: "gray", ml: "5px"
                            }}
                        />
                    </Typography>
                    {/* Số lượng người đăng ký */}
                    {channelDetail?.statistics?.subscriberCount &&
                        /**Đây là cách truy cập vào thông tin về số lượng người đăng ký của kênh thông qua đối tượng 
                         * channelDetail. Sử dụng toán tử "?." để tránh lỗi nếu một trong những đối tượng này không tồn tại. */
                        (
                            <Typography>
                                {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()} người đăng ký
                                {/* Chuyển đổi giá trị số liệu về kiểu số nguyên. Có thể có lợi khi bạn muốn thực hiện các 
                                phép toán số học hoặc định dạng số liệu.
                                .toLocaleString(): Phương thức này được gọi để định dạng số liệu thành chuỗi với các ký tự 
                                phân tách dấu phẩy, giúp đọc số liệu dễ dàng hơn. Ví dụ, 1000000 có thể trở thành 
                                "1,000,000". */}
                            </Typography>
                        )
                    }
                </CardContent>
            </Link>
        </Box>
    )
}

export default ChannelCard