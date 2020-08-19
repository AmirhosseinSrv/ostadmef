import React from "react"
import { Helmet } from "react-helmet"

import StoryImg from "../../assets/images/story.png"
import GroupImg from "../../assets/images/group.png"
import Title from "../../components/title/title.component"
import { objectToSchema } from "../../helpers/functions"

function Story(props) {
  return (
    <div>
      <Helmet>
        <script
          key={`storyJSON`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              objectToSchema({
                "@context": "http://schema.org",
                "@type": "BreadcrumbList",
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    item: {
                      "@id": `${process.env.REACT_APP_URL}/`,
                      name: "لینوم",
                      description: "لینوم - پلتفرم آموزشی میکرولرنینگ",
                    },
                  },
                  {
                    "@type": "ListItem",
                    position: 1,
                    item: {
                      "@id": `${process.env.REACT_APP_URL}/story`,
                      name: "داستان ما",
                      description:
                        "داستان تولد لینوم",
                    },
                  },
                ],
              })
            ),
          }}
        />
        <title>داستان ما | لینوم</title>
        <link rel="canonical" href={`${process.env.REACT_APP_URL}/story`} />
        <meta
          name="description"
          content="لینوم یک پلتفرم آموزشی میکرولرنینگ است که با تکیه بر ویدئو های کپسولی و فشرده ، یادگیری دروس دانشگاهی را در سریع ترین زمان ممکن به ارمغان می آورد."
        />
      </Helmet>
      <div className="mx-auto text-center my-2">
        <Title mainTitle={true}>داستان ما</Title>
      </div>
      <div className="container mx-auto">
        <div className="bg-orange-100 py-3 px-3 rounded-lg">
          <img src={StoryImg} className="rounded-lg" alt="داستان لینوم" />
          <p className="my-2 leading-10 font-lg text-justify px-4 text-lg">
            خب حالا که گویا گذرتون به این صفحه خورده، می‌خوام براتون یه قصه بگم،
            قصه‌ای از شکل‌گیری لینوم.
            <br /> اول از همه بگم، اگه حوصله ندارید یا شب امتحانتونه، بهتون توصیه
            می‌کنم یه روز دیگه این صفحه رو چک کنید!
            <br /> چند تا دانشجو تو ترم‌های اول، که تازه وارد یه محیط آکادمیک درسی
            شده بودن و هیچ کدومشون اون قدری که باید درس نمیخوندن.
            <br /> گذشت و گذشت تا امتحانات پایان ترمشون رسید، حالا این دانشجوهای
            قصه‌ی ما موندن با کوهی از کتاب‌ها و جزوه‌هایی که باید میخوندن.
            <br /> مگه امکان‌پذیر بود؟
            <br /> آقا شما به من بگو، کسی میتونه توی 1 ساعت 100 صفحه جزوه بخونه؟ نه
            نمی‌تونه برادر من. الان که درشرف فارغ‌التحصیلی از این گذرگاه سخت دانشگاه
            هستیم می‌تونیم قاطعانه بگیم واقعا نمیشه! <br />
            در همین دوران دانشگاه بود که اونا کنار هم جمع شدن و برای پایان دادن به
            این پروسه‌ی عجیب، یعنی شب امتحان فکری کردن. چنتا سوال و دغدغه‌ی مشترکم
            داشتن که همرو همون‌جا مطرح کردن.
            <br /> بازده‌ی کلاس‌های درسی دانشگاه چه قدره؟
            <br /> برای گذروندن یک درس باید چه قدر مطالعه کرد؟
            <br />
            بهترین روش برای یاد گرفتن یه مهارت جدید چیه؟
            <br /> توی همین سوالات و همفکری‌ها بود که دقیقا لینوم ساخته شد.
            <br /> لینوم اولین پلتفرم آموزش‌های میکرولرنینگ و کپسولیه که با علم روز
            دنیا سعی در بالابردن بازده آموزش‌ها و کاهش زمان یک آموزش داره. <br />
            بخوام به زبون خودمونی بگم، یعنی این که:
            <br /> در آموزش‌های لینوم مهم‌ترین فاکتور، زمان و بازده‌ای آموزش هست، ما
            با لینوم در کمترین زمان ممکن و با تکنیک‌های آموزشی میکرولرنینگ یک درس
            کامل دانشگاهی یا یک مهارت جدید رو یاد می‌گیریم. درگیری‌های روزمره، به
            قدری وقت هر کدوم از ما رو گرفته که عملا امکان نداره کسی ادعا کنه که وقت
            نامحدودی رو برای یادگیری یک مهارت در اختیار داره. حتما هر کدوم از ما
            چندین آموزش رو به خاطر داریم که یه عمری می‌خواستیم یادشون بگیریم و یا
            شاید بعضی‌هاش رو هم حتی دانلود کرده‌باشیم و چند سالی گوشه‌ی کامپیوترمون
            خاک خورده باشه . چه دلیلی می‌تونه باعث بشه که ما این یادگیری‌هارو پشت گوش
            بندازیم؟ شاید چند نفری از ما باشه که قصد یادگرفتن فتوشاپ رو توی همین چند
            ماهه دارن! یا شاید اگر شما هم مثل ما دانشجو باشید، حتما این ترم
            می‌خواستید درست و حسابی درس بخونید! امروزه تو دنیا، حجم زیاد یک آموزش
            کیفیت اون رو تعیین نمیکنه، بلکه نحوه‌ی پویایی و بازده‌ای اونه که ما رو
            ترغیب به یادگیری یک مهارت میکنه‌. لینوم یک فرهنگه، فرهنگ یادگیری فشرده.
            فرهنگ این که برای وقتتون ارزش قائل بشید، مفید یادبگیرید و چیزهای بیشتری
            رو برای خودتون تبدیل به مهارت کنین. پشت این صفحه‌ی رنگارنگ یه تیم پرانرژی
            هست که با عشق و علاقه کار و یه سبک جدید توی آموزش رو پایه‌گذاری میکنه. از
            اون روزی که شروع کردیم تا الان افرادیم بهمون اضافه شدن و تو این مسیر
            همراهیمون کردن و باهامون لینومو قدم به قدم جلو بردن. اول تیممون شکل بالا
            بود ولی الان تیممون شکل پایینو داره و هر روز به امید کمک و همراهی شما با
            تمام قدرت داره به راهش ادامه می‌ده.{" "}
          </p>
          <img src={GroupImg} className="rounded-lg my-2" />
          <p className="leading-10 text-lg text-justify px-4">
            مرسی که در این داستان همسفر لینوم بودین.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Story
