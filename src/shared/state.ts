export interface UserData {
  name: string,
  password: string,
  id: number
}

export const users = <Array<UserData>>[
  {
    name: "admin",
    password: "admin",
    id: 0
  }
];
