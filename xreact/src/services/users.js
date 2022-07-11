const USERS_URL = "https://jsonplaceholder.typicode.com"

export async function getUsers() {
  try {
    const response = await fetch(`${USERS_URL}/todos`)
    const data = await response.json()

    return data
  } catch (error) {
    console.log(error)
  }
}
