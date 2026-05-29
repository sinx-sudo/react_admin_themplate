import { gql } from "@apollo/client";

export const Create_User = gql`
  mutation CreateUser($name: String!, $phone: String!, $address: String, $depId: String) {
    createUser(name: $name, phone: $phone, address: $address, depId: $depId) {
      name
      phone
      address
      depId
    }
  }
`;

export const Delete_User = gql`
mutation DeleteUser($id: String!){
    deleteUser(id: $id){
    id}}`