export interface RegisterRequest{
  firstName: string;
  lastName:  string;
  username:  string;
  email:     string;
  password:  string;
}

export interface LoginRequest {
  email:    string;
  password: string;
}

export type AuthStatus = 'checking' | 'authenticated' | 'not-authenticated'
