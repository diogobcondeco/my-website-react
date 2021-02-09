import React, {useEffect, useState} from 'react';
import './Greetings.scss';
import detectBrowserLanguage from 'detect-browser-language';

type typeOfGreetings = {
    message: string;
    language: string;
}

const Greetings: React.FC = () => {
    const [greeting, setGreeting] = useState<typeOfGreetings>({
        message: "Good Morning",
        language: "en-US"
    });

    // const [greeting, setGreeting] = useState<typeOfGreetings>();

    useEffect(() => {
        const localeLanguage: string = detectBrowserLanguage();
        // setGreeting({
        //     message: "Bom Dia",
        //     language: "en-US"
        // })
        console.log(greeting)
        console.log(localeLanguage)
    }, []);
    
    console.log(greeting)
    
    return (
        <div>
            <h1 className="title">{ greeting.message },</h1>
            {/*<h1 className="title">{ detectBrowserLanguage() }</h1>*/}
        </div>
    )
}

export default Greetings;
