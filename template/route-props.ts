import { RouteProp } from '@react-navigation/native';
import { RootStackParamsList } from './route-params';

export type FirstScreenRouteProp = RouteProp<RootStackParamsList, 'First'>;
export type SecondScreenRouteProp = RouteProp<RootStackParamsList, 'Second'>;