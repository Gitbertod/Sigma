"use client";
import { RxHamburgerMenu } from "react-icons/rx";
import { Button, Drawer, Sidebar } from "flowbite-react";

import { useState } from "react";
import styles from "./DrawerComponent.module.css";
import { Link } from "react-router-dom";
import {
  HiCollection,
  HiInformationCircle,
  HiShoppingBag,
  HiUsers,
} from "react-icons/hi";

export function DrawerComponent() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);

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
                <Sidebar.Items>
                  <Sidebar.ItemGroup>
                    <Sidebar.Collapse icon={HiUsers} label="About Us">
                      {/* <Link to="/nosotros">Who we are</Link>
                      <Link to="/nosotros">History</Link>
                      <Link to="/nosotros">Institutional Pillars</Link> */}
                      <Link to="/who-we-are">
                        <Sidebar.Item href="/who-we-are">
                          Who we are
                        </Sidebar.Item>
                      </Link>
                      <Sidebar.Item href="#">History</Sidebar.Item>
                      <Sidebar.Item href="#">
                        Institutional Pillars
                      </Sidebar.Item>
                    </Sidebar.Collapse>

                    <Sidebar.Collapse icon={HiShoppingBag} label="Busisness">
                      <Sidebar.Collapse
                        href="/who-we-are"
                        label="Operating Lease"
                      >
                        <Sidebar.Item href="#">Managed Funds</Sidebar.Item>
                        <Sidebar.Item href="#">
                          Product Description
                        </Sidebar.Item>
                        <Sidebar.Item href="#">Advantages</Sidebar.Item>
                      </Sidebar.Collapse>
                      <Sidebar.Collapse
                        href="#"
                        label="Infrastructure Private Equity"
                      >
                        <Sidebar.Item href="#">Managed Funds</Sidebar.Item>
                      </Sidebar.Collapse>
                    </Sidebar.Collapse>
                    <Sidebar.Collapse icon={HiCollection} label="Team">
                      <Sidebar.Item href="/who-we-are">Staff</Sidebar.Item>
                      <Sidebar.Item href="/who-we-are">
                        Investment Committee
                      </Sidebar.Item>
                      <Sidebar.Item href="/who-we-are">
                        Board of Directors
                      </Sidebar.Item>
                    </Sidebar.Collapse>
                    <Sidebar.Item icon={HiCollection}>
                      <Link to="/voyant365">News and Insights</Link>
                    </Sidebar.Item>
                    <Sidebar.Item icon={HiInformationCircle}>
                      <Link to="/contacto">Contact Us</Link>
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
