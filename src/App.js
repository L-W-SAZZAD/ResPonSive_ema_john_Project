import { RouterProvider } from "react-router-dom";
import { router } from "./Router/Router";
import "./App.css";

function App() {
  return (
    <div className="all_wrapper bg-[#E5E5E5]">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
