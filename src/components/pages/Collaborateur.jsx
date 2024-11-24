import React, { useState } from "react";
import {
  ChevronLeft,
  Mail,
  MapPin,
  Edit2,
  MoreVertical,
  Clock,
  MessageSquare,
  X,
  UserPlus,
  ChevronRight,
} from "lucide-react";

const EditableField = ({ label, value, name, onSave, type = "text" }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [tempValue, setTempValue] = useState(value);

  const handleSave = () => {
    onSave(name, tempValue);
    setIsEditing(false);
  };

  return (
    <div className="relative group">
      <label className="text-sm text-gray-500">{label}</label>
      <div className="flex items-center justify-between mt-1">
        {isEditing ? (
          <div className="flex w-full items-center space-x-2">
            <input
              type={type}
              value={tempValue}
              onChange={(e) => setTempValue(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-orange-200 focus:border-orange-500"
              autoFocus
            />
            <button
              onClick={handleSave}
              className="text-green-500 hover:text-green-600"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
            <button
              onClick={() => setIsEditing(false)}
              className="text-red-500 hover:text-red-600"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        ) : (
          <>
            <p
              className={`${
                type === "email" || type === "tel" ? "text-blue-600" : ""
              }`}
            >
              {value || "Not set"}
            </p>
            <button
              onClick={() => setIsEditing(true)}
              className="opacity-0 group-hover:opacity-100 text-gray-400 hover:text-orange-500 transition-all duration-300"
            >
              <Edit2 className="w-4 h-4" />
            </button>
          </>
        )}
      </div>
    </div>
  );
};

const EmployeeProfile = () => {
  const [profile, setProfile] = useState({
    fullName: "Panji Dwi",
    status: "Active",
    lastClocked: "A few seconds ago",
    lastMessaged: "2 Days ago",
    employeeId: "#EMP007",
    gender: "Male",
    maritalStatus: "Single",
    religion: "Muslim",
    placeOfBirth: "Bandung",
    birthdate: "06 March 1997",
    bloodType: "B",
    age: "27",
    phone: "+62-921-019-112",
    email: "dwipanji@gmail.com",
    address: {
      residential: "4517 Washington Ave, Manchester, Kentucky 39495",
      citizen: "2715 Ash Dr, San Jose, South Dakota 83475",
    },
    employment: {
      dateStarted: "2020-Current (4 Years)",
      jobRole: "Project Manager",
      jobLevel: "Manager Level",
      status: "Fulltime",
    },
    superiors: [
      {
        id: 1,
        name: "Sarah Johnson",
        role: "Department Head",
        avatar: "/public/hhhggggg.png",
        lastFeedback: "Outstanding performance on the Q3 project",
      },
      {
        id: 2,
        name: "Michael Chen",
        role: "Senior Director",
        avatar: "/public/hhhggggg.png",
        lastFeedback: "Excellent team management skills",
      },
    ],
  });

  const handleFieldSave = (name, value) => {
    setProfile((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAddressFieldSave = (type, value) => {
    setProfile((prev) => ({
      ...prev,
      address: {
        ...prev.address,
        [type]: value,
      },
    }));
  };

  const handleEmploymentFieldSave = (field, value) => {
    setProfile((prev) => ({
      ...prev,
      employment: {
        ...prev.employment,
        [field]: value,
      },
    }));
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <div className="flex items-center space-x-3">
                <div className="relative group">
                  <img
                    src="public\Ellipse 2.png"
                    alt="Profile"
                    className="w-14 h-14 rounded-full ring-2 ring-gray-200"
                  />
                  <button className="absolute bottom-0 right-0 bg-orange-500 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Edit2 className="w-3 h-3" />
                  </button>
                </div>
                <div>
                  <div className="flex items-center space-x-2">
                    <h2 className="font-semibold">{profile.fullName}</h2>
                    <span className="px-2 py-0.5 text-sm bg-green-100 text-green-600 rounded">
                      {profile.status}
                    </span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500 space-x-4">
                    <span className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{profile.lastClocked}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <MessageSquare className="w-4 h-4" />
                      <span>{profile.lastMessaged}</span>
                    </span>
                    <span>{profile.employeeId}</span>
                  </div>
                </div>
              </div>
            </div>
            <button className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors duration-300">
              Mes info RH
            </button>
          </div>

          <nav className="mt-6">
            <ul className="flex space-x-8 border-b">
              <li className="border-b-2 border-orange-500 pb-3">
                <a href="#" className="text-orange-500">
                  Personal Information
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-3 gap-6">
          <div className="col-span-2 space-y-6">
            {/* Personal Information Card */}
            <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow duration-300">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-semibold">Personal Information</h3>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <EditableField
                  label="Full Name"
                  value={profile.fullName}
                  name="fullName"
                  onSave={handleFieldSave}
                />
                <EditableField
                  label="Gender"
                  value={profile.gender}
                  name="gender"
                  onSave={handleFieldSave}
                />
                <EditableField
                  label="Marital Status"
                  value={profile.maritalStatus}
                  name="maritalStatus"
                  onSave={handleFieldSave}
                />
                <EditableField
                  label="Religion"
                  value={profile.religion}
                  name="religion"
                  onSave={handleFieldSave}
                />
                <EditableField
                  label="Place of Birth"
                  value={profile.placeOfBirth}
                  name="placeOfBirth"
                  onSave={handleFieldSave}
                />
                <EditableField
                  label="Birth Date"
                  value={profile.birthdate}
                  name="birthdate"
                  onSave={handleFieldSave}
                />
                <EditableField
                  label="Blood Type"
                  value={profile.bloodType}
                  name="bloodType"
                  onSave={handleFieldSave}
                />
                <EditableField
                  label="Age"
                  value={profile.age}
                  name="age"
                  onSave={handleFieldSave}
                />
              </div>
            </div>

            {/* Address Information Card */}
            <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow duration-300">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-semibold">Address Information</h3>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="text-sm text-gray-500">
                    Residential Address
                  </label>
                  <div className="flex items-center justify-between mt-1">
                    <EditableField
                      label=""
                      value={profile.address.residential}
                      name="residential"
                      onSave={handleAddressFieldSave}
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm text-gray-500">
                    Citizen ID Address
                  </label>
                  <div className="flex items-center justify-between mt-1">
                    <EditableField
                      label=""
                      value={profile.address.citizen}
                      name="citizen"
                      onSave={handleAddressFieldSave}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {/* Contact Information Card */}
            <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow duration-300">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-semibold">Contact Information</h3>
              </div>

              <div className="space-y-4">
                <EditableField
                  label="Phone Number"
                  value={profile.phone}
                  name="phone"
                  type="tel"
                  onSave={handleFieldSave}
                />
                <EditableField
                  label="Email"
                  value={profile.email}
                  name="email"
                  type="email"
                  onSave={handleFieldSave}
                />
              </div>
            </div>

            {/* Employment Overview Card */}
            <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow duration-300">
              <h3 className="text-lg font-semibold mb-6">
                Employment Overview
              </h3>
              <div className="space-y-4">
                <EditableField
                  label="Date Started"
                  value={profile.employment.dateStarted}
                  name="dateStarted"
                  onSave={handleEmploymentFieldSave}
                />
                <EditableField
                  label="Job Role"
                  value={profile.employment.jobRole}
                  name="jobRole"
                  onSave={handleEmploymentFieldSave}
                />
                <EditableField
                  label="Job Level"
                  value={profile.employment.jobLevel}
                  name="jobLevel"
                  onSave={handleEmploymentFieldSave}
                />
                <EditableField
                  label="Employment Status"
                  value={profile.employment.status}
                  name="status"
                  onSave={handleEmploymentFieldSave}
                />
              </div>
            </div>

            {/* Superiors Card */}
            <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow duration-300">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-semibold">Reporting To</h3>
                <button className="text-orange-500 hover:text-orange-600">
                  <UserPlus className="w-5 h-5" />
                </button>
              </div>
              <div className="space-y-4">
                {profile.superiors.map((superior) => (
                  <div
                    key={superior.id}
                    className="flex items-start space-x-4 p-3 rounded-lg hover:bg-gray-50"
                  >
                    <img
                      src={superior.avatar}
                      alt={superior.name}
                      className="w-12 h-12 rounded-full ring-2 ring-gray-200"
                    />
                    <div className="flex-1">
                      <h4 className="font-medium">{superior.name}</h4>
                      <p className="text-sm text-gray-500">{superior.role}</p>
                      <p className="text-sm text-gray-600 mt-1">
                        {superior.lastFeedback}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default EmployeeProfile;
