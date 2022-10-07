const tokenConfig=()=>({
    headers:{
        Authorization:`JWT ${localStorage.getItem('token')}`
    }
})

export default tokenConfig
