import React from "react";
import { useLocation } from "react-router-dom";

const ShowcaseService = () => {
  const location = useLocation();
  console.log(location.state);
  return (
    <div>
      <div className="max-w-7xl mx-auto px-3">
        <h1 className="font-bold text-xl md:text-4xl px-5 my-5">
          {location?.state?.title
            ? location.state.title
            : "Expert iOS App development"}
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, soluta.
          Nam dolores vel modi doloribus saepe sequi quam quas repellat, eveniet
          asperiores ipsum iusto natus ipsa expedita nemo eum tenetur dolor?
          Tempore ratione iure numquam aut, velit dolorum odit porro veniam ab
          quam dolorem ad obcaecati officia ipsum accusamus sapiente eligendi ea
          error magni officiis tenetur doloremque reprehenderit pariatur
          consequuntur. Provident, consequatur! Quis sapiente eaque unde a
          voluptates earum ab. Molestias doloremque laboriosam cumque delectus
          blanditiis pariatur eos nihil odit atque inventore id, sint error
          doloribus rem explicabo fuga? Numquam eius beatae dignissimos repellat
          sint explicabo, fuga omnis pariatur dolores?
        </p>
      </div>
    </div>
  );
};

export default ShowcaseService;
