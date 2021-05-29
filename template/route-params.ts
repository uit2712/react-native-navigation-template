export type FirstScreenParams = {
    title?: string;
}

export type SecondScreenParams = {
    title?: string;
    count: number;
}

export type RootStackParamsList = {
    First: FirstScreenParams;
    Second: SecondScreenParams;
}