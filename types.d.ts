type Statistics = {
    cpu: number;
    ram: number;

};

type StaticData = {

    cpu: string;
    ram: number;
};

type View = 'CPU' | 'RAM' | 'STORAGE';

type FrameWindowAction = 'CLOSE' | 'MAXIMIZE' | 'MINIMIZE';

type EventPayloadMapping = {
    statistics: Statistics;
    getStaticData: StaticData;
    changeView: View;
    sendFrameAction: FrameWindowAction;
};

type UnsubscribeFunction = () => void;

interface Window {
    electron: {
        subscribeStatistics: (
            callback: (statistics: Statistics) => void
        ) => UnsubscribeFunction;
        getStaticData: () => Promise<StaticData>;
        subscribeChangeView: (
            callback: (view: View) => void
        ) => UnsubscribeFunction;
        sendFrameAction: (payload: FrameWindowAction) => void;
    };
}
