import React from 'react'
import { Stack, Box } from '@mui/material'
import { VideoCard, ChannelCard, Loader } from './'

const Videos = ({ videos, direction }) => {

    if (!videos?.length) return <Loader />;
    /**videos: Đây là một mảng chứa thông tin về các video. Mảng này có thể được trả về từ một cuộc gọi API hoặc từ nguồn 
     * dữ liệu khác.
     * Sử dụng optional chaining (?.) để kiểm tra xem biến videos có tồn tại không (undefined hoặc null), và sau đó, kiểm 
     * tra độ dài của mảng bằng thuộc tính length. Nếu videos không tồn tại (undefined hoặc null), hoặc độ dài của nó là 0, 
     * điều kiện sẽ trở thành true.
     * Dùng toán tử NOT (!) để kiểm tra nếu điều kiện là true. Nếu videos là undefined, null, hoặc mảng có độ dài bằng 0, 
     * điều kiện sẽ trở thành true.
     * Nếu điều kiện là true, có nghĩa là mảng videos không tồn tại hoặc không có video nào, nó sẽ ngay lập tức trả về một 
     * component <Loader />. Điều này là một cách thông thường để hiển thị một chỉ báo đang tải (component <Loader />) khi 
     * dữ liệu cần thiết (videos trong trường hợp này) chưa có sẵn. */

    return (
        <div>
            <Stack
                direction={direction || "row"}
                flexWrap="wrap"
                justifyContent='start'
                gap={2}
            >
                {videos.map((item, index) => {
                    return (
                        <Box key={index}>
                            {/* Danh sách video */}
                            {item.id.videoId && <VideoCard video={item} />}
                            {/* Kênh youtube */}
                            {item.id.channelId && <ChannelCard channelDetail={item} />}
                        </Box>
                    )
                })}
            </Stack>
        </div>
    )
}

export default Videos