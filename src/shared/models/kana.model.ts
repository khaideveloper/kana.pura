export interface KANA_DICTIONARY_ELEMENT {
  kana: string;
  values: string[];
}

export const KANA_DICTIONARY: {
  HIRAGANA: KANA_DICTIONARY_ELEMENT[][];
  KATAKANA: KANA_DICTIONARY_ELEMENT[][];
} = {
  HIRAGANA: [
    [
      { kana: 'あ', values: ['a'] },
      { kana: 'い', values: ['i'] },
      { kana: 'う', values: ['u'] },
      { kana: 'え', values: ['e'] },
      { kana: 'お', values: ['o'] },
    ],
    [
      { kana: 'か', values: ['ka'] },
      { kana: 'き', values: ['ki'] },
      { kana: 'く', values: ['ku'] },
      { kana: 'け', values: ['ke'] },
      { kana: 'こ', values: ['ko'] },
    ],
    [
      { kana: 'さ', values: ['sa'] },
      { kana: 'し', values: ['shi', 'si'] },
      { kana: 'す', values: ['su'] },
      { kana: 'せ', values: ['se'] },
      { kana: 'そ', values: ['so'] },
    ],
    [
      { kana: 'た', values: ['ta'] },
      { kana: 'ち', values: ['chi', 'ti'] },
      { kana: 'つ', values: ['tsu', 'tu'] },
      { kana: 'て', values: ['te'] },
      { kana: 'と', values: ['to'] },
    ],
    [
      { kana: 'な', values: ['na'] },
      { kana: 'に', values: ['ni'] },
      { kana: 'ぬ', values: ['nu'] },
      { kana: 'ね', values: ['ne'] },
      { kana: 'の', values: ['no'] },
    ],
    [
      { kana: 'は', values: ['ha'] },
      { kana: 'ひ', values: ['hi'] },
      { kana: 'ふ', values: ['fu', 'hu'] },
      { kana: 'へ', values: ['he'] },
      { kana: 'ほ', values: ['ho'] },
    ],
    [
      { kana: 'ま', values: ['ma'] },
      { kana: 'み', values: ['mi'] },
      { kana: 'む', values: ['mu'] },
      { kana: 'め', values: ['me'] },
      { kana: 'も', values: ['mo'] },
    ],
    [
      { kana: 'や', values: ['ya'] },
      { kana: 'ゆ', values: ['yu'] },
      { kana: 'よ', values: ['yo'] },
    ],
    [
      { kana: 'ら', values: ['ra'] },
      { kana: 'り', values: ['ri'] },
      { kana: 'る', values: ['ru'] },
      { kana: 'れ', values: ['re'] },
      { kana: 'ろ', values: ['ro'] },
    ],
    [
      { kana: 'わ', values: ['wa'] },
      { kana: 'を', values: ['wo', 'o'] },
      { kana: 'ん', values: ['n'] },
    ],
    [
      { kana: 'が', values: ['ga'] },
      { kana: 'ぎ', values: ['gi'] },
      { kana: 'ぐ', values: ['gu'] },
      { kana: 'げ', values: ['ge'] },
      { kana: 'ご', values: ['go'] },
    ],
    [
      { kana: 'ざ', values: ['za'] },
      { kana: 'じ', values: ['ji', 'zi'] },
      { kana: 'ず', values: ['zu', 'du'] },
      { kana: 'ぜ', values: ['ze'] },
      { kana: 'ぞ', values: ['zo'] },
    ],
    [
      { kana: 'だ', values: ['da'] },
      { kana: 'ぢ', values: ['ji', 'di', 'dzi'] },
      { kana: 'づ', values: ['zu', 'dzu'] },
      { kana: 'で', values: ['de'] },
      { kana: 'ど', values: ['do'] },
    ],
    [
      { kana: 'ば', values: ['ba'] },
      { kana: 'び', values: ['bi'] },
      { kana: 'ぶ', values: ['bu'] },
      { kana: 'べ', values: ['be'] },
      { kana: 'ぼ', values: ['bo'] },
    ],
    [
      { kana: 'ぱ', values: ['pa'] },
      { kana: 'ぴ', values: ['pi'] },
      { kana: 'ぷ', values: ['pu'] },
      { kana: 'ぺ', values: ['pe'] },
      { kana: 'ぽ', values: ['po'] },
    ],
    [
      { kana: 'きゃ', values: ['kya'] },
      { kana: 'きゅ', values: ['kyu'] },
      { kana: 'きょ', values: ['kyo'] },
    ],
    [
      { kana: 'しゃ', values: ['sha', 'sya'] },
      { kana: 'しゅ', values: ['shu', 'syu'] },
      { kana: 'しょ', values: ['sho', 'syo'] },
    ],
    [
      { kana: 'ちゃ', values: ['cha', 'cya', 'tya'] },
      { kana: 'ちゅ', values: ['chu', 'cyu'] },
      { kana: 'ちょ', values: ['cho', 'cyo'] },
    ],
    [
      { kana: 'にゃ', values: ['nya'] },
      { kana: 'にゅ', values: ['nyu'] },
      { kana: 'にょ', values: ['nyo'] },
    ],
    [
      { kana: 'ひゃ', values: ['hya'] },
      { kana: 'ひゅ', values: ['hyu'] },
      { kana: 'ひょ', values: ['hyo'] },
    ],
    [
      { kana: 'みゃ', values: ['mya'] },
      { kana: 'みゅ', values: ['myu'] },
      { kana: 'みょ', values: ['myo'] },
    ],
    [
      { kana: 'りゃ', values: ['rya'] },
      { kana: 'りゅ', values: ['ryu'] },
      { kana: 'りょ', values: ['ryo'] },
    ],
    [
      { kana: 'ぎゃ', values: ['gya'] },
      { kana: 'ぎゅ', values: ['gyu'] },
      { kana: 'ぎょ', values: ['gyo'] },
    ],
    [
      { kana: 'じゃ', values: ['ja', 'jya'] },
      { kana: 'じゅ', values: ['ju', 'jyu'] },
      { kana: 'じょ', values: ['jo', 'jyo'] },
    ],
    [
      { kana: 'びゃ', values: ['bya'] },
      { kana: 'びゅ', values: ['byu'] },
      { kana: 'びょ', values: ['byo'] },
    ],
    [
      { kana: 'ぴゃ', values: ['pya'] },
      { kana: 'ぴゅ', values: ['pyu'] },
      { kana: 'ぴょ', values: ['pyo'] },
    ],
  ],
  KATAKANA: [
    [
      { kana: 'ア', values: ['a'] },
      { kana: 'イ', values: ['i'] },
      { kana: 'ウ', values: ['u'] },
      { kana: 'エ', values: ['e'] },
      { kana: 'オ', values: ['o'] },
    ],
    [
      { kana: 'カ', values: ['ka'] },
      { kana: 'キ', values: ['ki'] },
      { kana: 'ク', values: ['ku'] },
      { kana: 'ケ', values: ['ke'] },
      { kana: 'コ', values: ['ko'] },
    ],
    [
      { kana: 'サ', values: ['sa'] },
      { kana: 'シ', values: ['shi', 'si'] },
      { kana: 'ス', values: ['su'] },
      { kana: 'セ', values: ['se'] },
      { kana: 'ソ', values: ['so'] },
    ],
    [
      { kana: 'タ', values: ['ta'] },
      { kana: 'チ', values: ['chi', 'ti'] },
      { kana: 'ツ', values: ['tsu', 'tu'] },
      { kana: 'テ', values: ['te'] },
      { kana: 'ト', values: ['to'] },
    ],
    [
      { kana: 'ナ', values: ['na'] },
      { kana: 'ニ', values: ['ni'] },
      { kana: 'ヌ', values: ['nu'] },
      { kana: 'ネ', values: ['ne'] },
      { kana: 'ノ', values: ['no'] },
    ],
    [
      { kana: 'ハ', values: ['ha'] },
      { kana: 'ヒ', values: ['hi'] },
      { kana: 'フ', values: ['fu', 'hu'] },
      { kana: 'ヘ', values: ['he'] },
      { kana: 'ホ', values: ['ho'] },
    ],
    [
      { kana: 'マ', values: ['ma'] },
      { kana: 'ミ', values: ['mi'] },
      { kana: 'ム', values: ['mu'] },
      { kana: 'メ', values: ['me'] },
      { kana: 'モ', values: ['mo'] },
    ],
    [
      { kana: 'ヤ', values: ['ya'] },
      { kana: 'ユ', values: ['yu'] },
      { kana: 'ヨ', values: ['yo'] },
    ],
    [
      { kana: 'ラ', values: ['ra'] },
      { kana: 'リ', values: ['ri'] },
      { kana: 'ル', values: ['ru'] },
      { kana: 'レ', values: ['re'] },
      { kana: 'ロ', values: ['ro'] },
    ],
    [
      { kana: 'ワ', values: ['wa'] },
      { kana: 'ヲ', values: ['wo', 'o'] },
      { kana: 'ン', values: ['n'] },
    ],
    [
      { kana: 'ガ', values: ['ga'] },
      { kana: 'ギ', values: ['gi'] },
      { kana: 'グ', values: ['gu'] },
      { kana: 'ゲ', values: ['ge'] },
      { kana: 'ゴ', values: ['go'] },
    ],
    [
      { kana: 'ザ', values: ['za'] },
      { kana: 'ジ', values: ['ji', 'zi'] },
      { kana: 'ズ', values: ['zu', 'du'] },
      { kana: 'ゼ', values: ['ze'] },
      { kana: 'ゾ', values: ['zo'] },
    ],
    [
      { kana: 'ダ', values: ['da'] },
      { kana: 'ヂ', values: ['ji', 'di', 'dzi'] },
      { kana: 'ヅ', values: ['zu', 'dzu'] },
      { kana: 'デ', values: ['de'] },
      { kana: 'ド', values: ['do'] },
    ],
    [
      { kana: 'バ', values: ['ba'] },
      { kana: 'ビ', values: ['bi'] },
      { kana: 'ブ', values: ['bu'] },
      { kana: 'ベ', values: ['be'] },
      { kana: 'ボ', values: ['bo'] },
    ],
    [
      { kana: 'パ', values: ['pa'] },
      { kana: 'ピ', values: ['pi'] },
      { kana: 'プ', values: ['pu'] },
      { kana: 'ペ', values: ['pe'] },
      { kana: 'ポ', values: ['po'] },
    ],
    [
      { kana: 'キャ', values: ['kya'] },
      { kana: 'キュ', values: ['kyu'] },
      { kana: 'キョ', values: ['kyo'] },
    ],
    [
      { kana: 'シャ', values: ['sha', 'sya'] },
      { kana: 'シュ', values: ['shu', 'syu'] },
      { kana: 'ショ', values: ['sho', 'syo'] },
    ],
    [
      { kana: 'チャ', values: ['cha', 'cya', 'tya'] },
      { kana: 'チュ', values: ['chu', 'cyu'] },
      { kana: 'チョ', values: ['cho', 'cyo'] },
    ],
    [
      { kana: 'ニャ', values: ['nya'] },
      { kana: 'ニュ', values: ['nyu'] },
      { kana: 'ニョ', values: ['nyo'] },
    ],
    [
      { kana: 'ヒャ', values: ['hya'] },
      { kana: 'ヒュ', values: ['hyu'] },
      { kana: 'ヒョ', values: ['hyo'] },
    ],
    [
      { kana: 'ミャ', values: ['mya'] },
      { kana: 'ミュ', values: ['myu'] },
      { kana: 'ミョ', values: ['myo'] },
    ],
    [
      { kana: 'リャ', values: ['rya'] },
      { kana: 'リュ', values: ['ryu'] },
      { kana: 'リョ', values: ['ryo'] },
    ],
    [
      { kana: 'ギャ', values: ['gya'] },
      { kana: 'ギュ', values: ['gyu'] },
      { kana: 'ギョ', values: ['gyo'] },
    ],
    [
      { kana: 'ジャ', values: ['ja', 'jya'] },
      { kana: 'ジュ', values: ['ju', 'jyu'] },
      { kana: 'ジョ', values: ['jo', 'jyo'] },
    ],
    [
      { kana: 'ビャ', values: ['bya'] },
      { kana: 'ビュ', values: ['byu'] },
      { kana: 'ビョ', values: ['byo'] },
    ],
    [
      { kana: 'ピャ', values: ['pya'] },
      { kana: 'ピュ', values: ['pyu'] },
      { kana: 'ピョ', values: ['pyo'] },
    ],
    [
      { kana: 'ファ', values: ['fa'] },
      { kana: 'フィ', values: ['fi'] },
      { kana: 'フェ', values: ['fe'] },
      { kana: 'フォ', values: ['fo'] },
      { kana: 'フュ', values: ['fyu'] },
    ],
    [
      { kana: 'ウィ', values: ['wi'] },
      { kana: 'ウェ', values: ['we'] },
      { kana: 'ウォ', values: ['wo'] },
      { kana: 'ヴァ', values: ['va'] },
      { kana: 'ヴィ', values: ['vi'] },
      { kana: 'ヴェ', values: ['ve'] },
      { kana: 'ヴォ', values: ['vo'] },
    ],
    [
      { kana: 'ツァ', values: ['tsa'] },
      { kana: 'ツィ', values: ['tsi'] },
      { kana: 'ツェ', values: ['tse'] },
      { kana: 'ツォ', values: ['tso'] },
    ],
    [
      { kana: 'チェ', values: ['che'] },
      { kana: 'シェ', values: ['she'] },
      { kana: 'ジェ', values: ['je'] },
    ],
    [
      { kana: 'ティ', values: ['ti'] },
      { kana: 'ディ', values: ['di'] },
      { kana: 'デュ', values: ['du'] },
      { kana: 'トゥ', values: ['tu'] },
    ],
  ],
};

