import React from 'react';

import React from 'react'

const Layout = ({children}) => {
  return (
    <div>
        <Navbar />
        {children}
        <Footer/>
    </div>
  )
}

export default Layout