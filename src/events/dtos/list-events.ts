export enum EventDateFilter {
  All = 1,
  Today,
  Tomorrow,
  ThisWeek,
  NextWeek,
}

export class ListEvents {
  when?: EventDateFilter = EventDateFilter.All;
  page = 1;
}
