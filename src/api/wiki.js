import request from '~b/api'

export const list = function () {
  return request().get('/api/wiki/')
}

export const create = function (data) {
  return request().post('/api/wiki/new', data)
}

export const show = function (id, data) {
  return request().get('/api/wiki/' + id, data)
}

export const update = function (id, data) {
  return request().put('/api/wiki/' + id, data)
}

export const remove = function (id) {
  return request().delete('/api/wiki/' + id)
}

export default { list, create, show, update, remove }
