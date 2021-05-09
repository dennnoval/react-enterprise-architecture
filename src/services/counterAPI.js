import axios from 'axios'

export default {
  fetchCount: () => axios({
    method: 'GET',
    url: 'http://localhost:3000/public/myData.json',
    headers: {
      'Content-Type': 'application/json'
    },
    cancelToken: axios.CancelToken.source().token
  })
}
