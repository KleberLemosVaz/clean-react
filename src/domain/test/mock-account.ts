import { AuthenticationParams } from '@/domain/usecases'
import { faker } from '@faker-js/faker'
import { AccountModel } from '../models'

export const mockAuthetication = (): AuthenticationParams => ({
  email: faker.internet.email(),
  password: faker.internet.password()
})

export const mockAccountModel = (): AccountModel => ({
  accessToken: faker.datatype.uuid()
})
