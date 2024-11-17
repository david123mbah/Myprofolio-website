import React, { useState } from 'react';
import {
  Home,
  Users,
  BarChart2,
  FileText,
  Settings,
  LogOut,
  ChevronDown,
  Layout,
  BookOpen,
  Calendar,
  HelpCircle,
  Clock,
  Briefcase
} from 'lucide-react';

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [expandedSection, setExpandedSection] = useState('dashboard');

  const menuItems = [
    {
      id: 'dashboard',
      icon: Home,
      label: 'Dashboard',
      isActive: true,
    },
    {
      id: 'collaborator',
      icon: Users,
      label: 'Collaborateur',
      subItems: [
        { label: 'Dashboard', link: '#' },
        { label: 'Informations Personnelles', link: '#' },
        { label: 'Coordonnées Bancaires', link: '#' },
        { label: 'Personnel & Charge et Ayant Droit', link: '#' }
      ]
    },
    {
      id: 'performance',
      icon: BarChart2,
      label: 'Performance',
      subItems: [
        { label: 'Overview', link: '#' },
        { label: 'Statistics', link: '#' }
      ]
    },
    {
      id: 'training',
      icon: BookOpen,
      label: 'Training and Development',
      subItems: []
    },
    {
      id: 'reports',
      icon: FileText,
      label: 'Reports and Analytics',
      subItems: []
    }
  ];

  const handleSectionClick = (sectionId) => {
    if (isCollapsed) {
      setIsCollapsed(false);
    }
    setExpandedSection(expandedSection === sectionId ? null : sectionId);
  };

  return (
    <div className="flex h-screen">
      <div
        className={`${
          isCollapsed ? 'w-16' : 'w-64'
        } bg-[#202124] flex flex-col transition-all duration-300 relative group border-r border-gray-800`}
      >
        {/* Logo Section */}
        <div className="p-6 border-b border-gray-800">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-[#F15A2B] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">G</span>
            </div>
            {!isCollapsed && (
              <span className="text-white font-semibold">GFS Manager</span>
            )}
          </div>
        </div>

        {/* Main Menu */}
        <div className="flex-1 py-6 overflow-y-auto">
          <nav className="space-y-4">
            {menuItems.map((item) => (
              <div key={item.id} className="px-4">
                <div
                  onClick={() => handleSectionClick(item.id)}
                  className={`flex items-center justify-between px-3 py-2.5 rounded-lg cursor-pointer transition-all
                    ${item.isActive || expandedSection === item.id 
                      ? 'bg-[#F15A2B] text-white' 
                      : 'text-gray-400 hover:bg-gray-800'}`}
                >
                  <div className="flex items-center min-w-0">
                    <item.icon className="w-5 h-5 flex-shrink-0" />
                    {(!isCollapsed || expandedSection === item.id) && (
                      <span className="ml-3 text-sm font-medium truncate">{item.label}</span>
                    )}
                  </div>
                  {!isCollapsed && item.subItems?.length > 0 && (
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        expandedSection === item.id ? 'rotate-180' : ''
                      }`}
                    />
                  )}
                </div>
                
                {/* Submenu */}
                {!isCollapsed && expandedSection === item.id && item.subItems?.length > 0 && (
                  <div className="mt-2 ml-8 space-y-2">
                    {item.subItems.map((subItem, subIndex) => (
                      <div
                        key={subIndex}
                        className="flex items-center px-3 py-2 text-sm text-gray-400 rounded-lg cursor-pointer hover:bg-gray-800 transition-colors"
                      >
                        <span className="truncate">{subItem.label}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>

        {/* Bottom Section */}
        <div className="p-4 border-t border-gray-800">
          <div className="space-y-2">
            <div className="flex items-center px-3 py-2.5 text-gray-400 rounded-lg cursor-pointer hover:bg-gray-800 transition-colors">
              <HelpCircle className="w-5 h-5" />
              {!isCollapsed && <span className="ml-3 text-sm font-medium">Help</span>}
            </div>
            <div className="flex items-center px-3 py-2.5 text-gray-400 rounded-lg cursor-pointer hover:bg-gray-800 transition-colors">
              <Settings className="w-5 h-5" />
              {!isCollapsed && <span className="ml-3 text-sm font-medium">Settings</span>}
            </div>
            <div className="flex items-center px-3 py-2.5 text-gray-400 rounded-lg cursor-pointer hover:bg-gray-800 transition-colors">
              <LogOut className="w-5 h-5" />
              {!isCollapsed && <span className="ml-3 text-sm font-medium">Log Out</span>}
            </div>
          </div>
        </div>

        {/* Collapse Toggle */}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="hidden md:flex absolute -right-3 top-12 w-6 h-6 bg-gray-700 rounded-full items-center justify-center text-gray-400 hover:text-white hover:bg-gray-600"
        >
          <ChevronDown className={`w-4 h-4 transform ${isCollapsed ? 'rotate-90' : '-rotate-90'}`} />
        </button>
      </div>
    </div>
  );
};

export default Sidebar;