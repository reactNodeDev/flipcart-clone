import { useRouteError } from "react-router";

const ErrorBoundary = () => {
  const error = useRouteError() as Error;

  const historyChange = () => {
    window.location.reload()
  }

  return (
    <div className="h-[100vh] w-[100vw] flex flex-col justify-center items-center space-y-3">
      {/* 'woaaaah !! route error. this is a  ErrorBoundary' */}
      <p className="text-md lg:text-2xl">{error?.message}</p>
      <button
        onClick={historyChange}
        className="bg-red-700 text-white p-3 rounded-md"
      >
        Retry
      </button>
    </div>
  );
};

export default ErrorBoundary;
