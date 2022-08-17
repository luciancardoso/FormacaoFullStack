import React, { useState } from "react";
import Template from "./templates/Template";
import Posts from "./pages/Posts";

const defaultPage = '/'

const pages = {
  posts: {
    text: 'Posteres',
    component: Posts,
  }
}

function App() {

  const [page, setPage] = useState(defaultPage)

  const handleChangePage = page => {
    setPage(page)
  }

  const Page = pages[page].component

  return (
    <Template pages={pages} activePage={page} onChangePage={handleChangePage}>
      {Page && <Page />}
    </Template>
  );
}

export default App;
