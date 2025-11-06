'use client'

import Link from 'next/link';

export default function Home() {
  return (
    <div className="bg-gray-900 h-screen">
      <div className="px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-48">
          <div className="text-center">
            <h1 className="text-5xl font-semibold tracking-tight text-balance text-white sm:text-7xl">
              Administratum
            </h1>
            <p className="mt-8 text-lg font-medium text-pretty text-gray-400 sm:text-xl/8">
              Toma el control de tu día y maximiza tu productividad con Administratum, el gestor de tareas intuitivo diseñado para ayudarte a concentrarte en lo que importa.
            </p>
            <div className="mt-10 flex items-center justify-center">
              <Link href="/tasks" className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
                Comenzar ya
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
