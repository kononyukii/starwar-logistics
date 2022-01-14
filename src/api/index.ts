import axios from 'axios'

const baseURL = process.env.REACT_APP_MM_API_URL || ''

export const instance = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json'
  }
})
