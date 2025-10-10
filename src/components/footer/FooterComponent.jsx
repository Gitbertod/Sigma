import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export function FooterComponent() {
  const { t } = useTranslation();

  return (
    <footer className="bg-pink-50 dark:bg-gray-900 flex">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8 mt-auto">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link
            to="/"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <img
              src="/SigmaLogo.svg"
              className="h-8"
              alt="Sigma Logotipo"
            />
          </Link>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-400 sm:mb-0 dark:text-gray-400">
            {/* <li>
              <a href="/staff" className="hover:underline me-4 md:me-6">
                {t("footer.Staff")}
              </a>
            </li> */}
            {/* <li>
              <a href="/investment-commitee" className="hover:underline me-4 md:me-6">
                {t("footer.Investment Committee")}
              </a>
            </li> */}
            {/* <li>
              <a href="/board-of-directors" className="hover:underline me-4 md:me-6">
                {t("footer.Board of Directors")}
              </a>
            </li> */}
            <li>
              <a href="/news" className="hover:underline me-4 md:me-6">
                {t("footer.News")}
              </a>
            </li>
            <li>
              <a href="/contacto" className="hover:underline">
                {t("footer.Contact Us")}
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-400 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-400 sm:text-center dark:text-gray-400">
          © 2024{" "}
          <Link to="/" className="hover:underline">
            {t("footer.SIGMA")}
          </Link>
          . {t("footer.All Rights Reserved")}
        </span>
      </div>
    </footer>
  );
}
