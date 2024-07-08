'use server'

import { User } from '@/lib/types';

export async function getAllUsers() {
  const res = await fetch("https://6683b4274102471fa4cb0564.mockapi.io/api/v1/users")
  const users = await res.json()
  console.log(users);

  return users
}

export async function getUserById(id: string) {
  const res = await fetch(`https://6683b4274102471fa4cb0564.mockapi.io/api/v1/users/${id}`)
  const user = await res.json
  console.log(user);

  return user
}