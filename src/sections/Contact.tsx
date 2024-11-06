import { Grid, Heading, Section, Strong, Text } from "@radix-ui/themes";
import { ContactForm } from "../components/ContactForm";

export const ContactSection: React.FC<any> = () => {
    return (
        <Section id="contact">
            <Heading as="h2" size="9" className="pb-9" color="iris">
                Reach out...
            </Heading>
            <Grid columns={{ initial: "1", lg: "auto 1fr" }} gap="5">
                <Text color="gray" className="pb-6 hidden sm:block" size={"3"}>
                    Feel free to get in touch via{" "}
                    <span>
                        <Strong className="whitespace-nowrap text-white">
                            one of the links
                        </Strong>
                        ...
                    </span>{" "}
                    <br></br>or leave me a message!
                </Text>
                <ContactForm />
            </Grid>
        </Section>
    );
};
