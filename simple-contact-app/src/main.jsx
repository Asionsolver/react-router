import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Contact from "./Contact";
import EditContact from "./EditContact";
import ErrorPage from "./Error";
import Index from "./Index";
import Root from "./Root";
import {
  createContactAction,
  deleteContactAction,
  editContactAction,
  updateContactFavoriteAction,
} from "./action/contactsActions";
import "./index.css";
import { getContactLoader, getContactsLoader } from "./loaders/contactsLoaders";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: getContactsLoader,
    action: createContactAction,
   children:[
    {
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <Index/>
  
        },
        {
          path: "/contacts/:contactId",
          element: <Contact />,
          loader: getContactLoader,
          action: updateContactFavoriteAction,
        },
        {
          path: "/contacts/:contactId/edit",
          element: <EditContact />,
          loader: getContactLoader,
          action: editContactAction,
        },
        {
          path: "/contacts/:contactId/destroy",
          
          action: deleteContactAction,
          errorElement:  <div>Oops! There was an error.</div>,
        },
      ],
    }
   ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
