class RequestService {
  getRequest(url){
    let data = (fetch(url)
      .then(res => {
        return res.json()
      })
      .catch(err => {
        console.log('Something went wrong :c -> refresh page ^.^', err)
      })
    )
    return data
  }
}

export default new RequestService()
