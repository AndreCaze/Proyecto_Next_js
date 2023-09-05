import { Kanit, Lato } from 'next/font/google'
import Profile from "../assets/foto2.png";
import Image from 'next/image';

const kanit = Kanit({ subsets: ['latin'], weight: ["500"], style: ["italic"] });
const lato = Lato({subsets: ['latin'], weight: ["700"], style: ["normal"] });

export default (About) =>{
    return (
        <div className="bg-primary flex items-center justify-center h-screen w-full md:h-screen overflow-y-scroll">
            <div className="bg-secundary p-10 rounded-lg shadow-md max-w-4xl mx-auto md:mx-auto ">
                <div className="text-center mb-6">
                    <h1 className={`${kanit.className} text-3xl font-semibold`}>Acerca De</h1>
                    <p className="text-gray-600 mt-2">
                    Aprenda mas del Creador
                    </p>
                </div>
                <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3">
                <Image
              src={Profile}
              width={320}
              height={320}
              alt="Mi foto de perfil"
            />
            </div>
            <div className="md:w-2/3 md:pl-8 mt-4 md:mt-0">
                <h2 className={`${kanit.className} text-xl font-semibold mb-2`}>Mi Historia</h2>
                <p className={`${lato.className} text-gray-600`}>
                    Nacido y criado en la ciudad de Ensenada, Baja California.
                    Soy un estudiante de ultimo año en el Instituto Tecnologico de Ensenada,
                    en la carrera de Ingenieria en Sistemas Computacionales.
                </p>
                <h2 className={`${kanit.className} text-xl font-semibold mt-4 mb-2`}>Mi Mision</h2>
                <p className={`${lato.className} text-gray-600`}>
                    Estoy comprometido a crear soluciones innovadoras que mejoren vidas y hagan un
                    impacto positivo en la sociedad.
                </p>
                <h2 className={`${kanit.className} text-xl font-semibold mt-4 mb-2`}>Prestacion de Servicio</h2>
                <p className={`${lato.className} text-gray-600`}>
                    Actualmente soy un programador independiente, por lo cual si estan interesados
                    o requieren asistencia en algun proyecto, pongase en contacto con mi correo
                    para ver detalles.
                </p>
            </div>
            </div>
                <div className="text-center mt-6">
                    <p className="text-gray-600">
                        Contacto en: {' '}
                    <a href="mailto:al19760606@ite.edu.mx" className="text-hiper">
                        al19760606@ite.edu.mx
                    </a>
                    </p>
                </div>
            </div>
        </div>
    )

};




