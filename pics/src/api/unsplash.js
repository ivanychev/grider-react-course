import axios from 'axios'

const accessKey = "UV89I3fTxunCRQCFgjfbcURQ2Mxsisy1AtQMADnm1qU"

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        "Accept-Version": "v1",
        Authorization: `Client-ID ${accessKey}`
    }
});