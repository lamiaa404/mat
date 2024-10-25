import  { useState } from 'react';
import suboxoneImage from '/Users/lh/Documents/Projects/mat_website/src/assets/suboxone.jpeg';
import bupImage from '/Users/lh/Documents/Projects/mat_website/src/assets/bup.jpg';
import methadone2Image from '/Users/lh/Documents/Projects/mat_website/src/assets/methadone2.jpeg';
import methadoneImage from '/Users/lh/Documents/Projects/mat_website/src/assets/methadonesf.png';

function Resources() {
  const [activeTab, setActiveTab] = useState('methadone');

  return (
    <div className="min-h-screen w-full p-8 bg-[#f8f9fa]">
      <div className="max-w-screen-lg mx-auto">

        {/* General Overview Section */}
        <section className="mb-12 bg-[#FFDA72] p-6 rounded-lg shadow-lg">
          <h2 className="text-4xl font-bold text-[#283593] mb-4">يعني ايه العلاج بالأدوية؟</h2>
          <p className="text-xl text-[#283593] mb-4">
            العلاج بالأدوية يعني استخدام أدوية مخصوصة عشان تساعد الناس يسيبوا الإدمان، وكجزء من برنامج علاجي بيشمل استشارات ودعم نفسي.
            الأدوية دي آمنة وموافقة عليها وبتساعد في تخفيف الأعراض اللي بتصاحب العلاج.
          </p>
          <p className="text-xl text-[#283593] mb-4">
            الأبحاث بتوضح إن العلاج بالأدوية مع الجلسات بيزود فرص الشفاء ويقلل الانتكاس.
          </p>
          <p className="text-xl text-[#283593] mb-4">
            الهدف هو التعافي الكامل والقدرة على العيش بشكل طبيعي. العلاج بالأدوية ممكن يساعد في:
          </p>

          {/* Bullet Points */}
          <ul className="list-disc list-inside text-xl text-[#283593] mb-4">
            <li>تحسين صحة المرضى العامة</li>
            <li>زيادة الالتزام بالعلاج</li>
            <li>تقليل استخدام المخدرات غير القانونية</li>
            <li>تحسين فرص الشغل</li>
            <li>تحسين صحة الحوامل اللي بيعانوا من الإدمان</li>
          </ul>

          <p className="text-xl text-[#283593] mb-4">
            الأدوية دي كمان بتقلل فرص الإصابة بأمراض زي فيروس الإيدز أو التهاب الكبد.
          </p>
        </section>

        {/* WHO Recommendation Section */}
        <section className="mb-12 bg-[#B2DFDB] p-6 rounded-lg shadow-lg">
          <h2 className="text-4xl font-bold text-[#283593] mb-4">توصيات منظمة الصحة العالمية</h2>
          <p className="text-lg text-[#283593] mb-4">
            منظمة الصحة العالمية بتوصي باستخدام أدوية زي الميثادون والبوبرينورفين لعلاج الإدمان، لإن الأدوية دي أثبتت فعاليتها.
          </p>
          <p className="text-lg text-[#283593] mb-4">
            المنظمة بتشجع الدول إنها تطور برامج علاج الإدمان وتوفر الأدوية للمرضى.
          </p>

          <p className="text-lg text-[#283593] mb-4">
            لو الدول عندها الإمكانية، من الأفضل توفر الميثادون والبوبرينورفين لعلاج الإدمان، عشان لو مريض مش مرتاح مع واحد من الأدوية أو مش جايب نتيجة معاه، ممكن يجرب التاني.
            ده بيساعد في استمرار المرضى في العلاج وكمان بيحسن من جودته عشان المريض يلاقي اللي يناسبه.
          </p>

          <h4 className="text-3xl font-bold text-[#283593] mb-4">الحد الأدنى للعلاج حسب منظمة الصحة العالمية</h4>
          <p className="text-lg text-[#283593] mb-4">
            العلاجات الأساسية لازم تشمل علاج مستمر بالأدوية زي <span className="underline font-bold">الميثادون أو البوبرينورفين</span> وخدمات الانسحاب.
            في الحد الأدنى، يعني توفير <span className="underline font-bold">الميثادون أو البوبرينورفين</span> لعلاج الإدمان الخارجي.
          </p>

          <h5 className="text-3xl font-bold text-[#283593] mb-4">تغطية العلاج المرغوب بها حسب منظمة الصحة العالمية</h5>
          <p className="text-lg text-[#283593] mb-4">
            من الأفضل تضمين العلاج بالأدوية زي <span className="underline font-bold">الميثادون والبوبرينورفين</span> لعلاج الإدمان والانسحاب، وأدوية "ألفا-2" للانسحاب،
            والنالتريكسون للوقاية من الانتكاس، والنالوكسون لعلاج الجرعات الزائدة.
          </p>
        </section>

        {/* Tabs for different medications */}
        <div className="flex justify-around mb-8 border-b-2 border-[#283593]">
          <button
            className={`text-xl p-4 ${activeTab === 'methadone' ? 'border-b-4 border-[#283593] font-bold' : ''}`}
            onClick={() => setActiveTab('methadone')}
          >
            الميثادون
          </button>
          <button
            className={`text-xl p-4 ${activeTab === 'buprenorphine' ? 'border-b-4 border-[#283593] font-bold' : ''}`}
            onClick={() => setActiveTab('buprenorphine')}
          >
            البوبرينورفين
          </button>
          <button
            className={`text-xl p-4 ${activeTab === 'suboxone' ? 'border-b-4 border-[#283593] font-bold' : ''}`}
            onClick={() => setActiveTab('suboxone')}
          >
            السابوكسون
          </button>
        </div>

        {/* Tab content based on selected tab */}
        {activeTab === 'methadone' && (
          <div className="bg-[#FFEBB2] p-6 rounded-lg shadow-lg">
            <h3 className="text-3xl font-bold text-[#283593] mb-4">الميثادون</h3>
            <p className="text-lg text-[#283593] mb-4">
              الميثادون هو دواء بيشتغل على تنشيط المستقبلات في المخ اللي بتتأثر بالمخدرات. بيتاخد عن طريق الفم، غالبًا على شكل سائل، والمريض بياخده عادة كل يوم في مراكز علاج الإدمان.
            </p>

            <h4 className="text-2xl md:grid-cols-2 font-bold text-[#283593] mb-2">فوائد الميثادون:</h4>
            <ul className="list-disc list-inside mb-4 text-lg text-[#283593]">
              <li>الميثادون بيساعد في تخفيف أعراض الانسحاب وبيقلل الرغبة في المخدرات، وبيساعد المريض يركز على حياته.</li>
              <li>ممكن يكون مناسب لو أدوية تانية زي البوبرينورفين ما كانتش نافعة مع المريض.</li>
              <li>بيتقدم في مركز خاضع للإشراف الكامل، مع خدمات زي الاستشارات.</li>
            </ul>

            <div className="grid grid-cols-2 gap-4 md:grid-cols-2 justify-items-center">
  <img src={methadoneImage} alt="Methadone" className="w-1/2 h-auto rounded-lg shadow-lg" />
  <img src={methadone2Image} alt="Methadone" className="w-1/2 h-auto rounded-lg shadow-lg" />
</div>
         </div>
        )}

        {activeTab === 'buprenorphine' && (
          <div className="bg-[#B2EBF2] p-6 rounded-lg shadow-lg">
            <h3 className="text-3xl font-bold text-[#283593] mb-4">البوبرينورفين</h3>
            <p className="text-lg text-[#283593] mb-4">
              البوبرينورفين هو دواء بيعالج الادمان. ممكن يتاخد عن طريق الفم أو بالحقن. البوبرينورفين هو ناهض جزئي للمخدرات،
              وده معناه إنه بيشتغل على تنشيط المستقبلات في المخ زي الأفيونات التانية، بس مفعوله بيكون أقل قوة من ناهضات المخدرات الكاملة زي الفنتانيل أو الهيروين. 
              الأدوية المشهورة اللي فيها بوبرينورفين هي السابوكسون وزوبسولف.
            </p>
            
            <h4 className="text-2xl font-bold text-[#283593] mb-2">فوائد البوبرينورفين:</h4>
            <ul className="list-disc list-inside mb-4 text-lg text-[#283593]">
              <li>البوبرينورفين بيقلل الرغبة في المخدرات وأعراض الانسحاب، وكمان بيمنع الإحساس بالنشوة من المخدرات التانية.</li>
            </ul>
            
            <p className="text-lg text-[#283593] mb-4">
              البوبرينورفين ممكن يتاخد بوصفة من دكتور، ممرضة، أو مساعد طبيب. في الولايات المتحدة، التأمين الصحي بيغطي تكلفته، لكن في مصر مش معروف إذا كان متوفر.
            </p>

            <img src={bupImage} alt="Buprenorphine" className="w-1/3 h-auto rounded-lg shadow-lg mx-auto" />
          </div>
        )}

        {activeTab === 'suboxone' && (
          <div className="bg-[#D1C4E9] p-6 rounded-lg shadow-lg">
            <h3 className="text-3xl font-bold text-[#283593] mb-4">السابوكسون</h3>
            <p className="text-lg text-[#283593] mb-4">
              السابوكسون أو البوبرينورفين هو دواء بيساعد الناس يوقفوا أو يقللوا من استخدام الهيروين أو الأفيونات التانية (زي المسكنات القوية زي المورفين).
            </p>
            <p className="text-lg text-[#283593] mb-4">
              الدواء بيجي على شكل شريط قابل للذوبان تحت اللسان (وأحيانًا بيجي على شكل أقراص). الدواء فيه بوبرينورفين (دواء أفيوني) ونالوكسون (ناركان). لو أخدته تحت اللسان، البوبرينورفين بيشتغل في جسمك والنالوكسون مش بيمتص.
            </p>

            <h4 className="text-2xl font-bold text-[#283593] mb-2">فوايد السابوكسون/البوبرينورفين:</h4>
            <ul className="list-disc list-inside mb-4 text-lg text-[#283593]">
              <li>السابوكسون بيساعد في تقليل الرغبة في المخدرات ويعالج أعراض الانسحاب، وكمان بيمنع الإحساس بالنشوة اللي بتسببها الأفيونات التانية.</li>
            </ul>

            <p className="text-lg text-[#283593] mb-4">
              العلاج بالأدوية زي السابوكسون فعال جدًا في إنه يخلي المرضى يوقفوا استخدام الهيروين أو مسكنات الألم. الأعراض الجانبية نادرة، بس ممكن تحصل زي الإمساك، الصداع، صعوبة النوم، تورم الكاحلين.
            </p>

            {/* Warning Section in Red */}
            <p className="text-lg text-red-600 font-bold mb-4">
              - السيدات الحوامل ماينفعش ياخدوا السابوكسون/البوبرينورفين. الأطفال والرضع ماينفعش ياخدوه لأنه ممكن يوقف تنفسهم ويعرضهم للموت. اتصل بـ911 لو الطفل بلع أي كمية منه بالغلط.
            </p>

            <p className="text-lg text-[#283593] mb-4">
              السابوكسون متوفر بوصفة من الأطباء. في الولايات المتحدة، التأمين الصحي بيغطي تكاليفه، لكن في مصر مش معروف إذا كان متوفر.
            </p>

            <img src={suboxoneImage} alt="Suboxone" className="w-1/3 h-auto rounded-lg shadow-lg mx-auto" />
          </div>
        )}
      </div>
    </div>
  );
}

export default Resources;
