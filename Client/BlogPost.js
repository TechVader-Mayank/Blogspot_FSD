import { Link } from "react-router-dom";

const BlogPost = (props) => {
  const detailLink = "/" + props.blog._id;
  let date = new Date(props.blog.createdAt);

  return (
    <article className="columns is-multiline">
      <div className="column post-img">
        <img
          src={props.blog.profilePicAddress}
          alt="blog-post"
          style={{ borderRadius: "4.5rem" }}
          width="250rem"
          height="250rem"
        />
      </div>
      <div className="column is-12 featured-content ">
        <h3 className="heading post-category">
          {date.getDay()}/{date.getMonth()}/{date.getFullYear()} {date.getHours()}:{date.getMinutes()}:{date.getSeconds()}</h3>

        <h1 className="title post-title" style={{ color: "darkred" }}>
          {props.blog.title}
        </h1>

        <p className="post-excerpt" style={{ fontStyle: "italic" }}>
          {" "}
          by {props.blog.author}{" "}
        </p>
        <br />

        <Link to={detailLink}>
          <p className="button is-primary is-outlined mr-1">Read More </p>
        </Link>
        <p
          className="button is-secondary is-outlined mr-1 "
          onClick={() => props.openEditModal(props.id, props.blog)}
        >
          Edit
        </p>
        <p
          className="button is-danger is-outlined mr-1"
          onClick={() => props.openDeleteModal(props.id)}
        >
          {" "}
          Delete
        </p>
      </div>
    </article>
  );
};

export default BlogPost;
