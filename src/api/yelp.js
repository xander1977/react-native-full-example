import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers:{
        Authorization: 'Bearer i3e1NGm5NSlW91sstH6xdZ9SPOOKMbR8ucgieeYkONyck2FUbcVe0skdbeGgdbDO0-mbCJpCX7-QA_mY5jb3x8lSRQ3kRcpHRVGBTmS_GUdZ2tZ5IZtalvqlY-aYXXYx'
    }
});