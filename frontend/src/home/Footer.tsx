import { FaFacebookSquare, FaTwitter, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-indigo-700 text-white py-8">
      <div className="container mx-auto text-center">
        <div className="flex flex-col items-center">
          <p className="text-xl font-bold">Contato:</p>
          <p className="mt-2 text-lg">Telefone: (84) 1234-5678</p>
          <p>Email: contato@imd.ufrn.br</p>
          <p>Endereço: Av. Senador Salgado Filho, s/n - Lagoa Nova, Natal/RN</p>
        </div>
        <div className="mt-4">
          <ul className="flex justify-center space-x-4">
            <li>
              <a
                href="https://www.facebook.com/freireduc"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-indigo-200 transition duration-300"
              >
                <FaFacebookSquare size={32} />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/freireduc"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-indigo-200 transition duration-300"
              >
                <FaTwitter size={32} />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/freireduc"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-indigo-200 transition duration-300"
              >
                <FaInstagram size={32} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
