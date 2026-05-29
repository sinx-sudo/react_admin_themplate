interface UserType{
    id: String
    name: String
    phone: String
    address: String

}

export interface UsersResponse {
  users: UserType[];
}

