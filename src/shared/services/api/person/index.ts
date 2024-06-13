import { api } from '../axios-config'
import { Environment } from '../../../environment'

export interface IPersons {
  id: number
  email: string
  cityId: number
  fullName: string
}

export interface IPerson {
  id: number
  email: string
  cityID: number
  fullName: string
}

type TPersonWithTotal = {
  data: IPersons[]
  totalCount: number
}

const URL_PERSONS = `${Environment.BASE_URL}/persons`

async function getAll(
  page = 1,
  filterName = '',
): Promise<TPersonWithTotal | Error> {
  try {
    const relativeUrl = `/persons?_page=${page}&_limit=${Environment.LINE_LIMIT}&fullName_like=${filterName}`

    const { data, headers } = await api.get(relativeUrl)

    if (!data) {
      return responseErrorNotFound()
    }

    return {
      data,
      totalCount: Number(headers['x-total-count'] || Environment.LINE_LIMIT),
    }
  } catch (error) {
    return responseError(error)
  }
}

async function getById(id: number): Promise<IPerson | Error> {
  try {
    const { data } = await api.get(`${URL_PERSONS}/${id}`)

    if (!data) {
      return responseErrorNotFound()
    }

    return data
  } catch (error) {
    return responseError(error)
  }
}

async function create(person: Omit<IPerson, 'id'>): Promise<number | Error> {
  try {
    const response = await api.post(URL_PERSONS, person)

    if (response.status !== 201) {
      return responseError(response)
    }

    return response.status
  } catch (error) {
    return responseError(error)
  }
}

async function updateById(id: number, person: IPerson): Promise<void | Error> {
  try {
    await api.put(`${URL_PERSONS}/${id}`, person)
  } catch (error) {
    return responseError(error)
  }
}

async function deleteById(id: number): Promise<void | Error> {
  try {
    await api.delete(`${URL_PERSONS}/${id}`)
  } catch (error) {
    return responseError(error)
  }
}

function responseError(error: unknown) {
  console.error(error)
  return new Error(
    (error as { message: string }).message || 'Error listing the records.',
  )
}

function responseErrorNotFound() {
  return new Error('Record not found.')
}

export const PersonService = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
}
