import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";
import Exercise from "./routes/Exercise/exercise.component";
import Authentication from "./routes/authentication/authentication.component";
import Quiz from "./routes/multiple-choice/multiple-choice.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="exercise" element={<Exercise />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="multiple-choice" element={<Quiz />} />
      </Route>
    </Routes>
  );
};

export default App;
