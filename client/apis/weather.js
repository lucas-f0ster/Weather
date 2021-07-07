import request from 'superagent'

const rootUrl = '/api/v1'

export const getWeather = (long, lat) => {
  return request.get(`${rootUrl}/weather/${long}/${lat}`)
    .then(res => res.body)
    .catch(err => console.log(err))
}
