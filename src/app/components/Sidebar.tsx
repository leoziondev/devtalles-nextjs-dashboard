import Image from 'next/image'
import { IoBrowsersOutline, IoCalculator, IoFootball, IoLogoReact } from 'react-icons/io5'
import { SidebarMenuItem } from '.'

const menuItems = [
    {
        path: '/dashboard/main',
        icon: <IoBrowsersOutline size={32} />,
        title: 'Dashboard',
        subtitle: 'Data Overview'
    },
    {
        path: '/dashboard/counter',
        icon: <IoCalculator size={32} />,
        title: 'Counter',
        subtitle: 'Client Side Counter'
    },
    {
        path: '/dashboard/pokemons',
        icon: <IoFootball size={32} />,
        title: 'Pokemons',
        subtitle: 'Static Generation'
    },
]

export const Sidebar = () => {
  return (
    <div id="menu" className="bg-gray-900 min-h-screen z-10 text-slate-300 w-96 left-0 overflow-y-scroll">
          <div id="logo" className="my-4 px-6">
            <h1 className="flex items-center text-lg md:text-2xl font-bold text-white">
                <IoLogoReact className="mr-1" />
                <span>Zion</span>
                <span className="text-blue-500">Dev</span>.</h1>
            <p className="text-slate-500 text-sm">Manage your actions and activities</p>
          </div>
          <div id="profile" className="px-6 py-10">
            <p className="text-slate-500">Welcome back,</p>
            <a href="#" className="inline-flex space-x-2 items-center">
              <span>
                <Image
                    src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c"
                    width={32}
                    height={32}
                    className="rounded-full"
                    alt=""
                />
              </span>
              <span className="text-sm md:text-base font-bold">
                Edward Tompson
              </span>
            </a>
          </div>

          <div id="nav" className="w-full px-6">
            {menuItems.map((item) => <SidebarMenuItem key={item.path} {...item} />)}
          </div>
        </div>
  )
}
