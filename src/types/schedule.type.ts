type days = 'mon' | 'tue' | 'wed' | 'thu' | 'fri' | 'sat' | 'sun';

export type Schedule = {
  readonly [key in days]: string | null;
};
