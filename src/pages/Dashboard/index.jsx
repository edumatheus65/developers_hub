export const Dashboard = ({ user }) => {
  return (
    <main>
      <div className="container">
        <h1>Dashboard</h1>
        <div>
          <p>{user?.name}</p>
          <p>{user?.course_module}</p>
        </div>
      </div>
    </main>
  );
};
