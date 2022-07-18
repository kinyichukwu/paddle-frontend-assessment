import React from "react";
import "./RepoBox.css";
function RepoBox({ name, desc, img, stars, issues, day, author }) {
  let starTh = Math.floor(stars/ 1000)
  let cutDate = day.slice(0, 10)
  return (
    <>
      <div class="ripo my-5 mx-md-5 px-md-5">
        <div class="repo-pic me-md-5">
          <img src={img} alt="" />
        </div>
        <div class="repo-content">
          <h2>{name}</h2>
          <p>{desc}</p>
          <div class="repo-content-span">
            <span className="x">Stars: {starTh}k</span>
            <span className="x">Issues: {issues}</span>
            <span>
              Submitted at <b>{cutDate}</b> by <b>{author}</b>.
            </span>
          </div>
        </div>
      </div>
      {/**<RepoBox
          name={item.name}
          desc={item.description}
          img={item.owner.avatar_url}
          stars={item.stargazers_count}
          issues={item.open_issues}
          day={item.created_at}
          author={item.owner.login}
/>**/}
    </>
  );
}

export default RepoBox;
