import React from 'react'
import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Typography, Box, Stack } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { Loader, Videos } from './'
import { fecthFromAPI } from '../utils/fecthFromAPI'

//Thư viện tải Video
import ReactPlayer from 'react-player'

const VideoDetail = () => {
    // Video chi tiết
    const [videoDetail, setVideoDetail] = useState(null)
    // Video khác
    const [videos, setVideos] = useState()
    const { id } = useParams();

    useEffect(() => {
        fecthFromAPI(`videos?part=snippet,statistics&id=${id}`).then((data) => setVideoDetail(data.items[0]))
        /**Dòng này thực hiện một cuộc gọi API để lấy thông tin chi tiết về video dựa trên ID video (id). Tham số 
         * part=snippet,statistics cho biết bạn muốn lấy cả thông tin snippet và thống kê (statistics) của video. Kết quả 
         * trả về là một promise, và khi promise được giải quyết, hàm callback được thực hiện. data.items[0] là video đầu 
         * tiên trong danh sách, và setVideoDetail được gọi để cập nhật trạng thái của videoDetail. */
        fecthFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`).then((data) => setVideos(data.items))
        /**Dòng này thực hiện một cuộc gọi API để lấy danh sách video liên quan dựa trên ID video (id). Tham số 
         * part=snippet cho biết bạn muốn lấy phần snippet của video. relatedToVideoId=${id} chỉ định rằng bạn muốn lấy các 
         * video liên quan đến video có ID là id. Kết quả trả về là một promise, và khi promise được giải quyết, hàm 
         * callback được thực hiện. data.items là mảng các video liên quan, và setVideos được gọi để cập nhật trạng thái 
         * của videos. */
    }, [id])

    if (!videoDetail?.snippet) return <Loader />;
    /**Nếu videoDetail là null hoặc undefined, biểu thức sẽ trả về undefined.
     * Sau đó, sử dụng toán tử NOT (!) để kiểm tra xem giá trị nhận được từ videoDetail?.snippet có phải là giá trị falsy 
     * (bao gồm undefined, null, false, 0, NaN, hoặc một chuỗi rỗng) không. Nếu giá trị là falsy, điều kiện trở thành true.
     * Nếu điều kiện là true, có nghĩa là không có thuộc tính snippet trong đối tượng videoDetail hoặc videoDetail chính 
     * nó là null hoặc undefined, thì hàm sẽ ngay lập tức trả về một component <Loader />. Điều này là một cách ngắn gọn để 
     * điều kiện hiển thị một chỉ báo đang tải (component <Loader />) khi dữ liệu cần thiết (snippet trong trường hợp này) 
     * chưa có sẵn.*/

    const { snippet: { title, channelId, channelTitle }, statistics: { viewCount, likeCount } } = videoDetail;
    /**videoDetail: Đây là đối tượng chứa thông tin chi tiết về video, chẳng hạn như snippet và statistics. Đối tượng này 
     * có thể được trả về từ một cuộc gọi API hoặc một nguồn dữ liệu khác.
     * Dòng này sử dụng cú pháp giải nén đối tượng (object destructuring) để lấy ra các thuộc tính title, channelId, và 
     * channelTitle từ thuộc tính snippet của videoDetail. Điều này giúp ngắn gọn hóa mã lệnh và giúp truy cập các thuộc 
     * tính dễ đọc hơn.
     * Tương tự như trên, dòng này sử dụng cú pháp giải nén đối tượng để lấy ra các thuộc tính viewCount và likeCount từ 
     * thuộc tính statistics của videoDetail. */

    return (
        <Box minHeight="95vh">
            <Stack direction={{ xs: 'column', md: 'row' }}>
                <Box flex={1}>
                    <Box sx={{ width: '100%', position: 'sticky', top: '86px' }}>
                        {/* Video */}
                        <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className="react-player" controls playing={true} />
                        {/* Tiêu đề Video */}
                        <Typography color="white" variant='h5' fontWeight="bold" p={2} >
                            {title}
                        </Typography>
                        <Stack
                            direction="row"
                            justifyContent="space-between"
                            sx={{
                                color: 'white'
                            }}
                            py={1}
                            px={2}
                        >
                            {/* Tên kênh Youtube */}
                            <Link to={`/channel/${channelId}`}>
                                <Typography fontSize="20px" variant={{ sm: 'subtitle1', md: 'h6' }} color='white'>
                                    {channelTitle}
                                    <CheckCircle sx={{ fontSize: '13px', color: 'gray', ml: '5px' }} />
                                </Typography>
                            </Link>
                            <Stack direction="row" gap="20px" alignItems='center'>
                                {/* Lượt xem */}
                                <Typography variant='body1' sx={{ opacity: 0.7 }}>
                                    {parseInt(viewCount).toLocaleString()} lượt xem
                                </Typography>
                                {/* Lượt thích */}
                                <Typography variant='body1' sx={{ opacity: 0.7 }}>
                                    <ThumbUpIcon sx={{ fontSize: '20px', color: 'white', my: '6' }} /> {parseInt(likeCount).toLocaleString()} lượt thích
                                </Typography>
                            </Stack>
                        </Stack>
                    </Box>
                </Box>
                <Box
                    px={2}
                    py={{ md: 1, sx: 5 }}
                    justifyContent="center"
                    alignItems="center"
                >
                    <Videos videos={videos} direction="column" />
                </Box>
            </Stack>
        </Box>
    )
}

export default VideoDetail