import "./App.css";
import RepoBox from "./components/RepoBox";
import HomeScreen from "./screen/HomeScreen";
import { useEffect, useState } from "react";
import { getPostsPage } from "./components/axios";
import './buttonStyle.css'

function App() {
  const [page, setPage] = useState(1);
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    getPostsPage(page).then((json) => setPosts(json.items));
  }, [page]);
  console.log(posts);
  const nextPage = () => setPage((prev) => prev + 1);

  const prevPage = () => setPage((prev) => prev - 1);
  return (
    <>
      <HomeScreen />
      <nav className="d-flex">
        <button className="github" onClick={prevPage} disabled={page === 1}>
          Prev Page
        </button>
        <button className="github" onClick={nextPage} disabled={!posts.length}>
          Next Page
        </button>
      </nav>
      {posts.map((item) => (
        <RepoBox
        key={item.name}
          name={item.name}
          desc={item.description}
          img={item.owner.avatar_url}
          stars={item.stargazers_count}
          issues={item.open_issues}
          day={item.created_at}
          author={item.owner.login}
        />
      ))}
    </>
  );
}

export default App;
