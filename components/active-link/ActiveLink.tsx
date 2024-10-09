"use client"
import Link from "next/link"
import { usePathname } from "next/navigation";
import style from "./ActiveLink.module.css";
interface Props {
path: string;
title: string;
}

export const ActiveLink = ({path,title} :Props) => {
    const pathName = usePathname()
 
  return (
    <Link className={`${style.link} ${ (pathName === '/'+ path) ? style['active-link'] : ''} `} href={path}>{title}</Link>
  )
}