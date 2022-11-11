const host = 'http://localhost:3030/'

export async function requester(method, url, data) {
    const user = JSON.parse(sessionStorage.getItem('user'))
    const option = {
        method,
        headers: {

        }
    }

    if (data) {
        option.headers['Content-Type'] = 'Application/json'
        option.body = JSON.stringify(data)
    }

    if (user) {
        const token = user.accessToken
        option.headers['X-Authorization'] = token
    }

    try{
        const res = await fetch(host + url, option)
        if (!res.ok) {
            if (res.status === 403) {
                sessionStorage.removeItem('user')
            }
            const err = await res.json()
            throw new Error(err.message)
        }
        
        if (res.status === 204) {
            return res
        }else{
            return res.json()
        }
    
    }catch(err){
        alert(err)
        throw new Error(err.message)
    }
}

const get = requester.bind(null, 'get')
const post = requester.bind(null, 'post')
const put = requester.bind(null, 'put')
const del = requester.bind(null, 'delete')

export {
    get,
    post,
    put,
    del as delete
}