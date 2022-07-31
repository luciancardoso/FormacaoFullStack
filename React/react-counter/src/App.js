import React, { useState } from "react";

import Template from "./Template";
import Albuns from "./Albuns";
import Counter from "./Counter";
import Users from "./Users";

const defaultPage = 'albuns';

const pages = {
  albuns: {
    text: 'Álbuns',
    component: Albuns,
  },
  counter: {
    text: 'Contador',
    component: Counter,
  },
  users: {
    text: 'Usuário',
    component: Users
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
  )
}

export default App;
