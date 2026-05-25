"use client";
import { RxHamburgerMenu } from "react-icons/rx";
import { Button, Drawer, Sidebar } from "flowbite-react";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import styles from "./DrawerComponent.module.css";
import { Link } from "react-router-dom";
import {
  HiCollection,
  HiInformationCircle,
  HiNewspaper,
  HiShoppingBag,
  HiUsers,
} from "react-icons/hi";
import LanguageSelector from "../languageSelector/LanguageSelector";

export function DrawerComponent() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);
  const { t } = useTranslation();

  return (
    <>
      <div className="flex items-center justify-center">
        <Button onClick={() => setIsOpen(true)} className="bg-pink-900 p-0">
          <RxHamburgerMenu className={styles.icon} />
        </Button>
      </div>
      <Drawer open={isOpen} onClose={handleClose} position="right">
        <Drawer.Header
          title=""
          titleIcon={() => (
            <img
              src="/SigmaLogo.svg"
              className={styles.logoVoyant}
              alt="Sigma Logo"
            />
          )}
        />
        <Drawer.Items>
          <Sidebar
            aria-label="Sidebar with multi-level dropdown example"
            className="[&>div]:bg-transparent [&>div]:p-0"
          >
            <div className="flex h-full flex-col justify-between py-2">
              <div>
                <div className="mb-3 px-2">
                  <LanguageSelector />
                </div>
                <Sidebar.Items>
                  <Sidebar.ItemGroup>
                    <Sidebar.Collapse icon={HiUsers} label={t("navbar.About Us")}>
                      <Link to="/who-we-are" onClick={handleClose}>
                        <Sidebar.Item>{t("navbar.Who we are")}</Sidebar.Item>
                      </Link>
                      <Link to="/history" onClick={handleClose}>
                        <Sidebar.Item>{t("navbar.History")}</Sidebar.Item>
                      </Link>
                      <Link to="/institutional-pillars" onClick={handleClose}>
                        <Sidebar.Item>{t("navbar.Institutional Pillars")}</Sidebar.Item>
                      </Link>
                      <Link to="/investment-committee" onClick={handleClose}>
                        <Sidebar.Item>{t("navbar.Investment Commitee")}</Sidebar.Item>
                      </Link>
                      <a
                        href="http://www.smv.gob.pe/Frm_HechosDeImportancia.aspx?data=BEB75436DC71EE607D46589474D68761351A8157801DC3AC70032EF5C7E5A670732B3C77E6"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={handleClose}
                      >
                        <Sidebar.Item>{t("navbar.Regulatory information")}</Sidebar.Item>
                      </a>
                    </Sidebar.Collapse>

                    <Sidebar.Collapse icon={HiShoppingBag} label={t("navbar.Business")}>
                      <Link to="/operating-lease" onClick={handleClose}>
                        <Sidebar.Item>{t("navbar.Operating Lease")}</Sidebar.Item>
                      </Link>
                      <Link to="/infrastructure-private-equity/managed-funds" onClick={handleClose}>
                        <Sidebar.Item>{t("navbar.Infrastructure Private Equity")}</Sidebar.Item>
                      </Link>
                    </Sidebar.Collapse>

                    <Sidebar.Collapse icon={HiCollection} label={t("navbar.Team")}>
                      <a
                        href="https://www.smv.gob.pe/SIMV/Frm_LisDatosGenerales?data=1526C9A15B544F0B1C7C30E69D8118B7F01CEC39E0"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={handleClose}
                      >
                        <Sidebar.Item>{t("navbar.Regulatory information")}</Sidebar.Item>
                      </a>
                    </Sidebar.Collapse>

                    <Link to="/news" onClick={handleClose}>
                      <Sidebar.Item icon={HiNewspaper}>{t("navbar.News")}</Sidebar.Item>
                    </Link>

                    <Link to="/contact-us" onClick={handleClose}>
                      <Sidebar.Item icon={HiInformationCircle}>{t("navbar.Contact Us")}</Sidebar.Item>
                    </Link>
                  </Sidebar.ItemGroup>
                </Sidebar.Items>
              </div>
            </div>
          </Sidebar>
        </Drawer.Items>
      </Drawer>
    </>
  );
}
