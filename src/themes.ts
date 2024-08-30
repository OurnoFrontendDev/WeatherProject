export interface Theme {
    '--app-background-color': string;
    '--card-title-color': string;
    '--card-item-background-color': string;
    '--card-main-background-color': string;
    '--indicator-color': string;
    '--day-title-color': string;
    '--border-style': string;
    '--input-background-color': string
    '--arrow-color': string
    'input-background-color': string


}

export const lightTheme: Theme = {
    '--app-background-color': 'rgb(245, 245, 245)',
    '--card-title-color': 'rgb(33, 33, 33,0.32)',
    '--day-title-color': 'rgb(18, 18, 18)',
    '--card-item-background-color': 'rgba(255, 255, 255,0.32)',
    '--card-main-background-color': 'rgba(232, 234, 246)',
    '--indicator-color': 'rgb(0, 0, 0)',
    '--border-style': '1px solid #E8EAF6',
    '--input-background-color': 'rgba(255, 255, 255, 0)',
    '--arrow-color': 'rgba(255, 255, 255, 0)',
    'input-background-color': 'rgba(232, 234, 246)',
}

export const darkTheme: Theme = {
    '--app-background-color': 'rgb(13, 17, 23)',
    '--day-title-color': 'rgb(245, 245, 245)',
    '--card-title-color': 'rgb(245, 245, 245)',
    '--card-item-background-color': 'rgba(33, 33, 33, 0.8)',
    '--card-main-background-color': 'rgb(94, 94, 94)',
    '--indicator-color': 'rgb(255, 255, 255)',
    '--border-style': '1px solid #E8EAF6',
    '--input-background-color': 'rgba(255, 255, 255, 0)',
    '--arrow-color': 'rgb(245, 245, 245)',
    'input-background-color': 'rgb(245, 245, 245)',
};
