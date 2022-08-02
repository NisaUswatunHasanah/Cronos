import React, { useEffect, useState } from "react";
import {  useNavigate } from "react-router-dom";
import { Menu } from "antd";
import { getFeatures } from "../services/GetRead"

const SideBar = () => {
    const [listFeatures,setListFeatures] = useState([]);
    const [message,setMessage]= useState("");

    useEffect(()=>{
        getFeatures(setListFeatures);
        setTimeout(()=>{
            setMessage("");
        },3000);
    },[message]);
    const navigate = useNavigate();

  return (
    <div>
      <Menu>
        {listFeatures.filter((syafak) => syafak.id === 1).map((syafak, index) => (
            <Menu.Item onClick={() => { navigate("/purchasing");}}>
              {syafak.nama}
            </Menu.Item>
        ))}
        {listFeatures.filter((syafak) => syafak.id === 2).map((syafak, index) => (
            <Menu.Item onClick={() => { navigate("/masterData");}}>
              {syafak.nama}
            </Menu.Item>
        ))}
        {listFeatures.filter((syafak) => syafak.id === 3).map((syafak, index) => (
            <Menu.Item onClick={() => { navigate("/purchasing");}}>
              {syafak.nama}
            </Menu.Item>
        ))}
        {listFeatures.filter((syafak) => syafak.id === 1).map((syafak, index) => (
            <Menu.Item onClick={() => { navigate("/purchasing");}}>
              {syafak.nama}
            </Menu.Item>
        ))}
        {listFeatures.filter((syafak) => syafak.id === 4).map((syafak, index) => (
            <Menu.Item onClick={() => { navigate("/purchasing");}}>
              {syafak.nama}
            </Menu.Item>
        ))}
        {listFeatures.filter((syafak) => syafak.id === 5).map((syafak, index) => (
            <Menu.Item onClick={() => { navigate("/purchasing");}}>
              {syafak.nama}
            </Menu.Item>
        ))}
        {listFeatures.filter((syafak) => syafak.id === 6).map((syafak, index) => (
            <Menu.Item onClick={() => { navigate("/purchasing");}}>
              {syafak.nama}
            </Menu.Item>
        ))}
        {listFeatures.filter((syafak) => syafak.id === 7).map((syafak, index) => (
            <Menu.Item onClick={() => { navigate("/purchasing");}}>
              {syafak.nama}
            </Menu.Item>
        ))}
        {listFeatures.filter((syafak) => syafak.id === 8).map((syafak, index) => (
            <Menu.Item onClick={() => { navigate("/purchasing");}}>
              {syafak.nama}
            </Menu.Item>
        ))}
        {listFeatures.filter((syafak) => syafak.id === 9).map((syafak, index) => (
            <Menu.Item onClick={() => { navigate("/purchasing");}}>
              {syafak.nama}
            </Menu.Item>
        ))}
        {listFeatures.filter((syafak) => syafak.id === 10).map((syafak, index) => (
            <Menu.Item onClick={() => { navigate("/purchasing");}}>
              {syafak.nama}
            </Menu.Item>
        ))}
        {listFeatures.filter((syafak) => syafak.id === 11).map((syafak, index) => (
            <Menu.Item onClick={() => { navigate("/purchasing");}}>
              {syafak.nama}
            </Menu.Item>
        ))}
        {listFeatures.filter((syafak) => syafak.id === 12).map((syafak, index) => (
            <Menu.Item onClick={() => { navigate("/purchasing");}}>
              {syafak.nama}
            </Menu.Item>
        ))}
        {listFeatures.filter((syafak) => syafak.id === 13).map((syafak, index) => (
            <Menu.Item onClick={() => { navigate("/purchasing");}}>
              {syafak.nama}
            </Menu.Item>
        ))}
      </Menu>
      ;
    </div>
  );
};

export default SideBar;
