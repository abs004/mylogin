import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Newsitem = ({ title, description, src, url }) => {
  const navigate = useNavigate();
  const [imgError, setImgError] = useState(false);
  
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden m-4">
      <img 
        src={!imgError ? src : 'https://placehold.co/360x200/png?text=News'}
        className="w-full h-48 object-cover"
        alt={title}
        onError={() => setImgError(true)}
      />
      <div className="p-4">
        <h5 className="text-xl font-semibold mb-2 text-gray-800">
          {title ? title.slice(0, 50) + (title.length > 50 ? '...' : '') : 'No title available'}
        </h5>
        <p className="text-gray-600 mb-4">
          {description 
            ? description.slice(0, 90) + (description.length > 90 ? '...' : '')
            : "News current event. It is information about something that has just happened."}
        </p>
        <a 
          href={url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
        >
          Read More
        </a>
        <button 
           onClick={() => navigate(`/dashboard/chat/${encodeURIComponent(title)}`)}
           className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors ml-2"
        > 
          Discuss
        </button>
        <a 
          /*code to be inserted for laws fetch*/
          className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
        >
          laws/articles
        </a>
      </div>
    </div>
  );
};

export default Newsitem;