import { Metadata } from 'next';
import React from 'react'


export const metadata:Metadata = {
 title: 'About',
 description: 'Sobre nosotros'
};

export default function AboutPage() {
  return (
    <h1 className='text-7xl'>AboutPage</h1>
  )
}
