import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import { CheckCircle } from '@mui/icons-material';

import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from "../utils/constants";

// Chức năng tính số thời gian hiện tại
const formatTimeAgo = (publishedAt) => {
    const now = new Date();
    const uploadedAt = new Date(publishedAt);

    const seconds = Math.floor((now - uploadedAt) / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30);
    const years = Math.floor(months / 12);

    if (years > 0) {
        return `${years} năm trước`;
    } else if (months > 0) {
        return `${months} tháng trước`;
    } else if (days > 0) {
        return `${days} ngày trước`;
    } else if (hours > 0) {
        return `${hours} giờ trước`;
    } else if (minutes > 0) {
        return `${minutes} phút trước`;
    } else {
        return `${seconds} giây trước`;
    }
};

const VideoCard = ({ video: { id: { videoId }, snippet } }) => {
    return (
        <Card
            sx={{
                width: { xs: '100%', sm: '358px', md: "320px" },
                boxShadow: "none", borderRadius: 0
            }}
        >
            {/* Ảnh video */}
            <Link to={videoId ? `/video/${videoId}` : `/video/cV2gBU6hKfY`}>
                {/* Nó tạo ra một liên kết đến một URL cụ thể dựa trên điều kiện videoId. Nếu videoId có giá trị, nó tạo ra một 
            liên kết đến /video/${videoId}, ngược lại, nó tạo ra một liên kết đến /video/cV2gBU6hKfY. */}
                <CardMedia
                    image={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
                    /**snippet?.thumbnails?.high?.url để kiểm tra xem có một URL ảnh trong đối tượng snippet?.thumbnails?.high 
                     * hay không. Nếu có, nó sẽ sử dụng URL đó. Nếu không, nó sẽ sử dụng demoThumbnailUrl như một giá trị mặc 
                     * định hoặc fallback. */
                    alt={snippet?.title}
                    /**Nó sử dụng snippet?.title làm giá trị văn bản thay thế, giả sử rằng snippet là một đối tượng có thuộc 
                     * tính title. */
                    sx={{ width: { sx: '100%,', sm: '358px', md: "320px" }, height: 180 }}
                />
            </Link>
            {/* Tiêu đề video */}
            <CardContent sx={{ backgroundColor: "#1E1E1E", height: '106px' }}>
                <Link to={videoId ? `/video/${videoId}` : demoVideoUrl} >
                    {/* Dòng này sử dụng thành phần Link để tạo một liên kết đến /video/${videoId} nếu videoId tồn tại, ngược 
                    lại, nó sẽ tạo liên kết đến demoVideoUrl. */}
                    <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
                        {snippet?.title.slice(0, 100) || demoVideoTitle.slice(0, 100)}
                        {/* Nội dung của tiêu đề được lấy từ snippet?.title và cắt bớt tối đa 100 ký tự. Nếu tiêu đề không tồn 
                    tại, nó sẽ lấy từ demoVideoTitle. */}
                    </Typography>
                </Link>
                {/* Tiêu đề kênh youtube */}
                <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl} >
                    {/* nếu snippet?.channelId có sẵn (tức là thông tin kênh tồn tại), liên kết sẽ chuyển hướng đến trang của 
                kênh có ID là snippet?.channelId. Ngược lại, nếu không có thông tin kênh, liên kết sẽ chuyển hướng đến 
                demoChannelUrl, có thể là một trang mẫu hoặc trang đặc biệt nào đó. */}
                    {/* Tên kênh */}
                    <Typography variant="subtitle2" color="gray">
                        {snippet?.channelTitle || demoChannelTitle}
                        {/* nippet?.channelTitle: Nếu snippet?.channelTitle tồn tại (không phải là null hoặc undefined), giá 
                    trị này sẽ được sử dụng. snippet có vẻ là một đối tượng chứa thông tin về video, và channelTitle là 
                    thuộc tính chứa tên của kênh.
                    demoChannelTitle: Nếu snippet?.channelTitle không tồn tại, giá trị này sẽ được sử dụng thay thế. 
                    demoChannelTitle có thể là một giá trị mẫu hoặc một giá trị mặc định để hiển thị khi không có thông tin 
                    kênh nào được cung cấp. */}
                        <CheckCircle
                            sx={{
                                fontSize: "12px", color: "gray", ml: "5px"
                            }}
                        />
                    </Typography>
                    <Typography variant="subtitle2" color="gray">
                        Đã đăng: {formatTimeAgo(snippet?.publishedAt)}
                    </Typography>
                </Link>
            </CardContent>
        </Card>
    )
};

export default VideoCard