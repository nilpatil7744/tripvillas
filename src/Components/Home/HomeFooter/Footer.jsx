import React, { useState } from "react";
import { Tabs, Tab } from "@material-ui/core";
import style from "./Footer.module.css";
import Data from "./data.json";
export const Footer = () => {
  const [data] = useState(Data);
  const [value, setValue] = useState(0);
  const handleTabs = (e, val) => {
    console.log(val);
    setValue(val);
  };
  return (
    <div className={style.footer_container}>
      <h2>Holiday Homes Across The Globe</h2>
      <Tabs value={value} onChange={handleTabs} className={style.footer_tab}>
        <Tab label="ASIA" />
        <Tab label="EUROPE" />
        <Tab label="NORTH AMERICA" />
        <Tab label="SOUTH AMERICA" />
        <Tab label="AFRICA" />
        <Tab label="OCEANIA" />
      </Tabs>
      <TabelPanel value={value} index={0}>
        {data.asia.map((item) => {
          return (
            <div className={style.display}>
              <div className={style.footer_list}>
                <div style={{ marginBottom: 10 }}>
                  <a href="#">
                    {item.title}
                    <br />
                    <span>{item.subtitle}</span>
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </TabelPanel>
      <TabelPanel value={value} index={1}>
        {data.europe.map((item) => {
          return (
            <div className={style.display}>
              <div className={style.footer_list}>
                <div style={{ marginBottom: 10 }}>
                  <a href="#">
                    {item.title}
                    <br />
                    <span>{item.subtitle}</span>
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </TabelPanel>
      <TabelPanel value={value} index={2}>
        {data.northamerica.map((item) => {
          return (
            <div className={style.display}>
              <div className={style.footer_list}>
                <div style={{ marginBottom: 10 }}>
                  <a href="#">
                    {item.title}
                    <br />
                    <span>{item.subtitle}</span>
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </TabelPanel>
      <TabelPanel value={value} index={3}>
        {data.southamerica.map((item) => {
          return (
            <div className={style.display}>
              <div className={style.footer_list}>
                <div style={{ marginBottom: 10 }}>
                  <a href="#">
                    {item.title}
                    <br />
                    <span>{item.subtitle}</span>
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </TabelPanel>
      <TabelPanel value={value} index={4}>
        {data.africa.map((item) => {
          return (
            <div className={style.display}>
              <div className={style.footer_list}>
                <div style={{ marginBottom: 10 }}>
                  <a href="#">
                    {item.title}
                    <br />
                    <span>{item.subtitle}</span>
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </TabelPanel>
      <TabelPanel value={value} index={5}>
        {data.oceania.map((item) => {
          return (
            <div className={style.display}>
              <div className={style.footer_list}>
                <div style={{ marginBottom: 10 }}>
                  <a href="#">
                    {item.title}
                    <br />
                    <span>{item.subtitle}</span>
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </TabelPanel>
    </div>
  );
};

function TabelPanel(props) {
  const { children, value, index } = props;
  return <div>{value === index && <p>{children}</p>}</div>;
}
