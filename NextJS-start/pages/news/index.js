import { Fragment } from "react";
import Link from "next/link";

const NewsPage = () => {
  return (
    <Fragment>
      <h1>Welcome to the news Page!!</h1>
      <ul>
        <li>
          <Link href="/news/about">About</Link>
        </li>
      </ul>
    </Fragment>
  );
};

export default NewsPage;
