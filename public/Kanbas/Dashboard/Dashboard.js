function Dashboard() {
  const courses = [
    {
      _id: "123",
      number: "CS4550",
      title: "Web Development",
      description: "Learn web development",
      students: [],
      modules: [],
      assignmets: [],
    },
    {
      _id: "234",
      number: "CS3200",
      title: "Databases",
      description: "Learn databases",
    },
  ];

  return `
  <div class="container-fluid">
  <h1>Dashboard</h1>
  <h2>Card Grid</h2>

  <nav class="navbar fixed-top navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Dropdown
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><hr class="dropdown-divider" /></li>
              <li>
                <a class="dropdown-item" href="#">Something else here</a>
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" aria-disabled="true">Disabled</a>
          </li>
        </ul>
        <form class="d-flex" role="search">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
      </div>
    </div>
  </nav>

  <div class="row row-cols-1 row-cols-md-3 g-4 wd-course-card-grid">

    ${courses
      .map(
        (course) => `
    <div class="col wd-course-card">
        <div class="card h-100">
            <img src="/images/react.png" class="card-img-top" alt="..." />
            <div class="card-body">
            <h5 class="card-title" id="title">${course.title}</h5>
            <p class="card-text">
                ${course.description}
            </p>
            </div>
        </div>
    </div>
    `
      )
      .join("")}


    <div class="col wd-course-card">
      <div class="card h-100">
        <img src="/images/react.png" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title" id="title">Card title</h5>
          <p class="card-text">
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit
            longer.
          </p>
        </div>
      </div>
    </div>
    <div class="col wd-course-card">
      <div class="card h-100">
        <img src="/images/react.png" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit
            longer.
          </p>
        </div>
      </div>
    </div>
    <div class="col wd-course-card">
      <div class="card h-100">
        <img src="/images/react.png" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit
            longer.
          </p>
        </div>
      </div>
    </div>
    <div class="col wd-course-card">
      <div class="card h-100">
        <img src="/images/react.png" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">This is a short card.</p>
        </div>
      </div>
    </div>
    <div class="col wd-course-card">
      <div class="card h-100">
        <img src="/images/react.png" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            This is a longer card with supporting text below as a natural
            lead-in to additional content.
          </p>
        </div>
      </div>
    </div>
    <div class="col wd-course-card">
      <div class="card h-100">
        <img src="/images/react.png" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit
            longer.
          </p>
        </div>
      </div>
    </div>
  </div>

  <h2>Cards</h2>
  <div class="card" style="width: 18rem">
    <img src="/images/react.png" class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
</div>
    `;
}

export default Dashboard;
