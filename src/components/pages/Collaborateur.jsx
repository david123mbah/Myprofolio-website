import React, { useState } from "react";

const Collaborator = () => {
  const [profile, setProfile] = useState({
    fullName: "Alexa Rawles",
    nickName: "",
    gender: "Female",
    country: "",
    language: "",
    timeZone: "",
    email: "alexarawles@gmail.com",
    phone: "+23476585975959",
    department: "Marketing Department",
    managers: [
      { name: "Christian LACROIX", role: "PDG" },
      { name: "Camille BULE", role: "DRH" },
    ],
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  const toggleEdit = () => {
    setIsEditing((prev) => !prev);
  };

  return (
    <div className="min-h-screen flex">
      <div className="flex-1 p-8">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          {/* Profile Header */}
          <div className="bg-gray-50 p-6 flex items-center justify-between">
            <div className="flex items-center">
              <img
                src="public\bbjbbj.jpg"
                alt="User"
                className="w-20 h-20 rounded-full shadow-lg"
              />
              <div className="ml-4">
                {isEditing ? (
                  <input
                    type="text"
                    name="fullName"
                    value={profile.fullName}
                    onChange={handleChange}
                    className="text-xl font-bold bg-transparent border-b border-gray-300 focus:outline-none"
                  />
                ) : (
                  <h2 className="text-xl font-bold">{profile.fullName}</h2>
                )}
                {isEditing ? (
                  <input
                    type="text"
                    name="department"
                    value={profile.department}
                    onChange={handleChange}
                    className="text-gray-500 bg-transparent border-b border-gray-300 focus:outline-none"
                  />
                ) : (
                  <p className="text-gray-500">{profile.department}</p>
                )}
                {isEditing ? (
                  <input
                    type="text"
                    name="phone"
                    value={profile.phone}
                    onChange={handleChange}
                    className="text-gray-500 bg-transparent border-b border-gray-300 focus:outline-none"
                  />
                ) : (
                  <p className="text-gray-500">{profile.phone}</p>
                )}
              </div>
            </div>
            <button
              onClick={toggleEdit}
              className={`px-4 py-2 rounded-lg ${
                isEditing ? "bg-green-600 text-white" : "bg-blue-600 text-white"
              }`}
            >
              {isEditing ? "Save" : "Edit"}
            </button>
          </div>

          {/* HR Information */}
          <div className="p-6">
            <h3 className="text-lg font-semibold mb-4 text-gray-600">
              Mes infos RH (pas modifiable par le salarié):
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-gray-500">Nick Name</label>
                {isEditing ? (
                  <input
                    type="text"
                    name="nickName"
                    value={profile.nickName}
                    onChange={handleChange}
                    placeholder="Your First Name"
                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-blue-400 focus:border-blue-500"
                  />
                ) : (
                  <p>{profile.nickName || "Not Provided"}</p>
                )}
              </div>
              <div>
                <label className="text-sm text-gray-500">Country</label>
                {isEditing ? (
                  <input
                    type="text"
                    name="country"
                    value={profile.country}
                    onChange={handleChange}
                    placeholder="Country"
                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-blue-400 focus:border-blue-500"
                  />
                ) : (
                  <p>{profile.country || "Not Provided"}</p>
                )}
              </div>
              <div>
                <label className="text-sm text-gray-500">Language</label>
                {isEditing ? (
                  <input
                    type="text"
                    name="language"
                    value={profile.language}
                    onChange={handleChange}
                    placeholder="Language"
                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-blue-400 focus:border-blue-500"
                  />
                ) : (
                  <p>{profile.language || "Not Provided"}</p>
                )}
              </div>
              <div>
                <label className="text-sm text-gray-500">Time Zone</label>
                {isEditing ? (
                  <input
                    type="text"
                    name="timeZone"
                    value={profile.timeZone}
                    onChange={handleChange}
                    placeholder="Time Zone"
                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-blue-400 focus:border-blue-500"
                  />
                ) : (
                  <p>{profile.timeZone || "Not Provided"}</p>
                )}
              </div>
            </div>
          </div>

          {/* Email Section */}
          <div className="bg-gray-50 p-6">
            <h3 className="text-lg font-semibold mb-4 text-gray-600">
              My Email Address
            </h3>
            <div className="flex items-center">
              {isEditing ? (
                <input
                  type="email"
                  name="email"
                  value={profile.email}
                  onChange={handleChange}
                  className="flex-1 p-2 border border-gray-300 rounded-lg focus:ring-blue-400 focus:border-blue-500"
                />
              ) : (
                <p>{profile.email}</p>
              )}
            </div>
          </div>

          {/* Hierarchy Section (Non-Editable) */}
          <div className="p-6">
            <h3 className="text-lg font-semibold mb-4 text-gray-600">
              Mon lien hiérarchique:
            </h3>
            <div className="space-y-4">
              {profile.managers.map((manager, index) => (
                <div
                  key={index}
                  className="flex items-center bg-gray-50 p-4 rounded-lg shadow"
                >
                  <img
                    src="https://via.placeholder.com/50"
                    alt={manager.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <p className="text-gray-800 font-semibold">{manager.name}</p>
                    <p className="text-gray-500">{manager.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collaborator;

