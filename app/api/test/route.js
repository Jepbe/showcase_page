export async function GET() {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos")
    const data = await res.json()

    const url = 'https://api.github.com/users/jepbe/followers'
    const respone = await fetch(url)
    const json = respone.json()
    const numFollowers = Object.keys(json).length 
    
    return Response.json({numFollowers })
  }