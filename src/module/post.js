const postData = () => {
    axios.post('http://localhost:3001/users', {
        id,
        username,
        email
    })
}