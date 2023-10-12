import ModuleList from "../Modules/ModuleList";

function Home() {
  return (
    <div className="row">
      <div className="col-10">
        <h1>Home</h1>
        <ModuleList />
      </div>
      <div className="col-2">Status</div>
    </div>
  );
}

export default Home;
