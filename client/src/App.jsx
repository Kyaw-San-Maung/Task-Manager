import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";
import { Layout } from "./pages/Layout";
import Tasks from "./pages/Tasks";
import Team from "./pages/Teasm";
import Trash from "./pages/Trash";
import TaskDetails from "./pages/TaskDetails";
import Login from "./pages/Login";
import { Toaster } from "sonner";

function App() {
  return (
    <main className="w-full min-h-screen bg-[#f3f4f6]">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Navigate to="/dashboard" />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/completed/:status" element={<Tasks />} />
          <Route path="/in-progress/:status" element={<Tasks />} />
          <Route path="/todo/:status" element={<Tasks />} />
          <Route path="/team" element={<Team />} />
          <Route path="/trashed" element={<Trash />} />
          <Route path="/task/:id" element={<TaskDetails />} />
        </Route>
        <Route path="/log-in" element={<Login />} />
      </Routes>

      <Toaster richColors />
    </main>
  );
}

export default App;
