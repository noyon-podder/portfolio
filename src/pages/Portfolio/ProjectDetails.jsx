import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { baseApi } from "../../config/config";

const ProjectDetails = () => {
  const { portfolioId } = useParams();

  const { data } = useQuery({
    queryKey: ["PROJECT"],
    queryFn: async () => {
      return fetch(`${baseApi}/api/project/${portfolioId}`).then((res) =>
        res.json()
      );
    },
  });

  const projectData = data?.data;

  console.log(projectData);

  return (
    <section>
      <header>
        <h2 className="h2 article-title">Project Details</h2>
      </header>

      <div className="">
        <div className="w-full lg:h-[400px] h-[300px]">
          <img
            src={projectData?.imageLink}
            alt=""
            className="w-full h-full object-cover object-center"
            loading="lazy"
          />
        </div>

        <div className="py-5">
          <h2 className="text-[28px] font-semibold text-white mb-10">
            {projectData?.title}
          </h2>
          <div
            dangerouslySetInnerHTML={{ __html: projectData?.description }}
            className="text-white text-[20px] list-disc"
          ></div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;
