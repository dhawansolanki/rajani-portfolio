import React from 'react';

const ArticleDetail = ({ article }) => {
  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden my-8">
      <img
        src={article.image}
        alt={article.title}
        className="w-full h-96 object-cover object-center"
      />
      <div className="p-8">
        <p className="block text-gray-500 uppercase tracking-wide text-sm font-bold mb-2">
          {article.category}
        </p>
        <h1 className="font-bold text-4xl mb-4">
          {article.title}
        </h1>
        <p className="text-gray-600 text-lg mb-4">
          {article.description}
        </p>
        <div className="prose prose-lg mx-auto">
          <p>{article.content}</p>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetail;