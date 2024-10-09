import Link from "next/link"
import { HomeIcon } from "@primer/octicons-react";
import { ActiveLink } from "../active-link/ActiveLink";

const navItems=[
{
    path:'about',
    title:'About'
},
{
    path:'pricing',
    title:'Pricing'
},
{
    path:'contact',
    title:'Contact'
},
]

export const NavBar = () => {
  return (
    <nav className="flex bg-blue-800 bg-opacity-30 p-4 m-1 rounded">
        <Link href={'/'} className="flex items-center">
        <HomeIcon className="mr-2"/> 
        <span >Home</span>
        </Link>

        <div className="flex flex-1"></div>
        {
            navItems.map(navItem => (
                <ActiveLink key={navItem.path} {...navItem}/>
            ))
        }
    </nav>
  )
}
