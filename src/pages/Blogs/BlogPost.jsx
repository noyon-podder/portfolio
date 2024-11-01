import { Link } from "react-router-dom";
import { formatDate } from "../../utils/formatDate";

const BlogPost = ({ blog }) => {
  const { title, imageLink, category, createdAt, _id } = blog;
  return (
    <li className="blog-post-item">
      <Link to={`/blogs/${_id}`}>
        <figure className="blog-banner-box">
          <img src={imageLink} alt={title} loading="lazy" />
        </figure>
        <div className="blog-content">
          <div className="blog-meta">
            <p className="blog-category">{category}</p>
            <span className="dot"></span>
            {/* <time dateTime={date}>{date}</time> */}
            <p className="text-white ml-2 font-semibold text-base">
              {formatDate(createdAt)}
            </p>
          </div>
          <h3 className="h3 blog-item-title">{title}</h3>
          <div className="bg-red-500">
            {/* <div
              className="text-white w-full"
              dangerouslySetInnerHTML={{ __html: content }}
            ></div> */}
          </div>
        </div>
      </Link>
    </li>
  );
};

export default BlogPost;
