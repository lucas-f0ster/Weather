import request from 'superagent'

const rootUrl = '/api/v1'

export const getCities = () => {
  return request.get(`${rootUrl}/cities`)
    .then(res => res.body)
}
