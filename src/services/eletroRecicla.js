import { api } from './api'

function unwrap(request) {
  return request.then(({ data }) => data)
}

export const listarEmpresas = () => unwrap(api.get('/api/v1/empresas'))
export const listarColetas = () => unwrap(api.get('/api/v1/coletas'))
export const listarProdutos = () => unwrap(api.get('/api/v1/produtos'))
export const listarCategorias = () => unwrap(api.get('/api/v1/categorias'))
