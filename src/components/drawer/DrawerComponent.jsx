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
      <div className="flex  items-center justify-center">
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
              <LanguageSelector />
                <Sidebar.Items>
                  <Sidebar.ItemGroup>
                    <Sidebar.Collapse icon={HiUsers} label={t("navbar.About Us")}>
                      <Link to="/who-we-are">{t("navbar.Who we are")}</Link>
                      <br></br>
                      <Link to="/history">{t("navbar.History")}</Link>
                      <br></br>
                      <Link to="/institutional-pillars">{t("navbar.Institutional Pillars")}</Link>
                      <br></br>
                      <Link target="_blank" to="http://www.smv.gob.pe/Frm_HechosDeImportancia.aspx?data=BEB75436DC71EE607D46589474D68761351A8157801DC3AC70032EF5C7E5A670732B3C77E6">{t("navbar.Regulatory information")}</Link>
                    </Sidebar.Collapse>

                    <Sidebar.Collapse icon={HiShoppingBag} label={t("navbar.Business")}>
                      <Sidebar.Collapse
                        href="/who-we-are"
                        label={t("navbar.Operating Lease")}
                      >
                        <Link to={"/managed-funds"}>
                          <Sidebar.Item>{t("OperatingLease.OperatingLeaseManagedFunds")}</Sidebar.Item>
                        </Link>
                        <Link to={"/product-description"}>
                          <Sidebar.Item>{t("OperatingLease.OperatingLeaseProductDescription")}</Sidebar.Item>
                        </Link>
                        <Link to="/advantages">
                          <Sidebar.Item>{t("OperatingLease.OperatingLeaseAdvantages")}</Sidebar.Item>
                        </Link>
                      </Sidebar.Collapse>
                      <Sidebar.Collapse
                        href="#"
                        label={t("navbar.Infrastructure Private Equity")}
                      >
                        <Link to="/infrastructure-private-equity/managed-funds">
                          <Sidebar.Item>Managed Funds</Sidebar.Item>
                        </Link>
                      </Sidebar.Collapse>
                    </Sidebar.Collapse>
                    <Sidebar.Collapse icon={HiCollection} label={t("navbar.Team")}>
                      <Link to={"https://www.smv.gob.pe/SIMV/Frm_LisDatosGenerales?data=1526C9A15B544F0B1C7C30E69D8118B7F01CEC39E0"}>
                        <Sidebar.Item href="https://www.smv.gob.pe/SIMV/Frm_LisDatosGenerales?data=1526C9A15B544F0B1C7C30E69D8118B7F01CEC39E0">{t("navbar.Regulatory information")}</Sidebar.Item>
                      </Link>
                      {/* <Link to={"/investment-committee"}>
                        <Sidebar.Item href="/investment-commitee">
                        {t("navbar.Investment Commitee")}
                        </Sidebar.Item>
                      </Link> */}
                      {/* <Link to={"/board-of-directors"}>
                        <Sidebar.Item href="/board-of-directors">
                        {t("navbar.Board of Directors")}
                        </Sidebar.Item>
                      </Link> */}
                    </Sidebar.Collapse>
                      <Sidebar.Item icon={HiCollection} >
                    <Link to={"/news"}>
                    {t("navbar.News")}
                    </Link>
                      </Sidebar.Item>
                    <Sidebar.Item icon={HiInformationCircle}>
                      <Link to="/contact-us">{t("navbar.Contact Us")}</Link>
                    </Sidebar.Item>
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
