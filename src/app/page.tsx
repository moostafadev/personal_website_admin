import {
  createProjectAction,
  getAllProjectsAction,
} from "@/actions/project.action";

export default async function Home() {
  const projects = await getAllProjectsAction();
  console.log(projects);
  return <main>Mostafa</main>;
}
