import axios, { AxiosResponse, AxiosRequestConfig } from 'axios'

type CustomFetcher = <T = any>(
  url: string | undefined,
  options?: AxiosRequestConfig,
) => Promise<AxiosResponse<T>>

export const fetcher: CustomFetcher = (url, options) => {
  if (!url) throw Error('url undefined.')
  return axios.get(url, options)
}
