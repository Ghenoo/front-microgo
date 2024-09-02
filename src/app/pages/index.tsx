import React from "react";
import UserList from "../components/UserList";
import MainLayout from "../layouts/MainLayout";

const Home: React.FC = () => {
  return (
    <MainLayout>
      <h1>User List</h1>
      <UserList />
    </MainLayout>
  );
};

export default Home;
