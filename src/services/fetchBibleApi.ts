export async function bibleApiGet<T>(path: string) {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdHIiOiJTYXQgTWF5IDA0IDIwMjQgMTU6MDM6NDUgR01UKzAwMDAuNjYzM2Y4NzYzNmZkYjIwMDI4YzMwNzFhIiwiaWF0IjoxNzE0ODM1MDI1fQ.vIQS07a0cs5l4Vuh26ilNbQeJ0yFK0-KV8jbOC3a48s'
  
    try {
      const response = await fetch(
        `https://www.abibliadigital.com.br/api/${path}`,
        {
          method: "GET",
          headers: { Authorization: `Bearer ${token}` },
        }
      )
  
      if (response.status !== 200) {
        return null
      }
  
      const data = await response.json()
      return data as T
    } catch (error) {
      return null
    }
  }