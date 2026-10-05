import { NavLink, Outlet } from 'react-router-dom'
import { LayoutDashboard, FileText, BarChart3, Shield, LogOut } from 'lucide-react'
import clsx from 'clsx'

const navItems = [
  { to: '/dashboard', label: 'Дашборд', icon: LayoutDashboard },
  { to: '/orders', label: 'Заказы', icon: FileText },
  { to: '/reports', label: 'Отчёты', icon: BarChart3 },
  { to: '/admin', label: 'Администрирование', icon: Shield, rootOnly: true },
]

export default function MainLayout() {
  const role = 'root'

  return (
    <div className="flex h-screen">
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col">
        <div className="p-6 border-b border-gray-200">
          <h1 className="text-xl font-bold text-primary-600">ИПЦ</h1>
          <p className="text-xs text-gray-500 mt-1">Панель управления</p>
        </div>
        <nav className="flex-1 p-4 space-y-1">
          {navItems
            .filter((item) => !item.rootOnly || role === 'root')
            .map(({ to, label, icon: Icon }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  clsx(
                    'flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition',
                    isActive
                      ? 'bg-primary-50 text-primary-700'
                      : 'text-gray-700 hover:bg-gray-100',
                  )
                }
              >
                <Icon size={18} />
                {label}
              </NavLink>
            ))}
        </nav>
        <button className="m-4 flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-gray-700 hover:bg-gray-100">
          <LogOut size={18} />
          Выйти
        </button>
      </aside>

      <main className="flex-1 overflow-y-auto p-8">
        <Outlet />
      </main>
    </div>
  )
}