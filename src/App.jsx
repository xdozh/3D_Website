import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas, Footer } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Works />
        <Tech />
        <div className='relative z-0'>
          <Contact/>
          <StarsCanvas />
        </div>
        <div className={'relative z-0 bg-blue-800 py-2'}> {/* Adjust the "py-2" value to your desired padding */}
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
