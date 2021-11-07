
import { ContactDesktopForm } from "./components/desktop-view/contactDesktopForm";
import { ContactMobileForm } from "./components/mobile-view/ContactMobileForm";


function App() {
  // The current width of the viewport
  const width = window.innerWidth;
  // The width below which the mobile view should be rendered
  const breakpoint = 620;
  
  /* If the viewport is more narrow than the breakpoint render the
     mobile component, else render the desktop component */
  return width < breakpoint ? <ContactMobileForm /> : <ContactDesktopForm />;
  
}

export default App;
