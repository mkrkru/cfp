import { useState } from "react";

function getRandomColor() {
    let res = '#';
    for (let i = 0; i < 6; i++) res += '0123456789ABCDEF'[Math.floor(Math.random() * 16)];
    return res;
}

export default function Title() {
    const [color, setColor] = useState(getRandomColor());
    setInterval(() => {
        setColor(getRandomColor());
    }, 1000);

    return <pre style={{ color: color }}>{
`███╗  ██╗███████╗████████╗   █████╗ ██████╗ ██████╗
████╗ ██║██╔════╝╚══██╔══╝  ██╔══██╗██╔══██╗██╔══██╗
██╔██╗██║█████╗     ██║     ███████║██████╔╝██████╔╝
██║╚████║██╔══╝     ██║     ██╔══██║██╔═══╝ ██╔═══╝
██║ ╚███║██║        ██║     ██║  ██║██║     ██║
╚═╝  ╚══╝╚═╝        ╚═╝     ╚═╝  ╚═╝╚═╝     ╚═╝`
    }</pre>;
}