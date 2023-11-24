import axios from "axios";

const BASE_URL = 'https://youtube-v31.p.rapidapi.com'
// Định nghĩa URL cơ sở cho API YouTube thông qua RapidAPI

const options = {
    /**Tạo một đối tượng options chứa các tham số và headers cho yêu cầu HTTP */
    params: {
        maxResults: '2000'
        /**Tham số maxResults được thêm vào URL để giới hạn số lượng kết quả tối đa trả về */
    },
    headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
        /**Sử dụng API key từ biến môi trường để xác thực */
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
        /**Host của RapidAPI */
    }
};
export const fecthFromAPI = async (url) => {
    /**Xuất ra ngoại tuyến hàm fecthFromAPI, nhận một đối số là URL và thực hiện một yêu cầu GET đến API YouTube thông qua RapidAPI */
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    /**${BASE_URL}/${url}: Đây là cách sử dụng template literals trong JavaScript để kết hợp đường dẫn cơ sở (BASE_URL) và url để tạo ra địa chỉ hoàn chỉnh 
     * của yêu cầu.
     * options: Là đối tượng chứa các tham số và headers cho yêu cầu HTTP. Nó được truyền vào như là một tham số của phương thức axios.get để cung cấp các 
     * cài đặt như maxResults, X-RapidAPI-Key, và X-RapidAPI-Host.  */
    return data;
    /**Trả về dữ liệu từ yêu cầu */
}
