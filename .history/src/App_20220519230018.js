import DashboardLayout from "module/dashboard/DashboardLayout";
import PostManage from "module/post/PostManage";
import DashboardPage from "pages/DashboardPage";
import HomePage from "pages/HomePage";
import NotFoundPage from "pages/NotFoundPage";
import PostDetailsPage from "pages/PostDetailsPage";
import SignInPage from "pages/SignInPage";
import { Route, Router, Routes } from "react-router-dom";
import { AuthProvider } from "./contexts/auth-context";
import SignUpPage from "./pages/SignUpPage";

function App() {
  return (
    <div>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<HomePage></HomePage>}></Route>
          <Route path="/sign-up" element={<SignUpPage />}></Route>
          <Route path="/sign-in" element={<SignInPage />}></Route>
          <Route path="*" element={<NotFoundPage />}></Route>
          <Route path="/:slug" element={<PostDetailsPage />}></Route>
          <Route element={<DashboardLayout />}>
            <Route path="/dashboard" element={<DashboardPage />}></Route>
            <Route path="/manage/post" element={<PostManage />}></Route>
          </Route>
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
