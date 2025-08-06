import LightEffect from "./components/LightEffect";
import Layout from "./components/Layout";
import Header from "./components/Header";
import MainLayout from "./components/MainLayout";
import Intro from "./components/Intro";
import CommonLists from "./components/CommonList";
import { careerData } from "./data/career";
import { projectData } from "./data/project";

function App() {
  return (
    <LightEffect>
      <Layout>
        <Header />
        <MainLayout>
          <Intro />
          <CommonLists
            heading="경력 리스트"
            data={careerData}
            id="experience"
          />
          <CommonLists
            heading="프로젝트 리스트"
            data={projectData}
            id="project"
          />
        </MainLayout>
      </Layout>
    </LightEffect>
  );
}

export default App;
