export async function getUser(id: string) {
  return await fetch(`https://6683b4274102471fa4cb0564.mockapi.io/api/v1/users/${id}`).then(res => res.json())
}