import React from 'react';
import manish from '../components/manish.jpg';

function RightSidebar() {
  return (
    <div className="w-1/4 p-4">
      <div className="bg-white shadow rounded p-4 mb-4">
        <h3 className="font-semibold mb-2">People you may know</h3>
        <div className="flex items-center justify-between">
        <img src={manish} alt="Profile" className="rounded-full w-10 h-10" />
          <p className="text-sm">Code With Manish</p>
          <button className="bg-purple-600 text-white px-4 py-2 mt-2 rounded">Follow</button>
          
        </div>
        <div className="flex items-center justify-between">
        <img src={manish} alt="Profile" className="rounded-full w-10 h-10" />
          <p className="text-sm">Code With Sourabh</p>
          <button className="bg-purple-600 text-white px-4 py-2 mt-2 rounded">Follow</button>
          
        </div>
        <div className="flex items-center justify-between">
        <img src={manish} alt="Profile" className="rounded-full w-10 h-10" />
          <p className="text-sm">Code With Sanyam</p>
          <button className="bg-purple-600 text-white px-4 py-2 mt-2 rounded">Follow</button>
        </div>
        <div className="flex items-center justify-between">
        <img src={manish} alt="Profile" className="rounded-full w-10 h-10" />
          <p className="text-sm">Code With Sahil</p>
          <button className="bg-purple-600 text-white px-4 py-2 mt-2 rounded">Follow</button>
          
        </div>
        <div className="flex items-center justify-between">
        <img src={manish} alt="Profile" className="rounded-full w-10 h-10" />
          <p className="text-sm">Code With Monti</p>
          <button className="bg-purple-600 text-white px-4 py-2 mt-2 rounded">Follow</button>
          
        </div>
        {/* Repeat the above block for more suggestions */}
      </div>
      <div className="bg-white shadow rounded p-4">
        <h3 className="font-semibold mb-2">Trends</h3>
        <ul>
          <li className="mb-2"><a href="#" className="text-purple-600 text-sm">#Expressjs</a></li>
          <li className="mb-2"><a href="#" className="text-purple-600 text-sm">#Nextjs</a></li>
          <li className="mb-2"><a href="#" className="text-purple-600 text-sm">#Reactjs</a></li>
          <li className="mb-2"><a href="#" className="text-purple-600 text-sm">#Genrative AI</a></li>
          <li className="mb-2"><a href="#" className="text-purple-600 text-sm">#Postman</a></li>
          {/* Repeat for more trends */}
        </ul>
      </div>
    </div>
  );
}

export default RightSidebar;
