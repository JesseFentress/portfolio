import { Box, Heading, Section, Text } from "@radix-ui/themes";
import { LegacyRef, useEffect, useRef, useState } from "react";

export const About: React.FC = () => {
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const ref: LegacyRef<HTMLDivElement> = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.8, rootMargin: "0px 0px -10% 0px" }
        );

        if (ref.current) observer.observe(ref.current);

        if (isVisible) {
            document.getElementById("about")?.classList.add("fade-in");
        }

        return () => {
            if (ref.current) observer.unobserve(ref.current);
        };
    }, [ref, isVisible]);

    return (
        <Section ref={ref} id="about">
            <Box className="w-fit mb-4">
                <Heading as="h2">About Me</Heading>
                <Box
                    className="w-1/4 border-b-4"
                    style={{ borderColor: "var(--iris-a10)" }}
                ></Box>
            </Box>
            <Text as="p" color="gray" mb="3">
                I first discovered my passion for coding in college, starting
                with basic websites and quickly diving into full-stack
                development. Since then, I’ve specialized in building robust web
                and desktop applications, combining back-end functionality with
                intuitive, responsive front-end design. As a full stack
                developer, I love crafting reliable, scalable solutions that are
                built to adapt and grow.
            </Text>
            <Text as="p" color="gray">
                Outside of work, I’m all about the outdoors. Whether it's
                snowboarding down a mountain or exploring a new hiking trail, I
                find inspiration and balance in nature. I love spending time in
                environments that fuel my passion for adventure and help me
                recharge, bringing fresh energy and focus to my development
                work.
            </Text>
        </Section>
    );
};
