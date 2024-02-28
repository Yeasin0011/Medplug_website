import React from 'react';

import Header from './Header';

import Footer from './Footer';

import {Helmet} from "react-helmet";

const Layout = ({children, title, description, keyword, author}) => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keyword} />
        <meta name="author" content={author} />
        <title>{title}</title>  
      </Helmet>  
      <Header/>
        <main style={{minHeight:"82.5vh"}}>
            {children}
        </main>
        <Footer/>
        
    </div>
  )
}

Layout.defaultProps={
title: 'Medplug',
description: "One stop solution for medicines!",
keyword:"medicine, drug, dhaka",
author: "MedPlug Dev team"
}

export default Layout