export const Dashboard = ({ user, userLogout }) => {
  return (
    <main>
      <div className="container">
        <h1>Dashboard</h1>
        <div>
          <p>{user?.name}</p>
          <p>{user?.course_module}</p>
        </div>
        <button
          className="buttonNavigation logout"
          onClick={() => userLogout()}
        >
          Sair
        </button>
      </div>
    </main>
  );
};
