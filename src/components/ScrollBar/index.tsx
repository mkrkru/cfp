import { useState } from "react";

export function ScrollBar() {
    const [scrolled, setScrolled] = useState("");

    window.addEventListener("scroll", () => {
        const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
        setScrolled(`${scrollTop / (scrollHeight - clientHeight) * 100}%`);
    });

    return <div style={{
        backgroundColor: "#f8bbd0",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
        height: "100vw",
        position: "fixed",
        top: 0,
        right: 0,
        width: "5px",
        zIndex: 99
    }}>
        <div style={{
            height: "5px",
            background: "#e91e63",
            width: scrolled
        }} />
    </div>;
}