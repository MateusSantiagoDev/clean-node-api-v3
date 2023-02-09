import { SignUpController } from './signup'

const makeSut = (): SignUpController => {
  return new SignUpController()
}

describe('SignUp Controller', () => {
  test('Shoud return 400 if no name is provided', async () => {
    const sut = makeSut()
    const httpRequest = {
      body: {
        email: 'any_email@mail.com',
        password: 'any_password',
        confirmPassword: 'any_password'
      }
    }
    const httpResponse = await sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual('missing param: name')
  })
})
