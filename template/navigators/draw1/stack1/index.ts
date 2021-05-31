import { NavigationProp, NavigatorScreenParams, RouteProp } from "@react-navigation/native";
import { IScreenParams } from "../../route-params";

export interface IFirstScreenParams extends IScreenParams {
    num1: number;
}

export interface ISecondScreenParams extends IScreenParams {
    num2: number;
}

export type Stack1ParamsList = {
    First: IFirstScreenParams;
    Second: ISecondScreenParams;
}

export type Stack1NavigationProp = NavigationProp<Stack1ParamsList>;
export type Stack1NavigatorScreenParams= NavigatorScreenParams<Stack1ParamsList>;
export type FirstScreenRouteProp = RouteProp<Stack1ParamsList, 'First'>;
export type SecondScreenRouteProp = RouteProp<Stack1ParamsList, 'Second'>;