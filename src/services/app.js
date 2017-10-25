import { request, config } from 'utils'

const { api } = config
const { userLogin } = api

export async function query(params) {
  return request({
    url: userLogin,
    method: 'post',
    data: params,
  })
}

