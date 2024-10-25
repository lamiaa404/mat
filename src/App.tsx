import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import  Home  from '/Users/lh/Documents/Projects/mat_website/src/components/Home';
import Resources from '/Users/lh/Documents/Projects/mat_website/src/components/Resources';
import Videos from '/Users/lh/Documents/Projects/mat_website/src/components/Videos';
import Whoarewe from '/Users/lh/Documents/Projects/mat_website/src/components/Whoarewe';


// Main App component with colorful, modern navigation and layout
function App() {
  return (
    <Router>
      {/* Colorful navigation */}
      <nav className="p-4 bg-purple-700 text-white">
  <ul className="flex justify-around items-center space-x-reverse space-x-8 rtl:space-x-0 rtl:space-x-reverse">
    <li>
      <Link className="text-white font-bold hover:underline" to="/">
        الرئيسية
      </Link>
    </li>
    <li>
      <Link className="text-white font-bold hover:underline" to="/resources">
        العلاج الدوائي
      </Link>
    </li>
    <li>
      <Link className="text-white font-bold hover:underline" to="/videos">
        الفيديوهات
      </Link>
    </li>
    <li>
      <Link className="text-white font-bold hover:underline" to="/whoarewe">
        من نحن؟
      </Link>
    </li>
  </ul>
</nav>


      {/* Define routes for different pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/whoarewe" element={<Whoarewe />} />
      </Routes>
    </Router>
  );
}

export default App;
