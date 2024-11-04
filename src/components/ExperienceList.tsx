import { Badge, Box, Flex, Grid, Heading, Text } from "@radix-ui/themes";
import { useEffect } from "react";

type Employment = {
    startDate: string,
    endDate?: string,
    position: string,
    employer: string,
    description: string,
    tags: string[]
}

type EmploymentList = {
    employmentHistory: Employment[]
}

export const ExperienceItem: React.FC<Employment> = ({ startDate, endDate, position, employer, description, tags }) => {
    return (
        <li className="employment-item">
            <Box className="rounded">
                <Grid
                    columns={{
                        initial: "1",
                        md: "10rem auto"
                    }}
                    gap={{
                        initial: "1",
                        md: "8"
                    }}
                >
                    <Text color="gray" className="uppercase">
                        {startDate} - {endDate ? endDate : "present"}
                    </Text>
                    <Box>
                        <Heading  className="employer" as="h3" size="4" weight="medium">
                            <Text>{ position }</Text>
                            <Text className="px-2">·</Text>
                            <Text>{ employer }</Text>
                        </Heading>
                        <Text size="1" color="gray">{ description }</Text>
                        <Flex gap="2" wrap="wrap" className="mt-3">
                            {
                                tags.map((item, idx) => (
                                    <Badge key={idx}>{ item }</Badge>
                                ))
                            }
                        </Flex>
                    </Box>
                </Grid>
            </Box>
        </li>
    );
}


export const ExperienceList: React.FC<EmploymentList> = ({ employmentHistory }) => {
    
    return (
        <ol>
            {
                employmentHistory.map((item, idx) => (
                    <ExperienceItem 
                        key={idx}
                        startDate={item.startDate} 
                        endDate={item.endDate}
                        position={item.position}
                        employer={item.employer}
                        description={item.description}
                        tags={item.tags}
                    />
                ))
            }
        </ol>
    );
}