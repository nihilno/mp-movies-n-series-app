import { Outlet, useLoaderData, useNavigation } from "react-router-dom";
import { MovieProvider } from "../../contexts/MovieContext.jsx";
import { getMovieData } from "../services/getData";
import Header from "./Header";
import Loader from "./Loader.jsx";

function Layout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  const data = useLoaderData();

  return (
    <>
      {isLoading && <Loader />}
      <div className="overflow-x-hidden lg:grid lg:grid-cols-[80px_1fr]">
        <div className="sm:px-5 sm:pt-5">
          <Header />
        </div>

        <MovieProvider initialData={data}>
          <main className="min-w-0 px-5 pb-5 xl:pl-7">
            <Outlet />
          </main>
        </MovieProvider>
      </div>
    </>
  );
}

//eslint-disable-next-line
export async function loader() {
  const movieData = await getMovieData();
  return movieData;
}

export default Layout;
