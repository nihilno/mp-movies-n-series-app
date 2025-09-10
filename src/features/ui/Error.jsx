import { useNavigate, useRouteError } from "react-router-dom";

function Error() {
  const navigate = useNavigate();
  const error = useRouteError();

  return (
    <div className="flex h-screen flex-col items-center justify-center space-y-5 text-center md:space-y-8 md:text-2xl lg:text-3xl">
      <h1>Something went wrong</h1>
      <p>{error.data || error.message}</p>
      <button
        onClick={() => navigate(-1)}
        className="cursor-pointer rounded bg-[var(--clr-red)] px-4 py-2 text-white drop-shadow-[0_0_8px_var(--clr-red)] transition-all duration-300 ease-in-out hover:drop-shadow-[0_0_16px_var(--clr-red)] md:px-6 md:py-3 lg:px-8 lg:py-4"
      >
        &larr; Go back
      </button>
    </div>
  );
}

export default Error;
