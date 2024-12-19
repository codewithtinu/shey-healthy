import React, { useEffect } from 'react'
import axios from 'axios'


const Home = () => {
  const getData = async () => {
    try {
      const response = await axios.post('/api/user/get-info-by-id',
        {
          headers : {
            Authorization : 'Bearer ' + localStorage.getItem('token'),
            success: true
          }
        }
      );
      console.log('home getinfoby id: ', response.data);
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getData()
  },[])
  return (
    <div>Home</div>
  )
}

export default Home