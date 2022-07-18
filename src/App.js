import "./App.css";
import AboutScreen from "./screens/AboutScreen";
import ContactUsScreen from "./screens/ContactUsScreen";
import HomeScreen from "./screens/HomeScreen";
import BlogScreen from "./screens/BlogScreen";
import PrivacyPolicyScreen from "./screens/PrivacyPolicyScreen";
import TermsOfServiceScreen from "./screens/TermsOfServiceScreen";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GithubTrackerApp from "./githubFileCode";

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="comingsoon" element={<HomeScreen />} />
      <Route path="about" element={<AboutScreen />} />
      <Route path="blog" element={<BlogScreen />} />
      <Route path="ContactUsScreen" element={<ContactUsScreen />} />
      <Route path="PrivacyPolicyScreen" element={<PrivacyPolicyScreen />} />
      <Route path="TermsOfServiceScreen" element={<TermsOfServiceScreen />} />
      <Route path="github" element={<GithubTrackerApp />} />
    </Routes>
  </BrowserRouter>
      
    </>
  );
}

export default App;
