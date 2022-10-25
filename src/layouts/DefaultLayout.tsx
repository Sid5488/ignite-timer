import { Outlet } from 'react-router-dom'

import { Header } from '../components/Header'

const DefaultLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
}

export { DefaultLayout }
