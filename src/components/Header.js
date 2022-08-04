import React from "react";
import "../components/Header.css"



class Header extends React.Component {


    render() {
        return (
            <div class="bg-white">
            <div class="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
              <div class="text-center">
                <h2 class="text-base font-semibold text-indigo-600 tracking-wide uppercase">React project</h2>
                <p class="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">E-VENT</p>
                <p class="max-w-xl mt-5 mx-auto text-xl text-gray-500">Plan your event now!</p>
              </div>
            </div>
          </div>
        )
    }
}

export default Header;