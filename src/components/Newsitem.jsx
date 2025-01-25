import React from 'react';

export const Newsitem = ({ title, description, src, url }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden m-4">
      <img 
        src={src || 'https://via.placeholder.com/360x200'} 
        className="w-full h-48 object-cover"
        alt={title}
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
        <a 
          /*code to be inserted*/
          className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
        >
          Discuss
        </a>
        <a 
          /*code to be inserted*/
          className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
        >
          laws/articles
        </a>
      </div>
    </div>
  );
};

export default Newsitem;