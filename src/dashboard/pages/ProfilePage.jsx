import React, { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import useGetRole from "../../hooks/useGetRole";

const ProfilePage = () => {
  const { user } = useContext(AuthContext);
  const role = useGetRole();

  return (
    <div className="min-h-[73.49vh] text-white flex justify-center items-center">
      <div className="bg-stone-900 rounded-2xl p-8 min-w-[400px]">
        {/* Name */}
        <div className="flex justify-between">
          <p className="capitalize font-medium">Name:</p>
          <p className="capitalize">{user?.displayName}</p>
        </div>
        <hr className="my-2 border-stone-600" />

        {/* Email */}
        <div className="flex justify-between">
          <p className="font-medium">Email:</p>
          <p>{user?.email}</p>
        </div>
        <hr className="my-2 border-stone-600" />

        {/* Role */}
        <div className="flex justify-between">
          <p className="capitalize font-medium">Role:</p>
          <p className="capitalize">{role}</p>
        </div>
        <hr className="my-2 border-stone-600" />

        {/* Last Login */}
        <div className="flex justify-between">
          <p className="font-medium">Last Login:</p>
          <p>{user?.metadata?.lastSignInTime}</p>
        </div>
        <hr className="my-2 border-stone-600" />

        {/* Verified */}
        <div className="flex justify-between">
          <p className="font-medium">Verified:</p>
          <p>{user?.emailVerified ? "✅" : "❌"}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
