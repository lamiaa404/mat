import suboxoneImage from '../assets/suboxone.jpeg';
import methadoneImage from '../assets/methadone.jpeg';
import methadone2Image from '../assets/methadone2.jpeg';
import { Link } from 'react-router-dom';


// Home component with updated, colorful layout
function Home() {
    return (
      <div className="min-h-screen w-full flex items-center justify-between bg-[#f8f9fa] p-8">
        {/* Left side - Text */}
        <div className="w-1/2 text-left">
          <h1 className="text-6xl mb-8 ibm-plex-sans-arabic-bold" style={{ color: '#283593' }}>
          أهلاً بيكم في موقعنا للتوعية عن علاج الإدمان بمساعدة الأدوية
          </h1>
          <p className="text-2xl mb-12 ibm-plex-sans-arabic-regular" style={{ color: '#283593' }}>
          اكتشف إزاي استخدام الأدوية ممكن يساعدك على التعافي من الإدمان بطريقة آمنة وفعالة
          </p>
          <button className="text-xl px-8 py-4 bg-[#ffeb3b] text-[#283593] font-bold rounded-lg hover:bg-[#fdd835] transition duration-300">
          <Link to="/resources">تعرف على العلاج</Link>
          </button>
        </div>
  
        {/* Right side - Randomly aligned images */}
        <div className="w-1/2 flex justify-around items-center relative">
          <img src={methadoneImage} alt="Methadone medication" className="w-48 h-auto shadow-lg rounded-lg transform -translate-y-7 -translate-x-8" />
          <img src={suboxoneImage} alt="Suboxone medication" className="w-48 h-auto shadow-lg rounded-lg transform translate-y-3 -translate-x-4" />
          <img src={methadone2Image} alt="Methadone medication" className="w-48 h-auto shadow-lg rounded-lg transform -translate-y-1 -translate-x-1" />
        </div>
      </div>
    );
  }
  
  export default Home;
  