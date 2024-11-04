import { Card, Grid, Heading, Section } from "@radix-ui/themes";
import django from '../assets/django.svg';
import docker from '../assets/docker.svg';
import elastic from '../assets/elastic.svg';
import java from '../assets/java.svg';
import javascript from '../assets/javascript.svg';
import nextjs from '../assets/nextjs.svg';
import postgres from '../assets/postgres.svg';
import python from '../assets/python.svg';
import react from '../assets/react.svg';
import typescript from '../assets/typescript.svg';
import { useCallback, useEffect, useRef, useState } from "react";
import { SkillIcon } from "../components/SkillIcon";

const logos = {
    django: django,
    docker: docker,
    elastic: elastic,
    java: java,
    javascript: javascript,
    nextjs: nextjs,
    postgres: postgres,
    python: python,
    react: react,
    typescript: typescript

}

export const Skills: React.FC<any> = ({ onScrollTo }) => {
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const ref: any = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            setIsVisible(entry.isIntersecting);
        }, {threshold: 0.8, rootMargin: "0px 0px -10% 0px"});

        if (ref.current) observer.observe(ref.current);

        if (isVisible) {
            onScrollReach();
        }

        return () => {
            if (ref.current) observer.unobserve(ref.current);
        };

    }, [ref, isVisible]);

    const onScrollReach = useCallback(() => {
        if (document.querySelectorAll(".fade-top-in").length == 0) {
            const ls = document.querySelectorAll(".fade-top");
        
            let timeout = 0;
            ls.forEach((item) => {
                timeout = timeout + 200;
                setTimeout(() =>  item.classList.add('fade-top-in'), timeout);
            });
        }
    }, [])

    return (
        <Section ref={ref} id="skills" className="mb-36">
            <Heading as="h2" size="8">Some tools I like to use</Heading>
            <Grid
                className="w-fit m-auto"
                columns={{
                    initial: "5",
                    xs: "5"
                }}
                gap="2"
                
            >
                {
                    Object.entries(logos).map(([key, value]) => (
                        <SkillIcon key={key} imageSrc={value} />
                    ))
                }
            </Grid>
        </Section>
    );
}