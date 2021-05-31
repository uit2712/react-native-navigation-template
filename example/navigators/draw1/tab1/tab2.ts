import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { NavigatorScreenParams } from "@react-navigation/core";
import { IScreenParams } from "../../route-params";

export interface IFifthScreenParams extends IScreenParams {
    num5: number;
}

export interface ISixthScreenParams extends IScreenParams {
    num6: number;
}

export type Tab2Params = {
    Fifth: IFifthScreenParams;
    Sixth: ISixthScreenParams;
}

export type Tab2NavigationProp = BottomTabNavigationProp<Tab2Params>;
export type Tab2NavigatorScreenParams= NavigatorScreenParams<Tab2Params>;