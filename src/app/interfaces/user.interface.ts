export interface UserDto{
  username: string
  fullname: string
  imagUrl: string
  roles: string[]
}

export const UserInitialState:UserDto = {
  username: "",
  fullname: "",
  imagUrl: "",
  roles: []
}

export interface User {
  id:       string;
  fullname: string;
  username: string;
  avatar?:   string;
}

