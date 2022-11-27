import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ConfigProvider, theme } from "antd";

import "./App.css";
import { Contact } from "./pages/contact";
import Home from "./pages/home";
import { PrivateRoute } from "./components/auth";
import Login from "./pages/login";
import AddUser from "./pages/employeePortal/user/addUser";
import UsersList from "./pages/employeePortal/user/usersList";
import { EditUser } from "./pages/employeePortal/user/editUser";
import EmployeePageLayout from "./components/layout/employeePageLayout";
import GeneralPageLayout from "./components/layout/pageLayout";

function App() {
  return (
    <ConfigProvider
      theme={{
        algorithm: theme.compactAlgorithm,
        components: {
          Card: {
            // colorPrimary: "#00b96b",
            background: "rgba(255, 255, 255, 0.32)",
            borderRadius: "16px",
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
            backdropFilter: "blur(15.5px)",
            webkitBackdropFilter: "blur(15.5px)",
            border: "1px solid rgba(255, 255, 255, 0.3)",
          },
        },
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route
              exact
              path="/employee-portal"
              element={<EmployeePageLayout />}
            >
              <Route exact path="/employee-portal" element={<Home />} />
              <Route path="/employee-portal/users">
                <Route path="/employee-portal/users" element={<UsersList />} />
                <Route
                  path="/employee-portal/users/:id"
                  element={<EditUser />}
                />
                <Route
                  path="/employee-portal/users/add-user"
                  element={<AddUser />}
                />
              </Route>
            </Route>
            <Route exact path="/" element={<GeneralPageLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="contact" element={<Contact />} />
            </Route>
            <Route exact path="login" element={<Login />} />
            {/* <Route path="blogs" element={<Blogs />} /> */}

            {/* <Route path="*" element={<NoPage />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </ConfigProvider>
  );
}

export default App;
