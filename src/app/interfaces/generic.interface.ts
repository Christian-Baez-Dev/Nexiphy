export interface ApiResponse<T>{
  message?: string
  statusCode: number
  hasError: boolean
  isSucces: boolean
  errorMessage?: string
  data?:T
}
