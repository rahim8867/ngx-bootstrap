// tslint:disable:comment-format binary-expression-operand-order max-line-length

//! moment.js locale configuration
//! locale : Persian [fa]
//! author : Rahim Gashti: https://github.com/rahim8867


import { LocaleData } from '../locale/locale.class';

const symbolMap: {[key: string]: string} = {
  1: '١',
  2: '٢',
  3: '٣',
  4: '٤',
  5: '٥',
  6: '٦',
  7: '٧',
  8: '٨',
  9: '٩',
  0: '٠'
};
const numberMap: {[key: string]: string} = {
  '١': '1',
  '٢': '2',
  '٣': '3',
  '٤': '4',
  '٥': '5',
  '٦': '6',
  '٧': '7',
  '٨': '8',
  '٩': '9',
  '٠': '0'
};
const pluralForm = function (num: number): number {
  return num === 0 ? 0 : num === 1 ? 1 : num === 2 ? 2 : num % 100 >= 3 && num % 100 <= 10 ? 3 : num % 100 >= 11 ? 4 : 5;
};
const plurals: {[key: string]: [string, string, [string, string], string, string, string]} = {
  s: ['أقل من ثانية', 'ثانية واحدة', ['ثانيتان', 'ثانيتين'], '%d ثوان', '%d ثانية', '%d ثانية'],
  m: ['أقل من دقيقة', 'دقيقة واحدة', ['دقيقتان', 'دقيقتين'], '%d دقائق', '%d دقيقة', '%d دقيقة'],
  h: ['أقل من ساعة', 'ساعة واحدة', ['ساعتان', 'ساعتين'], '%d ساعات', '%d ساعة', '%d ساعة'],
  d: ['أقل من يوم', 'يوم واحد', ['يومان', 'يومين'], '%d أيام', '%d يومًا', '%d يوم'],
  M: ['أقل من شهر', 'شهر واحد', ['شهران', 'شهرين'], '%d أشهر', '%d شهرا', '%d شهر'],
  y: ['أقل من عام', 'عام واحد', ['عامان', 'عامين'], '%d أعوام', '%d عامًا', '%d عام']
};
const pluralize = function (u: string) {
  return function (num: number, withoutSuffix: boolean): string {
    const f = pluralForm(num);
    let str = plurals[u][pluralForm(num)];
    if (f === 2) {
      str = str[withoutSuffix ? 0 : 1];
    }

    return (str as string).replace(/%d/i, num.toString());
  };
};
const months: string[] = [
  'يناير',
  'فبراير',
  'مارس',
  'أبريل',
  'مايو',
  'يونيو',
  'يوليو',
  'أغسطس',
  'سبتمبر',
  'أكتوبر',
  'نوفمبر',
  'ديسمبر'
];

export const arLocale: LocaleData = {
  abbr: 'fa',
  months,
  monthsShort: months,
  weekdays: 'یکشنبه_دوشنبه_سه شنبه_چهارشنبه_پنجشنبه_جمعه_شنبه'.split('_'),
  weekdaysShort: 'یکشنبه_دوشنبه_سه شنبه_چهارشنبه_پنجشنبه_جمعه_شنبه'.split('_'),
  weekdaysMin: 'ش_ی_د_س_چ_پ_ج'.split('_'),
  weekdaysParseExact: true,
  longDateFormat: {
    LT: 'HH:mm',
    LTS: 'HH:mm:ss',
    L: 'D/\u200FM/\u200FYYYY',
    LL: 'D MMMM YYYY',
    LLL: 'D MMMM YYYY HH:mm',
    LLLL: 'dddd D MMMM YYYY HH:mm'
  },
  meridiemParse: /ص|م/,
  isPM(input) {
    return 'ب' === input;
  },
  meridiem(hour, minute, isLower) {
    if (hour < 12) {
      return 'ق';
    } else {
      return 'ب';
    }
  },
  calendar: {
    sameDay: '[اليوم عند الساعة] LT',
    nextDay: '[غدًا عند الساعة] LT',
    nextWeek: 'dddd [عند الساعة] LT',
    lastDay: '[أمس عند الساعة] LT',
    lastWeek: 'dddd [عند الساعة] LT',
    sameElse: 'L'
  },
  relativeTime: {
    future: 'بعد %s',
    past: 'قبل %s',
    s: pluralize('s'),
    ss: pluralize('s'),
    m: pluralize('m'),
    mm: pluralize('m'),
    h: pluralize('h'),
    hh: pluralize('h'),
    d: pluralize('d'),
    dd: pluralize('d'),
    M: pluralize('M'),
    MM: pluralize('M'),
    y: pluralize('y'),
    yy: pluralize('y')
  },
  preparse(str: string): string {
    return str.replace(/[١٢٣٤٥٦٧٨٩٠]/g, function (match) {
      return numberMap[match];
    }).replace(/،/g, ',');
  },
  postformat(str: string) {
    return str.replace(/\d/g, function (match) {
      return symbolMap[match];
    }).replace(/,/g, '،');
  },
  week: {
    dow: 6, // Saturday is the first day of the week.
    doy: 12  // The week that contains Jan 1st is the first week of the year.
  }
};