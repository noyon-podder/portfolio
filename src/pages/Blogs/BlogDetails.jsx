import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { formatDate } from "../../utils/formatDate";
import { FaCircle } from "react-icons/fa";
import { BiLoaderCircle } from "react-icons/bi";
import Loading from "../../components/Loading";

const BlogDetails = () => {
  const { blogId } = useParams();

  const { data, isLoading } = useQuery({
    queryKey: ["PROJECT"],
    queryFn: async () => {
      return fetch(`http://localhost:5000/api/blog/${blogId}`).then((res) =>
        res.json()
      );
    },
  });

  if (isLoading) {
    return <Loading />;
  }

  const blogData = data?.data;

  console.log(blogData);

  return (
    <section>
      {/* {isLoading && <BiLoaderCircle className="animate-spin text-[26px]" />} */}
      <header>
        <h2 className="h2 article-title">Blog Details</h2>
      </header>

      <div className="">
        <div className="w-full lg:h-[400px] h-[300px]">
          <img
            src={blogData?.imageLink}
            alt=""
            className="w-full h-full object-cover object-center"
            loading="lazy"
          />
        </div>

        <div className="py-5">
          <span className="text-end text-white text-sm">
            {formatDate(blogData?.createdAt)}
          </span>
          <h2 className="text-[28px] font-semibold text-white mb-7 capitalize">
            {blogData?.title}
          </h2>
          <div
            dangerouslySetInnerHTML={{ __html: blogData?.content }}
            className="text-gray-300 text-[16px] list-disc"
          ></div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetails;
