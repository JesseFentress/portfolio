import { useEffect, useState } from "react";
import { BreadCrumbItem } from "./BreadCrumbItem";

export const NavBreadCrumb: React.FC = () => {
    const [activeSection, setActiveSection] = useState<string>("about"); // Only if using Context

    useEffect(() => {
        const sections = document.querySelectorAll("section");
        const observerOptions = {
            rootMargin: "0px 0px -30% 0px",
            threshold: 0.8,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        }, observerOptions);

        sections.forEach((section) => observer.observe(section));

        return () => {
            sections.forEach((section) => observer.unobserve(section));
        };
    }, [setActiveSection]);

    return (
        <nav className="hidden lg:block mt-6">
            <ul>
                <BreadCrumbItem
                    label="about"
                    section="#about"
                    active={activeSection == "about" ? true : false}
                />
                <BreadCrumbItem
                    label="experience"
                    section="#experience"
                    active={activeSection == "experience" ? true : false}
                />
                <BreadCrumbItem
                    label="contact"
                    section="#contact"
                    active={activeSection == "contact" ? true : false}
                />
            </ul>
        </nav>
    );
};
