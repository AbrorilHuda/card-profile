import { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";
import "./App.css";

function App() {
  const usernameGithub = "AbrorilHuda";
  const [profile, setProfile] = useState(null);
  useEffect(() => {
    fetch(`https://api.github.com/users/${usernameGithub}`)
      .then((response) => response.json())
      .then((data) => setProfile(data));
  }, []);

  if (!profile) return "loading data....";

  return (
    <div className="wrapper">
      <Header gambar={profile.avatar_url} />
      <Content name={profile.name} university={profile.company} />
      <Footer />
    </div>
  );
}

export default App;
