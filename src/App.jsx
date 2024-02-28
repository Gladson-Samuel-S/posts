import { useLoaderData, Outlet, useNavigation } from "react-router-dom";
import "./style.css";
import Container from "./Components/Container";
import SideBar from "./Components/SideBar";

export default function App() {
  const { posts } = useLoaderData();
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <Container>
      <SideBar posts={posts} />
      <div className={`details`}>
        {isLoading ? <p>Loading...</p> : <Outlet />}
      </div>
    </Container>
  );
}
