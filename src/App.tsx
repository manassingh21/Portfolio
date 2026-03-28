import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Games from "./pages/Games";
import Competitive from "./pages/Competitive";
import CommentDetail from "./components/CommentDetail";

function App() {
  return (
    <div className="relative min-h-screen bg-slate-50 dark:bg-slate-950 font-sans text-slate-900 dark:text-slate-200 transition-colors duration-300">
      {/* Ambient background glowing blobs */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-cyan-400 dark:bg-cyan-500 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-30 dark:opacity-10 animate-blob pointer-events-none"></div>
      <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-400 dark:bg-blue-500 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-30 dark:opacity-10 animate-blob animation-delay-2000 pointer-events-none"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-400 dark:bg-purple-500 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-30 dark:opacity-10 animate-blob animation-delay-4000 pointer-events-none"></div>


      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />
        <div className="flex flex-1 relative">
          {/* Main content area */}
          <main className="flex-1 w-full transition-all duration-300 z-10">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/games" element={<Games />} />
              <Route path="/competitive" element={<Competitive />} />
              <Route path="/comments/:_id" element={<CommentDetail />} />
            </Routes>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
