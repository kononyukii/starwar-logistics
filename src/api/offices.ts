import { instance } from './index'

export const officesApi: any = {
  getOffices() {
    return instance.get(`planets/`).then((res) => res.data)
  }
}
