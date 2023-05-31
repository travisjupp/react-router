import React from "react";
import { useSelector } from "react-redux";
import { selectArticles, filterArticles } from "../features/articles/articlesSlice";
import Search from "./Search";
import { Link, NavLink, useSearchParams } from 'react-router-dom';

// Import Link and useSearchParams from React Router
// The useSearchParams hook is used to read and modify the query string in the URL for the current location.

export default function Articles() {
  const articles = useSelector(selectArticles);

  // Grab URLSearchParams object from useSearchParams hook
  const [ searchParams ] = useSearchParams();

  // Get the queryParams from object returned from useSearchParams and set to `title`
  const title = searchParams.get('title');

  const filteredArticles = title ? filterArticles(title, articles) : Object.values(articles)

  return (
    <main>
      <h1>Articles</h1>
      <ul>
        {filteredArticles.map(article => (
          <li key={article.slug}>
            {/* Replace these a tags! */}
            <Link to={`${article.slug}`}>
              {article.title}
            </Link>
          </li>
        ))}
      </ul>
      <Search />
    </main>
  )
}
