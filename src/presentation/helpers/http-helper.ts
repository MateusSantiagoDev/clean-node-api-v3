import { HttpResponse } from '../protocols/http'

export const badRequest = (err: Error): HttpResponse => ({
  statusCode: 400,
  body: err
})

export const serverError = (): HttpResponse => ({
  statusCode: 500,
  body: 'Internal server error'
})

export const ok = (data: any): HttpResponse => ({
  statusCode: 200,
  body: data
})
