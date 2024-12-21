
import axios from "axios";
import { useEffect, useState } from "react";
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import { Link} from "react-router-dom";
import { toast } from "react-toastify";

export default function Home() {
  interface User {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    age:number;
    phone: string;
    birthDate: string;
    image: string;
  }
  
  const [users, setUsers] = useState<User[]>([]);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const navigate=useNavigate()
  const getUsers = async () => {
    try {
      const response = await axios.get<{ users: User[] }>("https://dummyjson.com/users");
      setUsers(response.data.users);
      console.log(response.data.users)
    } catch (error) {
      console.log(error);
    }
  };

  const deleteUser = async (id: number) => {
    try {
      await axios.delete(`https://dummyjson.com/users/${id}`);
      setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
      setIsModalOpen(false);
      setSelectedUser(null);
      toast.success('deleting success')
    } catch (error) {
      console.log(error);
      toast.error('faild to delete')
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="bg-stone-50 h-full flex flex-col p-4">
      <div className="flex justify-between py-3">
        <h3 className="text-lg font-bold">User List</h3>
        <Link to='/dashboard/adduser' className="bg-yellow-500 font-bold text-white rounded-sm py-2 px-6">
          Add New User
        </Link>
      </div>
      <hr />
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-10 flex-grow">
        <table className="min-w-full w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3"></th>
              <th scope="col" className="px-6 py-3">First Name</th>
              <th scope="col" className="px-6 py-3">Last Name</th>
              <th scope="col" className="px-6 py-3">Email</th>
              <th scope="col" className="px-6 py-3">Age</th>
              <th scope="col" className="px-6 py-3">Phone</th>
              <th scope="col" className="px-6 py-3">Birth Date</th>
              <th scope="col" className="px-6 py-3"><span className="sr-only">Edit</span></th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
                <tr
                key={user.id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <td><img src={user.image} alt="user" className="w-12 pl-4" /></td>
                <td className="px-6 py-4">{user.firstName}</td>
                <td className="px-6 py-4">{user.lastName}</td>
                <td className="px-6 py-4">{user.email}</td>
                <td className="px-6 py-4">{user.age}</td>
                <td className="px-6 py-4">{user.phone}</td>
                <td className="px-6 py-4">{user.birthDate}</td>
                <td className="px-6 py-4 text-right flex space-x-4">
                  <Link to={`/dashboard/adduser/${user.id}`} >
                  <CiEdit size={24}   className="text-maincolor cursor-pointer" />
                  </Link>
                  <MdDeleteOutline
                    size={24}
                    className="text-maincolor cursor-pointer"
                    onClick={() => {
                      setSelectedUser(user);
                      setIsModalOpen(true);
                    }}
                  />
                </td>
              </tr>  
            ))}
          </tbody>
        </table>
      </div>

      {isModalOpen && selectedUser && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow py-8 px-6">
            <h2 className="text-lg font-bold mb-3">Confirm Deletion {selectedUser.firstName}</h2>
            <p>Are you sure you want to delete user <b>{selectedUser.firstName}</b>?</p>
            <div className="mt-4 flex justify-end space-x-4">
              <button
                className="bg-red-500 text-white px-4 py-2 rounded-lg"
                onClick={() => deleteUser(selectedUser.id)}
              >
                Delete
              </button>
              <button
                className="bg-gray-200 px-4 py-2 rounded-lg text-gray-700"
                onClick={() => {
                  setIsModalOpen(false);
                  setSelectedUser(null);
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
