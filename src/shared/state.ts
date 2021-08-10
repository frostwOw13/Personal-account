export interface UserData {
  name: string,
  password: string,
  id: number
}

export interface UserLoginData {
  name: string,
  password: string
}

export const users = <Array<UserData>>[
  {
    name: "admin",
    password: "admin",
    id: 0
  }
];
