import { useRouter } from "next/router";

const Details = () => {
  const router = useRouter();
  const newsId = router.query.newsId;
  console.log(newsId);
  return <h1>Welcome to the details Page!!</h1>;
};

export default Details;
