import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "../components/Loading";

export default function Home({ handlePageName, handleLoading, loading }) {
  const navigate = useNavigate();

  useEffect(() => {
    handlePageName("Homepage");
    setTimeout(() => {
      handleLoading(false);
    }, 4500);
  }, []);

  return <>{loading ? <Loading /> : navigate("/about")}</>;
}
