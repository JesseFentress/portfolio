import { Link, Section } from "@radix-ui/themes";
import { ExperienceList } from "../components/ExperienceList";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import { Employment } from "../types";
import employmentData from "../data/employment.json";

const employmentHistory: Employment[] = employmentData;

export const Experience: React.FC = () => {
    return (
        <Section id="experience">
            <ExperienceList employmentHistory={employmentHistory} />
            <Link
                href="/JesseFentress-Resume.pdf"
                target="_blank"
                color="gray"
                underline="none"
                id="view-resume"
                className="block mt-8 md:mt-16 p-4 text-white w-fit"
            >
                View Full Resume
                <span className="inline-block slide-up">
                    <ArrowTopRightIcon />
                </span>
            </Link>
        </Section>
    );
};
