import { RouterProvider } from "react-router-dom";
import appRouter from "../utils/appRouter";
import appStore from "../utils/appStore";
import { Provider } from "react-redux";

const Body = () => {
  return (
    <Provider store={appStore}>
      <RouterProvider router={appRouter} />
    </Provider>
  );
};

export default Body;
