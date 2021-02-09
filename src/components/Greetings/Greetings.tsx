import React, {useEffect, useState} from 'react';
import './Greetings.scss';
import detectBrowserLanguage from 'detect-browser-language';
import { listOfGreetings } from './ListOfGreetings';

const Greetings: React.FC = () => {
    const [greeting, setGreeting] = useState<string>("Good morning");

    useEffect(() => {
        const timer = setTimeout(() => {
            defineCorrectMessage();
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    function isBetween(hour: number, first: number, second: number) {
        return hour >= first && hour < second;
    }
    
    function defineCorrectMessage() {
        const localeLanguage: string = detectBrowserLanguage().toLowerCase();
        const nowDate: Date = new Date();
        const nowHour: number = nowDate.getHours();
        listOfGreetings.forEach((item) => {
            if (localeLanguage === item.lang.toLowerCase()) {
                if (isBetween(nowHour, 5, 9)) {
                    return setGreeting(item.message.EARLY_MORNING);
                } else if (isBetween(nowHour, 9, 12)) {
                    return setGreeting(item.message.MORNING);
                } else if (isBetween(nowHour, 12, 19)) {
                    return setGreeting(item.message.AFTERNOON);
                } else {
                    return setGreeting(item.message.EVENING);
                }
            } else {
                if (isBetween(nowHour, 5, 9)) {
                    return setGreeting("Hello early bird");
                } else if (isBetween(nowHour, 9, 12)) {
                    return setGreeting("Good morning");
                } else if (isBetween(nowHour, 12, 19)) {
                    return setGreeting("Good afternoon");
                } else {
                    return setGreeting("Good evening");
                }
            }
        });
    }
    
    return (
        <div>
            <h1 className="title">{ greeting },</h1>
        </div>
    )
}

export default Greetings;
