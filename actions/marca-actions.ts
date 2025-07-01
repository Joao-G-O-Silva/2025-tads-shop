'use server'

import { redirect } from "next/navigation"
const API_URL = process.env.API_URL
const headers = {
    'Content-Type': 'aplicattion/json'
}
export async function criarMarca(formData: FormData) {
    console.log(formData)
    let response = await fetch('${API_URL}/marca', {
        headers,
        method: 'POST',
        body: JSON.stringify({ nome: formData.get('nome') })
    })

    redirect('/cadastro/marcas/')
}
export async function deletarMarca(formData: FormData) {
    let response = fetch('${API_URL}/marca/${id}', {
        method: 'DELETE'
    })
    redirect('/cadastro/marcas/')
}
