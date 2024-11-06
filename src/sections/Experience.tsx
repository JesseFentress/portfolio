import { Button, Link, Section } from "@radix-ui/themes";
import { ExperienceList } from "../components/ExperienceList";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";

const employmentHistory: any = [
    {
        startDate: "Apr 2023",
        endDate: "Oct 2024",
        position: "Full-Stack Engineer",
        employer: "JC Consulting",
        description:
            "Full-stack development using Django, Next.js, and React. Collaborated closely with cross-functional teams to build and maintain proprietary websites, search engines, and analytical tools for JC clients and staff. Responsibilities included managing AWS services to ensure a scalable and reliable infrastructure, as well as delivering custom projects tailored to meet specific client requirements.",
        tags: [
            "JavaScript",
            "React",
            "jQuery",
            "Django",
            "Python",
            "Elasticsearch",
            "PostgreSQL",
            "AWS",
        ],
    },
    {
        startDate: "Aug 2022",
        endDate: "Feb 2023",
        position: "Software Developer",
        employer: "Penn State University",
        description:
            "Developed a desktop application for Penn State Residence Life and Housing and Food Services to automate dorm assignments based on student priority metrics. Built with Electron, the application streamlined the assignment process and improved efficiency. Collaboration with the RLHFS team took place in an Agile environment, with an emphasis on regular client-developer interactions to ensure the application aligned with specific requirements.",
        tags: ["JavaScript", "Electron"],
    },
];

export const Experience: React.FC<any> = () => {
    return (
        <Section id="experience">
            <ExperienceList employmentHistory={employmentHistory} />
            <Link
                href="/JesseFentress-Resume.pdf"
                target="_blank"
                color="gray"
                underline="none"
                className="block mt-8 md:mt-16 p-4 w"
            >
                View Full Resume
                <span className="inline-block slide-up">
                    <ArrowTopRightIcon />
                </span>
            </Link>
        </Section>
    );
};
