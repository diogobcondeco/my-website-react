import React, {useEffect, useState} from 'react';
import './Greeting.scss';
import detectBrowserLanguage from 'detect-browser-language';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import { greetings } from './Greetings';

interface GreetingItem {
    lang: string;
    message: {
        EARLY_MORNING: string;
        MORNING: string;
        AFTERNOON: string;
        NIGHT: string;
    }
}

const Greeting: React.FC = () => {
    const [greeting, setGreeting] = useState<string>("");
    const [showSecondGreeting, setShowSecondGreeting] = useState<boolean>(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            defineCorrectMessage();
            setShowSecondGreeting(true);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    function isBetween(hour: number, first: number, second: number) {
        return hour >= first && hour < second;
    }
    
    function selectTime(salutation: GreetingItem, hour: number) {
        if (salutation === undefined || salutation === null) {
            return setGreeting("Hello");
        } else if (isBetween(hour, 5, 9)) {
            return setGreeting(salutation.message.EARLY_MORNING);
        } else if (isBetween(hour, 9, 12)) {
            return setGreeting(salutation.message.MORNING);
        } else if (isBetween(hour, 12, 19)) {
            return setGreeting(salutation.message.AFTERNOON);
        } else {
            return setGreeting(salutation.message.NIGHT);
        }
    }
    
    function defineCorrectMessage() {
        const localeLanguage: string = detectBrowserLanguage().toLowerCase();
        const nowDate: Date = new Date();
        const nowHour: number = nowDate.getHours();
        const selectedGreeting = greetings.filter(
            item => localeLanguage.substring(0, 2) === item.lang.substring(0, 2)
        );
        selectTime(selectedGreeting[0], nowHour);
    }
    
    return (
        <div>
            <h1 className="title">
                <SwitchTransition mode="out-in">
                    <CSSTransition
                        key={showSecondGreeting}
                        addEndListener={(node: { addEventListener: (arg0: string, arg1: any, arg2: boolean) => void; }, done: any) => {
                            node.addEventListener("transitionend", done, false);
                        }}
                        classNames="fade"
                    >
                        <div>
                            <span className="greeting">
                                {!showSecondGreeting ? "Hello," : greeting + ","}
                            </span> Diogo here.
                        </div>
                    </CSSTransition>
                </SwitchTransition>
            </h1>
        </div>
    )
}

export default Greeting;
