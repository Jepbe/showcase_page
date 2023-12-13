export default async (res, req) => {
    var key = process.env.GITHUB_AUTH_TOKEN
    const headers = {
        "Authorization": "Token" + key
    }

    const url = 'https://api.github.com/users/jepbe/followers'
    const respone = await fetch(url, {"headers": headers})
    const json = respone.json()
    const numFollowers = Object.keys(json).length

    const url2 = 'htpps://api.github.com/users/jepbe/repos'
    const respone2 = await fetch(url2)
    const json2 = respone2.json()
    const numProjects = Object.keys(json2).length
    
    return res.status(200).json( {
        numFollowers,
        numProjects
    })

}