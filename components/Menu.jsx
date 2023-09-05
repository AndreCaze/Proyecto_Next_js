import Link from "next/link"

const menuRoutes = [
    {
        rute: '/',
        name: "Inicio"
    },
    {
        rute: '/composicion_corporal',
        name: "Composicion Corporal"
    },
    {
        rute: '/about',
        name: "Acerca De"
    }

];

function Menu() {
    return (
        <div className=" w-[200px] w[30%] bg-menu h-screen">
            <h1 className="text-3xl text-center pb-5">Menu</h1>
            <ol className="text-center  space-y-2 text-xl">
                {menuRoutes.map((menu, key)=>(
                    <li key={key}><Link href={menu.rute}>{menu.name}</Link></li>
                ))}
            </ol>
        </div>

    );
}

export default Menu;