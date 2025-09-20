export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-800 text-white p-4 text-center">
      <p>&copy; {currentYear} Recetop. Todos los derechos reservados.</p>
    </footer>
  );
}