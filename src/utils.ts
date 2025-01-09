import { ScriptableContext } from "chart.js";

export const barChartColorGradient: any = (from: string, to: string) => {
    return (context: ScriptableContext<"bar">) => {
        const chart = context.chart;
        const { ctx, chartArea } = chart;
        if (!chartArea) {
            return "rgba(0,0,0,0)";
        }
        const gradient = ctx.createLinearGradient(0, chartArea.top, 0, chartArea.bottom);
        gradient.addColorStop(0, from);
        gradient.addColorStop(1, to);
        return gradient;
    }
}
export const lineChartColorGradient: any = (from: string, to: string) => {
    return (context: ScriptableContext<"line">) => {
        const chart = context.chart;
        const { ctx, chartArea } = chart;
        if (!chartArea) {
            return "rgba(0,0,0,0)";
        }
        const gradient = ctx.createLinearGradient(0, chartArea.top, 0, chartArea.bottom);
        gradient.addColorStop(0, from);
        gradient.addColorStop(1, to);
        return gradient;
    }
}