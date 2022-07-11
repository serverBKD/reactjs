const CRYPTO_URL =
  "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.json"

export default async function getCrypto() {
  try {
    const response = await fetch(`${CRYPTO_URL}`)
    const data = await response.json()
    const crypto = data.map(item => {
      console.log(item)
    }
    return data
  } catch (error) {
    console.log(error)
  }
}