export class KANA_FILTER {
  hasHIRAGANA: boolean = false;
  hasKATAKANA: boolean = false;
  HIRAGANA_GROUPS: boolean[][] = [];
  KATAKANA_GROUPS: boolean[][] = [];

  constructor() {
    KANA_DICTIONARY.HIRAGANA.forEach((group) => {
      this.HIRAGANA_GROUPS.push([]);
      group.forEach(() => {
        this.HIRAGANA_GROUPS[this.HIRAGANA_GROUPS.length - 1].push(false);
      });
    });
    KANA_DICTIONARY.KATAKANA.forEach((group) => {
      this.KATAKANA_GROUPS.push([]);
      group.forEach(() => {
        this.KATAKANA_GROUPS[this.KATAKANA_GROUPS.length - 1].push(false);
      });
    });
  }

  toggle_all(force?: boolean) {
    this.toggle_kana('HIRAGANA', force);
    this.toggle_kana('KATAKANA', force);
  }

  toggle_kana(kana: 'HIRAGANA' | 'KATAKANA', force?: boolean) {
    if (kana == null) {
      return;
    }
    KANA_DICTIONARY[kana].forEach((group, index) => {
      this.toggle_group(kana, index, force);
    });
  }

  toggle_group(kana: 'HIRAGANA' | 'KATAKANA', group: number, force?: boolean) {
    if (kana == null || group == null) {
      return;
    }
    KANA_DICTIONARY[kana][group].forEach((element, index) => {
      console.log(group + ': ' + index);
      this.toggle_element(kana, group, index, force);
    });
  }

