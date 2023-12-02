import { Hero } from "./components";

import Footer from "./components/Footer";

import ContactForm from "./components/ContactForm";
import OurParteners from "./components/OurParteners";
import FeatureCard from "./components/FeatureCard";

const images00 = getImagesList(
  import.meta.glob("/public/assets/images/00/**/*.{png,jpg,jpeg,PNG,JPEG,mp4,webp}")
);
const images01 = getImagesList(
  import.meta.glob("/public/assets/images/01/**/*.{png,jpg,jpeg,PNG,JPEG,mp4,webp}")
);
const images02 = getImagesList(
  import.meta.glob("/public/assets/images/02/**/*.{png,jpg,jpeg,PNG,JPEG,mp4,webp}")
);
const images03 = getImagesList(
  import.meta.glob("/public/assets/images/03/**/*.{png,jpg,jpeg,PNG,JPEG,mp4,webp}")
);
const images04 = getImagesList(
  import.meta.glob("/public/assets/images/04/**/*.{png,jpg,jpeg,PNG,JPEG,mp4,webp}")
);
const images05 = getImagesList(
  import.meta.glob("/public/assets/images/05/**/*.{png,jpg,jpeg,PNG,JPEG,mp4,webp}")
);
const images06 = getImagesList(
  import.meta.glob("/public/assets/images/06/**/*.{png,jpg,jpeg,PNG,JPEG,mp4,webp}")
);
const images07 = getImagesList(
  import.meta.glob("/public/assets/images/07/**/*.{png,jpg,jpeg,PNG,JPEG,mp4,webp}")
);
const images08 = getImagesList(
  import.meta.glob("/public/assets/images/08/**/*.{png,jpg,jpeg,PNG,JPEG,mp4,webp}")
);

const images09 = getImagesList(
  import.meta.glob("/public/assets/images/09/**/*.{png,jpg,jpeg,PNG,JPEG,mp4,webp}")
);

const images10 = getImagesList(
  import.meta.glob("/public/assets/images/10/**/*.{png,jpg,jpeg,PNG,JPEG,mp4,webp}")
);
const ourPartnersMedia = getImagesList(
  import.meta.glob("/public/assets/images/our-parteners/**/*.{png,jpg,jpeg,PNG,JPEG,mp4,webp}")
);

function getImagesList(modules) {
  console.log(modules);
  const gallery = [];
  for (const path in modules) {
    const newPath = path.replace("public/", "");
    const p = new URL(newPath, import.meta.url).href;
    console.log(p);
    gallery.push(p);
  }

  return gallery;
}

