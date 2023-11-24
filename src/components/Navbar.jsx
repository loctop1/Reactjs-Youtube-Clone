import React from 'react'
import { Stack } from '@mui/material'
import { Link } from 'react-router-dom'
import { logo } from '../utils/constants'
import SearchBar from './SearchBar'

const Navbar = () => {
  return (
    <Stack
      /**<Stack> thường được sử dụng để xếp chồng các thành phần con của nó theo một hướng cụ thể (trong trường hợp này là theo chiều ngang vì 
       * direction="row"). Điều này giúp bạn quản lý và kiểm soát layout của ứng dụng của mình một cách dễ dàng hơn. */
      direction="row"
      alignItems="center"
      p={2}
      sx={{ position: 'sticky', background: '#282828', top: '0', justifyContent: 'space-between' }}
    /**sx: Một cách để cấu hình các kiểu tùy chỉnh (custom styles) cho thành phần. */
    >
      <Link to='/' style={{ display: 'flex', alignItems: 'center' }}>
        <img src={logo} alt="logo" height={100} />
      </Link>
      <SearchBar />
    </Stack>
  )
}

export default Navbar