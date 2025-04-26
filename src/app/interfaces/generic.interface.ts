export interface ApiResponse<T>{
  message?: string
  statusCode: number
  hasError: boolean
  isSuccess: boolean
  errorMessage?: string
  data?:T
}


export interface PaginationResponse<T>{
  totalCount: number
  hasPrevious?: boolean
  hasNext?: boolean
  totalPages?: number
  data: T
}
