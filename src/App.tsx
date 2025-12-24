import CourseCurriculum from "./components/CourseCurriculum";
import CourseOverview from "./components/CourseOverview";
import Cta from "./components/CTA";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import PricingCards from "./components/PricingCards";
import Testimonials from "./components/Testimonials";

const App = () => {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <main>
        <Home />
        <section id="cta">
          <Cta />
        </section>
        <section id="courseoverview">
          <CourseOverview />
        </section>
        <section id="testimonials">
          <Testimonials />
        </section>
        <section id="curriculum">
          <CourseCurriculum />
        </section>
        <section id="pricing">
          <PricingCards />
        </section>
        <Footer />

      </main>
    </div >
  )
}

export default App