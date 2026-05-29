import { useQuery, useMutation } from "@apollo/client/react";
import { getUsers } from "../graphql/queries/userQuery";
import { Link } from "react-router";
// import { useGetUsersQuery } from "../generated/graphql"; //code: npx graphql-codegen
import type { UsersResponse } from "../interface/userInterface";
import { Delete_User } from "../graphql/mutations/userMutation";
import { useState } from "react";
import Modal from "../components/shared/ModalShare";

const User = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const { data, loading, error } = useGetUsersQuery();
  const { data, loading, error } = useQuery<UsersResponse>(getUsers);
  const [deleteUser] = useMutation(Delete_User, {
    refetchQueries: [getUsers], // โหลด query ใหม่
  });
  const handleDelete = async (id: string) => {
    try {
      await deleteUser({
        variables: {
          id,
        },
      });
      console.log("delete success");
    } catch (error) {
      console.log(error);
    }
  };
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;
  return (
    <>
      <div className="flex justify-between">
        <h3>USER</h3>
         {/* ปุ่มเปิด modal */}
        <button
          onClick={() => setIsOpen(true)}
          className="rounded-lg bg-red-500 px-4 py-2 text-white"
        >
          เปิด Modal
        </button>
      </div> <hr />
      <div>
        <div className="overflow-x-auto">
          <table className="min-w-full overflow-hidden rounded-2xl">
            <thead>
              <tr className="bg-gray-100 text-left text-sm uppercase text-gray-600">
                <th className="px-6 py-4 whitespace-nowrap">ID</th>
                <th className="px-6 py-4 whitespace-nowrap">Name</th>
                <th className="px-6 py-4 whitespace-nowrap">PHONE</th>
                <th className="px-6 py-4 whitespace-nowrap">DEPARTMENT</th>
                <th className="px-6 py-4 whitespace-nowrap text-center">Actions</th>
              </tr>
            </thead>

            <tbody>
              {data?.users?.map((user: any, index: number) => (
                <tr className="border-b hover:bg-gray-50"
                  key={user.id}>
                  <td className="px-6 py-4 font-medium text-gray-700">
                    {index + 1}
                  </td>

                  <td className="px-6 py-4 text-gray-800">{user.name}</td>

                  <td className="px-6 py-4 text-gray-600">{user.phone}</td>

                  <td className="px-6 py-4">
                    <span className="rounded-lg bg-purple-100 px-3 py-1 text-sm font-medium text-purple-700">
                      {user.department.name}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-center gap-2">
                      <button className="rounded-lg bg-blue-500 px-3 py-2 text-sm text-white hover:bg-blue-600">
                        Edit
                      </button>

                      <button className="rounded-lg bg-red-500 px-3 py-2 text-sm text-white hover:bg-red-600"
                        onClick={() => handleDelete(user.id)}>
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div >

      <div className="p-10">
        {/* ปุ่มเปิด modal */}
        <button
          onClick={() => setIsOpen(true)}
          className="rounded-lg bg-blue-500 px-4 py-2 text-white"
        >
          เปิด Modal
        </button>

        {/* เรียกใช้ Modal */}
        <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          title="test Title"
        >
          <h2 className="text-2xl font-bold">Hello Modal</h2>

          <p className="mt-2 text-gray-600">
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum molestias eaque magni nihil atque exercitationem earum? Quaerat nesciunt minus nulla placeat iure quidem illum quasi est nobis, eaque aperiam itaque repellendus asperiores et laborum eveniet, maiores quam ratione nihil delectus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde dolore molestias dolorem, inventore repudiandae aliquid consequuntur ipsum recusandae obcaecati neque quibusdam ipsa fuga facere architecto, libero perferendis veritatis exercitationem voluptatum dolorum? Dolorem eius nisi, molestias quidem, soluta dolor laborum error earum voluptatem a quibusdam itaque natus. Fugiat, modi illo tempora qui esse voluptatum enim, nesciunt veritatis numquam, nisi doloremque inventore!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur minus corporis error hic officia quo dicta temporibus voluptatem esse autem quam nostrum ad placeat ratione blanditiis, adipisci animi vel ipsam, sed neque rerum suscipit ea eos? Aspernatur id, quos minus dolorum vitae iure veniam facilis quibusdam eius ipsum impedit dignissimos.
          </p>

          <button
            onClick={() => setIsOpen(false)}
            className="mt-4 rounded-lg bg-red-500 px-4 py-2 text-white"
          >
            ปิด
          </button>
        </Modal>
      </div>
    </>
  )
}

export default User