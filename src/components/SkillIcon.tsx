import { Card } from "@radix-ui/themes";

type IconProps = {
    key: string,
    imageSrc: string
}


export const SkillIcon: React.FC<IconProps> = ({imageSrc}) => {

    function getRandomInt(min: number, max: number) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
    const x = ['animate-c', 'animate-b', 'animate-a', 'animate-d', 'animate-e', 'animate-f', 'animate-g', 'animate-h', 'animate-i']
    return (
        <Card 
            className={`fade-top w-fit bg-stone-900 ${x[getRandomInt(0, 3)]}`}
            // style={hover()}
        >
            <img
                className='h-20 min-h-20'
                src={imageSrc}
                
            />
        </Card>
    );
}