import { useEffect, useState } from "react";
import { BreadCrumbItem } from "./BreacCrumbItem";

export const NavBreadCrumb: React.FC<any> = () => {
    const [ activeSection, setActiveSection ] = useState<string>('about'); // Only if using Context

    useEffect(() => {
      const sections = document.querySelectorAll('section');
      const observerOptions = {
        rootMargin: '0px 0px -30% 0px', // triggers when 30% of section is visible
        threshold: 0.8, // 25% of the section should be visible to be considered "active"
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
        <nav className="hidden lg:block">
            <ul>
                <BreadCrumbItem label="about" section="#about" active={activeSection == 'about' ? true : false}/>
                <BreadCrumbItem label="experience" section="#experience" active={activeSection == 'experience' ? true : false} />
                <BreadCrumbItem label="skills" section="#skills" active={activeSection == 'skills' ? true : false} />
                <BreadCrumbItem label="contact" section="#contact" active={activeSection == 'contact' ? true : false} />
            </ul>
        </nav>
    );
}