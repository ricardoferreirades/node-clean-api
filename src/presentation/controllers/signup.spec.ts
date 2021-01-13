import { SignUpController } from './signup'
describe('SignUp controller', function () {
  it('returns 400 code if no name is provided', () => {
    const sut = new SignUpController()
    const httpRequest = {
      body: {
        email: 'email@email.com',
        password: 'some_password',
        passwordConfirmation: 'some_password'
      }
    }
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
  })
})
