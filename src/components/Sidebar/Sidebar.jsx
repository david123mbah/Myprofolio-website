import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Home,
  Users,
  BarChart2,
  BookOpen,
  FileText,
  LogOut,
  Settings,
  ChevronUp,
  ChevronDown,
} from "lucide-react";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [expandedSection, setExpandedSection] = useState("dashboard");

  const menuItems = [
    {
      id: "dashboard",
      icon: Home,
      label: "Dashboard",
      isActive: true,
      link: "/",
    },
    {
      id: "collaborator",
      icon: Users,
      label: "Collaborateur",
      subItems: [
        { label: "Mes Infos RH", link: "/collaborator" },
        { label: "Mes infos pro ", link: "/InformationEntreprise" },
        { label: "Compétences & formations", link: "#" },
        { label: "Rémunération & Banque", link: "#" },
      ],
    },
    {
      id: "performance",
      icon: BarChart2,
      label: "Performance",
      link: "/perform",
    },
    {
      id: "training",
      icon: BookOpen,
      label: "Training and Development",
      link: "/training",
    },
    {
      id: "reports",
      icon: FileText,
      label: "Reports and Analytics",
      link: "/reports",
    },
  ];

  const handleSectionClick = (sectionId) => {
    if (isCollapsed) {
      setIsCollapsed(false);
    }
    setExpandedSection(expandedSection === sectionId ? null : sectionId);
  };

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="flex h-screen">
      <div
        className={`${
          isCollapsed ? "w-16" : "w-64"
        } bg-[#222d55] flex flex-col transition-all duration-300 relative`}
      >
        {/* Logo Section */}
        <div className="flex items-center justify-between p-4 bg-[#222d55]">
          {!isCollapsed && (
            <img
              src="public/Plan de travail 3@4x-100.jpeg"
              alt="Logo"
              className="h-16"
            />
          )}
          <button
            onClick={toggleSidebar}
            className="text-white hover:bg-gray-700 p-2 rounded-full focus:outline-none"
          >
            {isCollapsed ? <ChevronDown /> : <ChevronUp />}
          </button>
        </div>

        {/* Main Menu */}
        <div className="flex-1 py-2 overflow-y-auto">
          <nav className="space-y-1">
            {menuItems.map((item) => (
              <div key={item.id} className="px-3">
                <div
                  onClick={() => handleSectionClick(item.id)}
                  className={`flex items-center justify-between px-2 py-2 rounded-lg cursor-pointer transition-colors ${
                    item.isActive
                      ? "bg-[#F15A2B] text-white"
                      : "text-gray-400 hover:bg-gray-800"
                  }`}
                >
                  <div className="flex items-center">
                    <item.icon className="w-5 h-5" />
                    {!isCollapsed && (
                      <span className="ml-3 text-sm truncate">
                        {item.label}
                      </span>
                    )}
                  </div>
                  {!isCollapsed && item.subItems && (
                    <ChevronDown
                      className={`w-4 h-4 ${
                        expandedSection === item.id
                          ? "transform rotate-180"
                          : ""
                      }`}
                    />
                  )}
                </div>

                {/* Submenu */}
                {!isCollapsed &&
                  expandedSection === item.id &&
                  item.subItems?.length > 0 && (
                    <div className="mt-1 ml-6 space-y-1">
                      {item.subItems.map((subItem, subIndex) => (
                        <Link to={subItem.link} key={subIndex}>
                          <div className="flex items-center px-2 py-1.5 text-sm text-gray-400 rounded-lg cursor-pointer hover:bg-gray-800">
                            <span className="truncate">{subItem.label}</span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}
              </div>
            ))}
          </nav>
        </div>

        {/* Footer */}
        <div className="py-4 mt-auto">
          <div className="px-3 space-y-1">
            <Link to="#">
              <div className="flex items-center px-2 py-2 text-sm text-gray-400 rounded-lg hover:bg-gray-800">
                <Settings className="w-5 h-5" />
                {!isCollapsed && <span className="ml-3">Settings</span>}
              </div>
            </Link>
            <Link to="#">
              <div className="flex items-center px-2 py-2 text-sm text-gray-400 rounded-lg hover:bg-gray-800">
                <LogOut className="w-5 h-5" />
                {!isCollapsed && <span className="ml-3">Log Out</span>}
              </div>
            </Link>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default Sidebar;
