import { ChartType, ScriptableContext } from "chart.js"

export type NavMenuType = {
    name: string,
    path?: string,
    icon?: string
    onClick?: () => void
    subs?: NavMenuType[]
    iconClassName?: string
}
type ChartSegment = {
    borderDash: number[]
}
export type ChartDataSet<T extends ChartType> = {
    label: string;
    data: number[];
    backgroundColor?: string | ((context: ScriptableContext<T>) => string | CanvasGradient);
    legendColor?: string;
    borderColor?: string;
    borderWidth?: number;
    fill?: boolean;
    tension?: number;
    pointRadius?: number;
    segment?: ChartSegment
};