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
                      <Link to="/who-we-are">Who we are</Link>
                      <br></br>
                      <Link to="/history">History</Link>
                      <br></br>
                      <Link to="/institutional-pillars">
                        Institutional Pillars
                      </Link>
                      <br></br>
                    </Sidebar.Collapse>

                    <Sidebar.Collapse icon={HiShoppingBag} label="Busisness">
                      <Sidebar.Collapse
                        href="/who-we-are"
                        label="Operating Lease"
                      >
                        <Link to={"/managed-funds"}>
                          <Sidebar.Item>Managed Funds</Sidebar.Item>
                        </Link>
                        <Link to={"/product-description"}>
                          <Sidebar.Item>Product Description</Sidebar.Item>
                        </Link>
                        <Link to="/advantages">
                          <Sidebar.Item>Advantages</Sidebar.Item>
                        </Link>
                      </Sidebar.Collapse>
                      <Sidebar.Collapse
                        href="#"
                        label="Infrastructure Private Equity"
                      >
                        <Link to="/infrastructure-private-equity/managed-funds">
                          <Sidebar.Item>Managed Funds</Sidebar.Item>
                        </Link>
                      </Sidebar.Collapse>
                    </Sidebar.Collapse>
                    <Sidebar.Collapse icon={HiCollection} label="Team">
                      <Link to={"/staff"}>
                        <Sidebar.Item href="/staff">Staff</Sidebar.Item>
                      </Link>
                      <Link to={"/investment-commitee"}>
                        <Sidebar.Item href="/investment-commitee">
                          Investment Committee
                        </Sidebar.Item>
                      </Link>
                      <Link to={"/board-of-directors"}>
                        <Sidebar.Item href="/board-of-directors">
                          Board of Directors
                        </Sidebar.Item>
                      </Link>
                    </Sidebar.Collapse>
                    <Link to={"/news"}>
                      <Sidebar.Item icon={HiCollection} href="/news">
                        News and Insights
                      </Sidebar.Item>
                    </Link>
                    <Sidebar.Item icon={HiInformationCircle}>
                      <Link to="/contacto-us">Contact Us</Link>
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
