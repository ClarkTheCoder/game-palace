import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '5f85ab47928841f98324909c8f499a91'
    }
})

