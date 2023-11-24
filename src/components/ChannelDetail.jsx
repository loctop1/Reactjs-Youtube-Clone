import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import { Videos, ChannelCard } from './';
import { fecthFromAPI } from '../utils/fecthFromAPI';

const ChannelDetail = () => {

  const [channelDetail, setChannelDetail] = useState(null)
  const [videos, setVideos] = useState([])
  const { id } = useParams();

  useEffect(() => {
    fecthFromAPI(`channels?part=snippet&id=${id}`).then((data) => setChannelDetail(data?.items[0]));
    /**Dòng này thực hiện một cuộc gọi API để lấy thông tin chi tiết về một kênh sử dụng id đã cho. Tham số part=snippet 
     * cho biết bạn muốn lấy phần snippet của kênh. Kết quả trả về là một promise, và khi promise được giải quyết, nó sẽ 
     * đặt thông tin chi tiết của kênh vào trạng thái sử dụng setChannelDetail.
     * Phương thức .then() được gọi trên đối tượng promise (ở đây là kết quả của cuộc gọi API). Nó chỉ được thực thi khi 
     * promise đã được giải quyết (hoặc trạng thái thành công).
     * Tham số data là dữ liệu được trả về từ cuộc gọi API. */
    fecthFromAPI(`search?channelId=${id}&part=snippet&order=date`).then((data) => setVideos(data?.items));
    /**Dòng này thực hiện một cuộc gọi API để lấy danh sách video từ kênh được chỉ định bởi id, được sắp xếp theo ngày. 
     * Tham số part=snippet cho biết bạn muốn lấy phần snippet của video. Kết quả trả về là một promise, và khi promise 
     * được giải quyết, nó sẽ đặt danh sách video vào trạng thái sử dụng setVideos. */
  }, [id])

  return (
    <Box minHeight="95vh">
      <Box>
        <div style={{
          height: '300px',
          background: 'linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)',
          zIndex: 10,
        }} />
        <ChannelCard channelDetail={channelDetail} marginTop="-93px" />
      </Box>
      <Box p={2} display="flex">
        <Box sx={{ mr: { sm: '100px' } }} />
        {/* Danh sách Video */}
        <Videos videos={videos} />
      </Box>
    </Box>
  );
};

export default ChannelDetail;