  toggle_element(
    kana: 'HIRAGANA' | 'KATAKANA',
    group: number,
    element: number,
    force?: boolean
  ) {
    if (
      kana == null ||
      group == null ||
      element == null ||
      this[kana + '_GROUPS'][group] == null ||
      this[kana + '_GROUPS'][group][element] == null
    ) {
      return;
    }
    this[kana + '_GROUPS'][group][element] =
      force == null ? !this[kana + '_GROUPS'][group][element] : force;
    let has_element = false;
    this[kana + '_GROUPS'].forEach((group) => {
      group.forEach((element) => {
        if (element) {
          has_element = true;
        }
      });
    });
    this['has' + kana] = has_element;
  }

  get_numbers(kana: 'HIRAGANA' | 'KATAKANA') {
    if (kana == null) {
      return;
    }
    let temp = [];

    this[kana + '_GROUPS'].forEach((group) => {
      let values = [];
      group.forEach((element, index) => {
        if (element) {
          values.push(index);
        }
      });
      temp.push(values);
    });

    return temp;
  }
}

export var last_element: KANA_DICTIONARY_ELEMENT = null;
export function random_kana(filter: KANA_FILTER): KANA_DICTIONARY_ELEMENT {
  if (filter == null) {
    return;
  }

  let kana =
    filter.hasHIRAGANA && filter.hasKATAKANA
      ? ['HIRAGANA', 'KATAKANA'][random(0, 2)]
      : filter.hasHIRAGANA
      ? 'HIRAGANA'
      : 'KATAKANA';
  let numbers = filter.get_numbers(<'HIRAGANA' | 'KATAKANA'>kana);

  let element = last_element;
  if (last_element === element) {
    let group = random(0, numbers.length);
    element =
      KANA_DICTIONARY[kana][group][
        numbers[group][random(0, numbers[group].length)]
      ];
  }

  return element;
}

export function random(min, max) {
  return Math.floor(Math.random() * max) + min;
}
