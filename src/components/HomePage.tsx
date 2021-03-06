import * as React from "react";
import { Spinner } from "reactstrap";

const Episodes = React.lazy<any>(() => import("./Episodes"));

const HomePage = (props: any): JSX.Element => {
  return (
    <React.Suspense
      fallback={<Spinner style={{ width: "3rem", height: "3rem" }} />}
    >
      <section className="episode-layout">
        <Episodes {...props} />
      </section>
    </React.Suspense>
  );
};

export default HomePage;
