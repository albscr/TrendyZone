import React from "react"

const Layout = ({children}) => {
    return (
        <div className="flex flex-col  md:mt-36 md:ml-60 items-center m-4">
            {children}
        </div>
    )
}

export default Layout