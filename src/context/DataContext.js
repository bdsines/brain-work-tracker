import { createContext, useState } from "react";
const DataContext = createContext({});
export const DataProvider = ({ children }) => {
    // const sessionTypes=[{name:""}]
    const [learners, setLearners] = useState([{ name: "Akshaj Danda", age: "8", image: "" }]);
    const [selectedLearner, setSelectedLearner] = useState("Learner1");
    const [selectedSession, setSelectedSession] = useState("");
    const [learnerSessions, setLearnerSessions] = useState(
        [{
            id: "1",
            type: "session.kumon.math",
            meta: {
                title: "Kumon Math",
                learner: "Learner1",
                latestLevel: "A",
                numberOfCards: "10",
                latestDurationSec: "100",
                latestSessionAt: "2022-10-12T11:11:00",
                latestResult: "100%"
            },
            sessionRecordings: [
                {
                    id: 1,
                    level: "A",
                    startedAt: "",
                    stoppedAt: "",
                    duration: "",
                    result: "100%",
                },
                {
                    id: 2,
                    level: "A",
                    startedAt: "",
                    stoppedAt: "",
                    duration: "",
                    result: "100%",
                }
            ]

        }
            ,
        {
            id: "2",
            type: "session.kumon.reading",
            meta: {
                title: "Kumon Reading",
                learner: "Learner1",
                latestLevel: "7A",
                numberOfCards: "10",
                latestDurationSec: "100",
                latestSessionAt: "2022-10-12T11:11:00",
                latestResult: "Consistent"
            },
            sessionRecordings: [
                {
                    id: 1,
                    level: "7A",
                    startedAt: "",
                    stoppedAt: "",
                    duration: "",
                    result: "Consistent",
                }
            ]

        }

        ]
    );

    function handleLearnerSelectionChange(event) {
        setSelectedLearner(event.target.value);
        console.log("selected learner: ", event.target.value);
    }
    function handleLearnerScoreCardClick(event) {
        console.log("selected learner card: ", event.currentTarget.id);
    }
    const handleAddSession = (event) => {


        alert("onAddSessionTapped- WIP ");

    }
    const handleSessionStartStop = (event) => {


        alert("onStartSessionTapped- WIP ",event.target);

    }
    const handleSessionSwipe = (event) => {


        console.log("handleSessionSwipe- WIP ",event.target);

    }
    const handleSessionTapped = (session) => {
        console.log("handleSessionTapped- WIP ",session);
        // setSelectedSession(session);

    } 
    return <DataContext.Provider value={{ learnerSessions, setLearnerSessions, selectedLearner, setSelectedLearner, handleLearnerSelectionChange, handleLearnerScoreCardClick, learners, setLearners, handleAddSession, handleSessionStartStop, handleSessionSwipe,handleSessionTapped }}>
        {children}
    </DataContext.Provider>
};
export default DataContext;


