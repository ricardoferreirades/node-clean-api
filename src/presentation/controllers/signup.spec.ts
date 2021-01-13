import { SignUpController } from './signup'

describe('SignUp controller', function () {
  describe('when the name is not provided', () => {
    const httpRequest = {
      body: {
        email: 'email@email.com',
        password: 'some_password',
        passwordConfirmation: 'some_password'
      }
    }

    it('returns 400 code', () => {
      const sut = new SignUpController()
      const httpResponse = sut.handle(httpRequest)
      expect(httpResponse.statusCode).toBe(400)
    })

    it('returns an error message', () => {
      const sut = new SignUpController()
      const httpResponse = sut.handle(httpRequest)
      expect(httpResponse.body).toEqual(new Error('Missing param: name'))
    })
  })

  describe('when no email is provided', () => {
    const httpRequest = {
      body: {
        name: 'some_name',
        password: 'some_password',
        passwordConfirmation: 'some_password'
      }
    }
    it('returns an error message', () => {
      const sut = new SignUpController()
      const httpResponse = sut.handle(httpRequest)
      expect(httpResponse.statusCode).toBe(400)
    })

    it('returns an error message', () => {
      const sut = new SignUpController()
      const httpResponse = sut.handle(httpRequest)
      expect(httpResponse.body).toEqual(new Error('Missing param: email'))
    })
  })
})
