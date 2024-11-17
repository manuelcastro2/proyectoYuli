import { Menu } from './../components/menu/menu.js'

export default function DashboardLayout({ children }) {

    return (
        <div>
            <Menu />
            {children}
        </div>
    );
}
