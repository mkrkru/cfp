import { useState } from "react";
import { colors } from "../../../config";

function getRandomColor() {
    let res = '#';
    for (let i = 0; i < 6; i++) res += '0123456789ABCDEF'[Math.floor(Math.random() * 16)];
    return res;
}

export function Title() {
    const [ color, setColor ] = useState(colors.lighter);
    setInterval(() => setColor(getRandomColor()), 4000);

    return <pre style={{
        color: color,
        transition: "all .3s ease",
        marginBottom: "20vh",
        fontSize: "12px"
    }}>{
` █████╗ ██████╗ ██╗   ██╗██████╗ ████████╗ █████╗ 
██╔══██╗██╔══██╗╚██╗ ██╔╝██╔══██╗╚══██╔══╝██╔══██╗
██║  ╚═╝██████╔╝ ╚████╔╝ ██████╔╝   ██║   ██║  ██║
██║  ██╗██╔══██╗  ╚██╔╝  ██╔═══╝    ██║   ██║  ██║
╚█████╔╝██║  ██║   ██║   ██║        ██║   ╚█████╔╝
 ╚════╝ ╚═╝  ╚═╝   ╚═╝   ╚═╝        ╚═╝    ╚════╝ 

  ███████╗██████╗ ██╗   ██╗██╗███╗  ██╗ ██████╗ 
  ██╔════╝██╔══██╗╚██╗ ██╔╝██║████╗ ██║██╔════╝ 
  █████╗  ██████╔╝ ╚████╔╝ ██║██╔██╗██║██║  ██╗ 
  ██╔══╝  ██╔══██╗  ╚██╔╝  ██║██║╚████║██║  ╚██╗
  ██║     ██║  ██║   ██║   ██║██║ ╚███║╚██████╔╝
  ╚═╝     ╚═╝  ╚═╝   ╚═╝   ╚═╝╚═╝  ╚══╝ ╚═════╝ 

        ██████╗  █████╗ ███╗  ██╗ ██████╗
        ██╔══██╗██╔══██╗████╗ ██║██╔════╝
        ██████╔╝███████║██╔██╗██║╚█████╗ 
        ██╔═══╝ ██╔══██║██║╚████║ ╚═══██╗
        ██║     ██║  ██║██║ ╚███║██████╔╝
        ╚═╝     ╚═╝  ╚═╝╚═╝  ╚══╝╚═════╝ `
    }</pre>;
}