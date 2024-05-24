import React from 'react';
import manish from '../components/manish.jpg';
import like from '../components/heart.png';
import comment from '../components/chat-bubble.png';

function MainContent() {
  return (
    <div className="w-2/4 p-4">
      <div className="bg-white shadow rounded p-4 mb-4">
        <textarea className="w-full border rounded p-2" placeholder="What are you thinking about?"></textarea>
        <button className="bg-gray-600 text-white px-4 py-2 mt-2 rounded">Upload Image</button>
        <div className="flex justify-end">
          <button className="bg-purple-600 text-white px-4 py-2 mt-2 rounded -mt-10">Post</button>
        </div>
      </div>

      <div className="bg-white shadow rounded p-4 mb-4">
        <div className="flex items-center">
          <img src={manish} alt="Profile" className="rounded-full w-10 h-10" />
          <div className="ml-2">
            <h3 className="text-sm font-semibold">Code With Manish</h3>
            <p className="text-xs text-gray-600">10 minutes ago</p>
          </div>
        </div>
        <img src="https://plus.unsplash.com/premium_photo-1715428084281-c13dc4337f23?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDF8Q0R3dXdYSkFiRXd8fGVufDB8fHx8fA%3D%3D" alt="Post" className="w-full mt-2 rounded" />
        <p className="mt-2 text-sm">This is a sample post description.</p>
        <div className="flex items-center">
          <img src={like} alt="Like" className="rounded-full w-7 h-7" /><p>400 Like</p>
          <div className="mx-4"></div> {/* Spacing element */}
          <img src={comment} alt="Comment" className="rounded-full w-7 h-7" /><p>200000 comment</p>
        </div>
      </div>

      <div className="bg-white shadow rounded p-4 mb-4">
        <div className="flex items-center">
          <img src={manish} alt="Profile" className="rounded-full w-10 h-10" />
          <div className="ml-2">
            <h3 className="text-sm font-semibold">Code With Manish</h3>
            <p className="text-xs text-gray-600">10 minutes ago</p>
          </div>
        </div>
        {/* <img src="https://plus.unsplash.com/premium_photo-1715428084281-c13dc4337f23?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDF8Q0R3dXdYSkFiRXd8fGVufDB8fHx8fA%3D%3D" alt="Post" className="w-full mt-2 rounded" /> */}
        <p className="mt-2 text-sm">Hello i am manish kumar. I am passionate full stack developer. </p>
        <div className="flex items-center">
          <img src={like} alt="Like" className="rounded-full w-7 h-7" /><p>400 Like</p>
          <div className="mx-4"></div> {/* Spacing element */}
          <img src={comment} alt="Comment" className="rounded-full w-7 h-7" /><p>200000 comment</p>
        </div>
      </div>
    </div>
  );
}

export default MainContent;
