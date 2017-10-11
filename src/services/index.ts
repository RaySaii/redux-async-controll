const Get = (url) => {
    return fetch(url, {
        method: 'GET',
        headers: {'Accept': 'application/json'}
    }).then(res => res.json()).then(res=>{
        console.log('response',res)
        return res
    })
}
const services = {
    fetchMovie: () => Get('http://gank.io/api/day/2015/08/06'),
    fetchPic: () =>  Get('http://gank.io/api/data/福利/10/1')
}
export default services