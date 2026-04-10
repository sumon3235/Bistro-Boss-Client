import { useQuery } from "@tanstack/react-query";
import { FaUsers, FaTrash } from "react-icons/fa";
import useAxiosSecure from "../hooks/useAxiosSecure";
import SectionTile from "../Components/Shared/SectionTitle";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();

  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  // handle delete User funtion
  const handleDeleteUser = (user) => {
    axiosSecure.delete(`/user/${user._id}`).then((res) => {
      if (res.data.deletedCount > 0) {
        refetch();
        toast.success("User Delete Succesfull");
      }
    });
  };

  // cumtom modern toast with delet funtionlity
  const handleDelete = (user) => {
    toast(
      (t) => (
        <div className="flex flex-col gap-3">
          <p className="text-sm font-medium ">Are you sure delete this?</p>
          <div className="flex gap-2">
            <button
              onClick={() => toast.dismiss(t.id)}
              className="flex-1 py-1.5 text-xs font-bold uppercase tracking-wider bg-green-500  hover:bg-green-600 rounded-lg transition-all"
            >
              Cancel
            </button>
            <button
              onClick={() => {
                handleDeleteUser(user);
                toast.dismiss(t.id);
              }}
              className="flex-1 py-1.5 text-xs font-bold uppercase tracking-wider text-white bg-red-500 hover:bg-red-600 rounded-lg transition-all"
            >
              Delete
            </button>
          </div>
        </div>
      ),
      {
        duration: 3000,
        position: "top-center",
      },
    );
  };

  //  Update User Data funtion
  const handleMakeAdmin = (user) => {
    axiosSecure
      .patch(`/users/${user._id}`)
      .then((res) => {
        console.log(res.data);
        if (res.data.modifiedCount > 0) {
          refetch();
          Swal.fire({
            title: `${user.name} Is Admin Succesfull`,
            icon: "success",
            draggable: true,
          });
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="w-full">
      <div className="w-full overflow-hidden">
        <SectionTile
          subHeading={"---How many---"}
          heading={"MANAGE ALL USERS"}
          width="w-11/12 md:w-4/12"
        />
      </div>

      <section className="max-w-5xl mx-auto px-1">
        {/* Total users */}
        <h3 className="text-lg font-bold text-base-content mb-4">
          Total Users: {users.length}
        </h3>

        {/* Scroll wrapper */}
        <div className="w-full overflow-x-auto rounded-2xl border border-base-300">
          <div className="min-w-2xl">
            {/* Header */}
            <div
              className="grid grid-cols-12 px-4 py-3 text-[10px] font-bold uppercase tracking-[2px] bg-[#BB8506]"
              style={{ color: "#1a1a1a" }}
            >
              <div className="col-span-1 text-center">#</div>
              <div className="col-span-3 text-center">Name</div>
              <div className="col-span-4 text-center">Email</div>
              <div className="col-span-2 text-center">Role</div>
              <div className="col-span-2 text-center">Action</div>
            </div>

            {/* Rows */}
            {users.map((user, index) => (
              <div
                key={user._id}
                className="grid grid-cols-12 items-center px-4 py-3 border-b border-base-200 hover:bg-base-200 transition-colors duration-200"
              >
                <div className="col-span-1 text-center text-sm text-base-content/50 font-semibold">
                  {index + 1}
                </div>
                <div className="col-span-3 text-center text-sm text-base-content font-medium">
                  {user.name}
                </div>
                <div className="col-span-4 text-center text-sm text-base-content/70">
                  {user.email}
                </div>
                <div className="col-span-2 flex justify-center">
                 {
                    user.role === 'admin' ? "Admin" : 
                     <button
                    onClick={() => handleMakeAdmin(user)}
                    className="w-8 h-8 bg-[#BB8506] hover:bg-[#a07205] text-white rounded-lg flex items-center justify-center transition-colors duration-200 active:scale-95"
                    title={user.role === "admin" ? "Admin" : "Make Admin"}
                  >
                    <FaUsers className="text-xs" />
                  </button>
                 }
                </div>
                <div className="col-span-2 flex justify-center">
                  <button
                    onClick={() => handleDelete(user)}
                    className="w-8 h-8 bg-red-500 hover:bg-red-600 text-white rounded-lg flex items-center justify-center transition-colors duration-200 active:scale-95"
                  >
                    <FaTrash className="text-xs" />
                  </button>
                </div>
              </div>
            ))}

            {/* Empty state */}
            {users.length === 0 && (
              <div className="text-center py-16 text-base-content/40">
                <p className="text-sm uppercase tracking-widest">
                  No users found
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AllUsers;
