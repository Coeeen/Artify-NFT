import React from 'react'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import AdminPage from './Components/admin/AdminPage'

function AdminPanelPage() {
  return (
    <div>
      <Navbar />
      <AdminPage />
      <Footer />
    </div>
  )
}

export default AdminPanelPage
