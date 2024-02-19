import AboutPage from "@/components/AboutPage";
import ExperiencePage from "@/components/ExperiencePage";
import HomePage from "@/components/HomePage";
import ProjectsPage from "@/components/ProjectsPage";

export default function Home() {
  return ( 
    <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl">
      <HomePage/>
      <AboutPage/>
      <ProjectsPage/>
    </main>
  );
}