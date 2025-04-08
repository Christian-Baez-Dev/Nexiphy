export interface ApiResponse<T>{
  message?: string
  statusCode: number
  hasError: boolean
  isSuccess: boolean
  errorMessage?: string
  data?:T
}
