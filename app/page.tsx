import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronRight, Dumbbell, Check } from "lucide-react"
import Image from "next/image"
import Navbar from "@/components/navbar"

export default function BioTrainingLanding() {
  return (
    <div className="min-h-screen bg-black">
      {/* Navbar */}
      <Navbar />
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video autoPlay muted loop playsInline className="w-full h-full object-cover">
            <source src="/videos/videogym.webm" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            TRANSFORMA TU PASIÓN
            <br />
            <span className="text-teal-400">EN PROFESIÓN</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
            Únete a Bio Training y domina el arte del entrenamiento físico con nuestros cursos especializados diseñados
            por profesionales de élite.
          </p>

          <Button
            size="lg"
            className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 text-lg font-semibold uppercase tracking-wide transition-all duration-300 transform hover:scale-105"
          >
            COMIENZA TU TRANSFORMACIÓN
            <ChevronRight className="ml-2 w-5 h-5" />
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <div className="animate-bounce">
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Red Background */}
      <section className="py-20 bg-teal-600">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-8">
                <div className="w-16 h-1 bg-white mb-6"></div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                  COMUNIDAD
                  <br />
                  <span className="text-6xl md:text-7xl">BIO TRAINING</span>
                </h2>
              </div>
            </div>
            <div className="text-white space-y-6">
              <p className="text-lg leading-relaxed">
                En 2014 un grupo de colegas comenzamos este espacio para conversar sobre los temas de la práctica diaria
                de nuestra profesión que más nos interesaban.
              </p>
              <p className="text-lg leading-relaxed">
                Con el tiempo, el espacio fue creciendo y profesionalizándose, sumando contenidos de blog, encuentros
                (presenciales y virtuales) y videos para intercambiar experiencias, análisis de papers, foro de
                consultas, herramientas digitales para el trabajo, cursos y, por supuesto, mucho networking.
              </p>
              <p className="text-lg leading-relaxed">
                Nuestro objetivo como comunidad es ser parte activa de la construcción de profesionalismo en nuestro
                sector y elevar los estándares de la industria. Es por eso que compartimos información de forma gratuita
                en nuestras redes sociales y en el blog.
              </p>
              <p className="text-lg leading-relaxed">
                Sin embargo, la sustentabilidad del proyecto se logra mediante la venta de los cursos y accesos a la App
                de entrenamiento, el apoyo de nuestros sponsors y, sobre todo, con las membresías pagas que tienen unos
                beneficios que están buenísimos. ¿Los querés conocer?
              </p>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-teal-600 px-8 py-3 text-base font-semibold uppercase tracking-wide mt-6"
              >
                QUIERO VER DETALLES DE LA MEMBRESÍA
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 uppercase tracking-wide">
              PORQUE UNIRME A LA COMUNIDAD
            </h2>
          </div>

          <div className="space-y-16">
            {/* Community of Specialists */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-teal-600 mb-4 uppercase">
                  UNA COMUNIDAD DE ESPECIALISTAS EN ACCIÓN
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Forma parte de una red internacional de entrenadores, kinesiológos, readaptadores y científicos del
                  deporte comprometidos con el progreso profesional. Compartí experiencias, resolvé dudas concretas y
                  enriquecé tu práctica en un entorno donde el rigor y la colaboración son la base del crecimiento.
                </p>
              </div>
              <div className="flex justify-center">
                <div className="w-64 h-64 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center">
                  <Image
                    src="/images/comunidad-especialistas.png"
                    alt="Comunidad de especialistas en acción"
                    width={256}
                    height={256}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Mobile App / Formación Continua */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="flex justify-center lg:order-1">
                <div className="relative">
                  <div className="w-64 h-96 bg-teal-600 rounded-3xl flex items-center justify-center overflow-hidden">
                    <Image
                      src="/images/formacion-continua.png"
                      alt="Formación continua con base científica"
                      width={256}
                      height={384}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
              <div className="lg:order-2">
                <h3 className="text-2xl font-bold text-teal-600 mb-4 uppercase">
                  FORMACIÓN CONTINUA CON BASE CIENTÍFICA
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Accedé a contenidos actualizados, creados por profesionales con trayectoria comprobada y resultados
                  reales. Cada recurso está diseñado para traducir la evidencia científica en estrategias prácticas, sin
                  análisis pasajeros ni promesas vacías. Como miembro de la comunidad, vas a aprender lo que realmente
                  funciona, con una formación continua que evoluciona con vos y con la ciencia.
                </p>
              </div>
            </div>

            {/* Tools / Herramientas */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-teal-600 mb-4 uppercase">
                  HERRAMIENTAS APLICABLES DESDE EL PRIMER DÍA
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Con tu membresía, desbloqueá el acceso exclusivo a dashboards interactivos, protocolos de evaluación,
                  infografías y guías prácticas que podés aplicar hoy mismo. Diseñadas para ahorrar tiempo y potenciar
                  tu trabajo, estas herramientas te ayudan en el análisis, planificación y toma de decisiones.
                </p>
              </div>
              <div className="flex justify-center">
                <div className="w-64 h-64 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center">
                  <Image
                    src="/images/herramientas-aplicables.png"
                    alt="Herramientas aplicables desde el primer día"
                    width={256}
                    height={256}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits and Pricing Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Benefits */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8 uppercase">
                BENEFICIOS QUE ACTIVAS DESDE EL PRIMER MINUTO
              </h2>
            </div>
            <div className="bg-gray-900 p-8 rounded-lg text-white">
              <ul className="space-y-4">
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-teal-400 mr-3 flex-shrink-0" />
                  <span>+320 HS DE CONTENIDO EN VIDEO</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-teal-400 mr-3 flex-shrink-0" />
                  <span>ACTUALIZACIONES GARANTIZADAS</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-teal-400 mr-3 flex-shrink-0" />
                  <span>PROTOCOLOS PROFESIONALES DESCARGABLES</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-teal-400 mr-3 flex-shrink-0" />
                  <span>20% DE DESCUENTO EN CERTIFICACIONES OFICIALES NSCA</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-teal-400 mr-3 flex-shrink-0" />
                  <span>ACCESO INMEDIATO E ILIMITADO</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Payment Methods */}
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 uppercase">
              CONTENIDO PROFESIONAL TU DECIDES COMO ACCEDER
            </h3>
            <div className="flex justify-center items-center space-x-8 mb-8">
              <div className="w-16 h-10 bg-gray-200 rounded flex items-center justify-center">
                <span className="text-xs font-bold">DISCOVER</span>
              </div>
              <div className="w-16 h-10 bg-blue-600 rounded flex items-center justify-center">
                <span className="text-xs font-bold text-white">JCB</span>
              </div>
              <div className="w-16 h-10 bg-red-600 rounded flex items-center justify-center">
                <span className="text-xs font-bold text-white">UnionPay</span>
              </div>
              <div className="w-16 h-10 bg-gray-800 rounded flex items-center justify-center">
                <span className="text-xs font-bold text-white">Mastercard</span>
              </div>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-teal-600 mb-8 uppercase">ACCEDE AHORA MISMO A NUESTRA COMUNIDAD</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Semestral Plan */}
            <Card className="border-2 border-teal-600 hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <h4 className="text-2xl font-bold text-gray-900 mb-2">Membresía</h4>
                <h5 className="text-xl font-bold text-gray-900 mb-4">Semestral</h5>
                <p className="text-gray-600 mb-6">Paga una vez, accede por 6 meses</p>
                <div className="mb-6">
                  <span className="text-lg text-gray-500 line-through">$180 usd</span>
                  <div className="text-4xl font-bold text-gray-900">
                    $150 <span className="text-lg">usd</span>
                  </div>
                </div>
                <Button className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 uppercase">
                  UNIRME
                </Button>
              </CardContent>
            </Card>

            {/* Lifetime Plan */}
            <Card className="border-2 border-teal-600 hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <h4 className="text-2xl font-bold text-gray-900 mb-2">Membresía</h4>
                <h5 className="text-xl font-bold text-gray-900 mb-4">De Por Vida</h5>
                <p className="text-gray-600 mb-6">Paga una vez, accede de por vida</p>
                <div className="mb-6">
                  <span className="text-lg text-gray-500 line-through">$550 usd</span>
                  <div className="text-4xl font-bold text-gray-900">
                    $499 <span className="text-lg">usd</span>
                  </div>
                </div>
                <Button className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 uppercase">
                  UNIRME
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Staff Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 uppercase tracking-wide">NUESTRO STAFF</h2>
            <div className="w-16 h-1 bg-teal-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              A la comunidad la hacemos entre todos, pero acá te presentamos a quienes trabajamos con enorme pasión cada
              día para que vos quieras seguir siendo parte.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Staff Member 1 */}
            <div className="text-center">
              <div className="w-48 h-72 mx-auto mb-4 rounded-lg overflow-hidden">
                <Image
                  src="/images/leandro-carbone.png"
                  alt="MSc. Leandro Carbone"
                  width={384}
                  height={512}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-teal-600 text-white px-4 py-2 rounded mb-4">
                <span className="font-bold">MSc. Leandro</span>
                <span className="ml-2">Carbone</span>
              </div>
              <div className="text-sm text-gray-700 space-y-1">
                <p>Licenciado en Actividad Física (USAL)</p>
                <p>Especialista en Fisiología del Ejercicio (UNLP)</p>
                <p>MSc. Strength and Conditioning (University of Greenwich)</p>
                <p>Docente Universidad del Salvador</p>
                <p>CSCS - NSCA</p>
                <p>CISSN - ISSN</p>
              </div>
            </div>

            {/* Staff Member 2 - Camila Torres */}
            <div className="text-center">
              <div className="w-48 h-72 mx-auto mb-4 rounded-lg overflow-hidden">
                <Image
                  src="/images/camila-torres.png"
                  alt="Lic. Camila Torres"
                  width={384}
                  height={512}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-teal-600 text-white px-4 py-2 rounded mb-4">
                <span className="font-bold">Lic. Camila</span>
                <span className="ml-2">Torres</span>
              </div>
              <div className="text-sm text-gray-700 space-y-1">
                <p>Licenciada en Kinesiología y Fisiatría (UBA)</p>
                <p>Especialista en rehabilitación deportiva</p>
                <p>Certificada en FMS - SFMA</p>
                <p>Formada en MAT McKenzie y Concepto Mulligan</p>
              </div>
            </div>

            {/* Staff Member 3 - Valentina Rubio */}
            <div className="text-center">
              <div className="w-48 h-72 mx-auto mb-4 rounded-lg overflow-hidden">
                <Image
                  src="/images/valentina-rubio.png"
                  alt="Lic. Valentina Rubio"
                  width={384}
                  height={512}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-teal-600 text-white px-4 py-2 rounded mb-4">
                <span className="font-bold">Lic. Valentina</span>
                <span className="ml-2">Rubio</span>
              </div>
              <div className="text-sm text-gray-700 space-y-1">
                <p>Licenciada en Educación Física (UNSAM)</p>
                <p>Profesora Nacional de Educación Física (ISEF)</p>
                <p>Especialista en entrenamiento funcional</p>
                <p>CSCS - NSCA</p>
              </div>
            </div>

            {/* Staff Member 4 */}
            <div className="text-center">
              <div className="w-48 h-72 mx-auto mb-4 rounded-lg overflow-hidden">
                <Image
                  src="/images/juan-hernandez.png"
                  alt="Juan Marcelo Hernandez"
                  width={384}
                  height={512}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-teal-600 text-white px-4 py-2 rounded mb-4">
                <span className="font-bold">Juan Marcelo</span>
                <span className="ml-2">Hernandez</span>
              </div>
              <div className="text-sm text-gray-700 space-y-1">
                <p>Licenciado en Alto Rendimiento Deportivo (UNLZ)</p>
                <p>Profesor nacional de educación física</p>
                <p>Preparador físico JJOO Rio 2016</p>
                <p>Preparador físico Preolímpico Panamá 2021</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 bg-gray-100 relative">
        <div className="absolute inset-0">
          <img
            src="/placeholder.svg?height=600&width=1200"
            alt="Mujer entrenando"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block bg-white px-6 py-3 rounded-lg mb-6">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 uppercase">
                CONTACTARME
                <br />
                <span className="bg-teal-600 text-white px-3 py-1 rounded">CON BIO TRAINING</span>
              </h2>
            </div>
          </div>

          <div className="bg-white/95 backdrop-blur-sm rounded-lg p-8 max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">¿QUERÉS CONTACTARTE CON NOSOTROS?</h3>
              <div className="w-16 h-1 bg-teal-600 mx-auto mb-4"></div>
              <p className="text-gray-700">
                Escribinos a{" "}
                <a href="mailto:info@biotraining.com" className="text-teal-600 hover:underline">
                  info@biotraining.com
                </a>{" "}
                en nuestras redes sociales o completando este formulario y a la brevedad te contactaremos.
              </p>
            </div>

            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Nombre"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="tel"
                  placeholder="Teléfono"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
                <input
                  type="text"
                  placeholder="Profesión"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
              </div>
              <input
                type="text"
                placeholder="País"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              />
              <textarea
                placeholder="Mensaje"
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              ></textarea>
              <Button
                type="submit"
                className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 uppercase tracking-wide"
              >
                📧 ENVIAR
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <Image
                src="/images/bio-training-logo.png"
                alt="Bio Training Logo"
                width={40}
                height={40}
                className="w-10 h-10"
              />
              <span className="text-white font-bold text-xl">BIO TRAINING</span>
            </div>
            <div className="text-gray-400 text-sm">© 2025 Comunidad Bio Training.</div>
          </div>
        </div>
      </footer>
    </div>
  )
}
