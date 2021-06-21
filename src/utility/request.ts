import axios from 'axios'

axios.defaults.baseURL = "https://shop-node-courses.herokuapp.com"

const dataRequest = async () => {
    try {
        return await axios.get('/data').then(res => res.data)
    } catch (error) {
        throw new Error(error);
    }
}

export default dataRequest;