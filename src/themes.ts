export interface Theme {
  '--app-background-color': string;
  '--card-title-color': string;
  '--card-item-background-color': string;
  '--card-main-background-color': string;
  '--indicator-color': string;
  '--day-title-color': string;
  '--border-style': string;
  '--input-background-color': string;
  '--arrow-color': string;
  'input-background-color': string;
  '--icon-color': string;
  '--temp-indicator-color': string;
}

export const lightTheme: Theme = {
  '--app-background-color': 'rgba(255, 255, 255)',
  '--card-title-color': 'rgb(18, 18, 18)',
  '--day-title-color': 'rgb(18, 18, 18)',
  '--card-item-background-color': 'rgba(255, 255, 255 )',
  '--card-main-background-color': 'rgba(232, 234, 246)',
  '--indicator-color': 'rgb(0, 0, 0)',
  '--border-style': '1px solid #E8EAF6',
  '--input-background-color': 'rgba(255, 255, 255, 0)',
  '--arrow-color': 'rgba(255, 255, 255, 0)',
  'input-background-color': 'rgba(232, 234, 246)',
  '--icon-color': 'rgb(0, 0, 0)',
  '--temp-indicator-color': 'rgb(0, 0, 0)',
};

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
  '--icon-color': 'rgb(245, 245, 245)',
  '--temp-indicator-color': 'rgb(245, 245, 245)',
};

type switcherIconColorType = {
  '--switcher-icon-active-color': string;
  '--switcher-icon-unActive-color': string;
};

export const switcherIconColor: switcherIconColorType = {
  '--switcher-icon-active-color': 'rgb(245, 245, 245)',
  '--switcher-icon-unActive-color': 'rgb(31, 41, 55)',
};

type SearchCitiesListType = {
  '--search-cities-list-color': string;
  '--search-cities-list-border': string;
};

export const searchCitiesList: SearchCitiesListType = {
  '--search-cities-list-color': 'rgb(255, 255, 255)',
  '--search-cities-list-border': '1px solid #ccc',
};

type searchCitiesListTownItemColorType = {
  '--search-cities-list--item-hover-color': string;
}

export const searchCitiesListTownItemColor:searchCitiesListTownItemColorType = {
  '--search-cities-list--item-hover-color':"aqua",
};