const COMPANY_URL = "https://fakerapi.it/api/v1/companies?_seed=456"

export async function getCompany() {
  try {
    const response = await fetch(`${COMPANY_URL}`)
    const data = await response.json()
    return data
  } catch (error) {
    console.log(error)
  }
}
