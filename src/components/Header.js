import React from "react";




class Header extends React.Component {


    render() {
        return (
          <div className="relative h-120 bg-indigo-500">
          <div className="absolute inset-0">
            <img
              className="w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1609102026400-3c0ca378e4c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1194&q=80"
              alt=""
            />
            <div className="absolute inset-0 bg-blue-500 mix-blend-multiply" aria-hidden="true" />
          </div>
          <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">E-VENTS</h1>
            <p className="mx-auto mt-6 text-xl tracking-tight  text-indigo-100 max-w-3xl">
              Looking to plan your next group trip?<br></br>We will give you flight and hotel estimates to your next location and help you find what is happening when you get there. 
            </p>
          </div>
        </div>
        )
    }
}

export default Header;