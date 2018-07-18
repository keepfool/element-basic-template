import request from '@/utils/request'

export function fetchList (options) {
  let { url, method, query } = options
  return request({
    url: url,
    method: method || 'get',
    params: query
  })
}
