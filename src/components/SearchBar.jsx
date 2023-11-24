import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Paper, IconButton } from '@mui/material'
import { Search } from '@mui/icons-material'

const SearchBar = () => {

    //Chức năng tìm kiếm
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    //Chức năng gửi dữ liệu khi tìm kiếm
    const handleSubmit = (e) => {
        e.preventDefault();
        /**Dòng này ngăn chặn hành động mặc định của sự kiện submit. Khi bạn gửi một biểu mẫu trong HTML, trình duyệt 
         * thường sẽ làm mới trang hoặc thực hiện một số hành động mặc định khác. Bằng cách sử dụng e.preventDefault(), bạn 
         * ngăn chặn hành động mặc định đó. */
        if (searchTerm) {
            /**Dòng này kiểm tra xem biến searchTerm có giá trị không. Nếu searchTerm có giá trị (khác rỗng hoặc null), 
             * điều kiện trong ngoặc nhọn ({}) sẽ được thực hiện. */
            navigate(`/search/${searchTerm}`)
            /**Nếu searchTerm có giá trị, navigate được gọi để chuyển hướng đến một đường dẫn mới. Trong trường hợp này, nó 
             * chuyển hướng đến đường dẫn /search/ kèm theo giá trị của searchTerm. Ví dụ, nếu searchTerm là "abc", đường 
             * dẫn sẽ trở thành /search/abc. */
            setSearchTerm('');
            /**Sau khi thực hiện chuyển hướng, setSearchTerm('') được gọi để đặt giá trị của searchTerm thành chuỗi rỗng. 
             * Điều này có thể là để làm sạch ô nhập liệu sau khi thực hiện tìm kiếm. */
        }
    }

    return (
        <Paper
            /**<Paper> là một thành phần cung cấp bởi các thư viện UI như Material-UI, giúp tạo ra các hộp hoặc phần nền giấy (paper) để đặt các thành phần 
             * khác vào bên trong. */
            component="form"
            /**component="form": Cho biết <Paper> được sử dụng như một thành phần <form>. Điều này có thể liên quan đến việc sử dụng nút "submit" hoặc các 
             * thuộc tính khác của một biểu mẫu. */
            onSubmit={handleSubmit}
            sx={{
                borderRadius: 20,
                border: '1px solid #e3e3e3',
                pl: 2,
                boxShadow: 'none',
                mr: { sm: 5 },
            }}
        >
            <input onChange={(e) => setSearchTerm(e.target.value)} value={searchTerm} type="text" className='search-bar' placeholder='Tìm kiếm...' />
            <IconButton
                type='submit'
                sx={{
                    p: '10px',
                    color: 'red'
                }}
            >
                <Search />
            </IconButton>
        </Paper>
    )
}

export default SearchBar