const data = [
  {
    number: "00",
    title: "ما هي تحسين؟",
    subtitle: "تحسين هي الاولى في الشرق الأوسط في مجالات : ",
    description: `
       التحلية بالتقطير
      - التدوير والتغويز بالبلازما
      - الزراعات العائمة
      <br />
      - هي منصة تساعد الشباب على تأسيس شركات مساهمة، كل شركة مكونة من مئة عضو/ أسرة وذلك لتيسير إجراءات تأسيس وتشغيل القرى النموذجية ضمن مشروع المجتمعات العمرانية الريفية الجديدة.
      <br />
      - ينقسم مشروع تحسين إلى عشر محاور أساسية.
      `,
    images: images00,
  },
  {
    number: "01",
    title: "الأعلاف و الغذاء",
    subtitle: `تتوفر بالقرية سلاسل الإمداد المغلقة والتي تبدأ بالاكتفاء الذاتي الكامل من مختلف الأعلاف التي تناسب مختلف الحيوانات والطيور والأسماك.`,
    description: `مثل البنجر والبرسيم الحجازي و البونكام
    وغرف الشعير المستنبت وأحواض الأزولا وغيرها من المحاصيل التي
    توفر نسب متوازنة من البروتينات و النشويات الألياف بما يتناسب مع
    كل حيوان والمرحلة العمرية من حياته
    `,
    images: images01,
  },

  {
    number: "02",
    title: "الإقتصاد الدائري",
    subtitle: `دورة إنتاج الطاقة والطعام في القرية هي دورة متداخلة ومغلقة ولا يوجد فيها أي هدر.`,
    description: `- تخزين الطاقة في الكتلة الحيوية.
    - دورة إنتاج الطاقة والطعام في القرية هي دورة متداخلة ومغلقة ولا يوجد
    فيها أي هدر
    `,
    images: images02,
  },

  {
    number: "03",
    title: "البصمة الكربونية",
    subtitle: `قرى تحسين هي الأولى من نوعها في الشرق الأوسط في كون البصمة الكربونية لها (تحت الصفر) وذلك لاعتمادها الكامل في توليد الطاقة واستهلاكها و تخزينها على الوسائل الخضراء الحديثة كالألواح الشمسية والتدوير الأخضر لجميع المخلفات.`,
    description: `والتي تسبب انبعاثات كربونية في تصنيعها مثل الاسمنت وغيره
      وذلك تمهيدا للغعلان رسميا عن أول قرية مصرية ذات انبعاثات كربونية تحت الصفر
      `,
    images: images03,
  },

  {
    number: "04",
    title: "التصاميم والبناء",
    subtitle:
      "توفر التصميمات الهندسية المعمارية المستدامة الكثير من الطاقة الكهربائية المهدرة في التهوية والتبريد والتدفئة وذلك عن طريق استخدام مواد بناء من الطبيعة ذات جدار سميك عازل للحرارة مع تطبيقات معمارية تراثية كملقف الهواء والمشربيات والأفنية الداخلية.",
    description: `
      يساهم تصنيعها في انبعاثات الكربون مثل الأسمنت وحديد التسليح
      ويتم تشييد جميع المباني بالتصميمات المعمارية الخاصة بالمباني المستدامة
      
      `,
    images: images04,
  },

  {
    number: "05",
    title: "التغويز",
    subtitle:
      "تحسين هي الأولى في الشرق الأوسط فى مجال التدوير والتغويز بالبلازما. حيث أنها تقنية لتحويل المتبقيات الزراعية الصلبة إلى هيدروجين أخضر باستخدام (البلازما).",
    description: `أكد الدكتور ناصر مصطفى العشماوى رئيس بحوث متفرغ بمعهد بحوث الهندسة الزراعية أن تقنية
      التغويز ليست بالجديدة، فقد بدأت فى القرن التاسع عشر فى انجلترا، من خلال الأفران التى استخدمت فى
      حرق الفحم لصهر الحديد، استخدمت عملية التغويز أثناء الحرب العالمية الثانية بكثرة فى أوروبا وآسيا،
      لتوفير الوقود اللازم للسيارات وعربات النقل الثقيل والجرارات الزراعية، ولكن بعد توافر إمدادات البترول
      ومشتقاته، فقد حل الوقود السائل محل الوقود الغازى، لسهولة تداوله وتوافره بصورة أسهل.`,
    images: images05,
  },

  {
    number: "06",
    title: "التوسع في الإنتاج الحيواني",
    subtitle: `سلاسل الإمداد الدائرية مغلقة المنبع المتجدد توفر نوع من الإكتفاء الذاتي من الطعام وهو ما يطلق عليه بالأمن الغذائي.`,
    description: `من مصادر الطاقة والمياة والأعلاف
      مما يؤدي إلى استدامة التوسع في الإنتاج الحيواني
      والداجني والسمكي بأنواعهم المختلفة.
      `,
    images: images06,
  },

  {
    number: "07",
    title: "الطاقة",
    subtitle: `يتم إنتاج الطاقة صباحاً في قرى تحسين بالاعتماد على الألواح الشمسية، ومساءً باستخدام الكتلة الحيوية.`,
    description: `يتم إنتاج الطاقة وتخزينها في صورة الكتلة الحيوية (Biomass)،
      سواء كانت عضوية أو غير عضوية، ويتم ذلك عن طريق عملية
      التغويز (Gasification) وعملية التحلل (Pyrolysis) في غياب
      الأكسجين وبشكل صديق للبيئة، وتحويل المخلفات بأنواعها من الحالة
      الصلبة أو السائلة إلى الحالة الغازية لتشغيل مولدات الكهرباء عند
      الحاجة.`,
    images: images07,
  },

  {
    number: "08",
    title: "الماء",
    subtitle: `تحسين هي الأولى في الشرق الأوسط فى مجال التحلية بالتقطير. يتم تحلية مياه البحر أو مياه الآبار العذبة بطريقة صديقة للبيئة، وبدون أي عوادم كربونية باستخدام نظام التقطير الشمسي والتقطير الحراري.`,
    description: `للتقطير نظام وهو ،(Zero liquid Product-Agitated Thin Film Dryer)
      يقوم بفصل الملح عن الماء تماما،ً ويتم إستخدام الملح في الصناعات.
      يتم الﻹستفادة بالمياة المقطرة للإستخدام المنزلي والحيواني وكذلك لملئ الأحواض
      السمكية ذات المياه العذبة.`,
    images: images08,
  },

  {
    number: "09",
    title: "الزراعات العائمة",
    subtitle:
      "تحسين هي الأولى في الشرق الأوسط في مجال الزراعات العائمة. حيث تم عمل تعاون مع مركز البحوث الزراعية التابع لوزراة الزراعة بالتنسيق مع مؤسسة الطاقة الحيوية التابعة لوزراة البيئة.",
    description: `نشرت منظمة الاغذيه والزراعة للامم المتحدة عام 2017 بحثا اعتمده مركز البحوث الزراعية بدولة بنجلاديش يوضح
      كيفية عمل المزارع العائمة فوق المسطحات المائية وإنتاج مختلف المحاصيل الاستراتيجية كالارز المقاوم للملوحة.`,
    images: images09,
  },

  {
    number: "10",
    title: "جهاز إنعاش القلب",
    subtitle:
      "تحسين هي الأولى في الشرق الأوسط فى مجال تطوير جهاز إنعاش القلب المتنقل الأوتوماتيكي. حيث أنه يحافظ على اتزان الدورة الدموية لكافة أعضاء الجسم مع ثبات العلامات الحيوية للمصاب في مكان الحادث.",
    description: `بعد اعلان وزارة الصحة والسكان رسميا نموذج التبرع بالاعضاء بعد الوفاه والتي بادر بالتوقيع عليها رئيس لجنة
      الصحة بمجلس النواب وغيره من السادة النواب لتحفيز المواطنين للتبرع بالأعضاء بعد الوفاه لإنقاذ حياه الاخرين.`,
    images: images10,
  },
];

const App = () => {
  return (
    <div className="Tahseen">
      <Hero />
      {data.map((card, idx) => (
        <FeatureCard {...card} key={idx} />
      ))}
      <OurParteners images={ourPartnersMedia} />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default App;
