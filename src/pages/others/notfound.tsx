import { Helmet } from "react-helmet-async";

import useNav from "@hooks/useNav";

export default function NotFoundPage() {
  const navigate = useNav();

  function goBackHome() {
    navigate("/");
  }

  return (
    <div className="content-wrapper flex aictr jcctr coll gap-16 fade-in">
      <Helmet>
        <title>Not found | Haivy</title>
      </Helmet>
      <div className="flex aictr jcctr gap-24">
        <div className="text-[12rem] font-bold">
          <div className="rotate-[-6deg] underline underline-offset-12">
            404
          </div>
        </div>

        <div>
          <h1 className="text-[4rem] font-bold mb-4">Oops...</h1>
          <div>The page you're looking for couldn't be found.</div>
        </div>
      </div>

      <button className="btn btn-primary btn-outline" onClick={goBackHome}>
        Return to menu
      </button>
    </div>
  );
}
