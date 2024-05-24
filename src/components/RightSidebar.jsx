import React from 'react';
import manish from '../components/manish.jpg';
function Sidebar() {
  return (
    <div className="w-1/4 p-4">
      <div className="bg-white shadow rounded p-4">
      <div className="flex justify-center">
  <img src={manish} alt="Profile" className="w-32 h-32" style={{ borderRadius: '100%' }} />
</div>

        <h2 className="text-center mt-2 text-lg font-semibold">Code With Manish</h2>
        <div className="flex justify-center space-x-4 mt-1">
  <p className="text-sm text-gray-600">50 Followers</p>
  <p className="text-sm text-gray-600">2 Posts</p>
</div>


      </div>
    </div>
  );
}

export default Sidebar;
