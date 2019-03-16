import { isArray } from './utils';

/**
 * 简写数字正则匹配
 *
 * @example
 *   1G = 1e9
 *   1M = 1e6
 *   1k = 1e3
 *   1m = 1e-3
 *   1u = 1e-6
 *   1n = 1e-9
 *   1p = 1e-12
 */
export const numberMatcher = /^\d+(?:\.\d+)?$|^\d+?(?:\.\d+)?[eE]-?\d+$|^\d+(?:\.\d+)?[puμnmkMG]$/;

/** 简写数字编译 */
export function numberParser(notation: string) {
    if (!numberMatcher.test(notation)) {
        return NaN;
    }
    else if (/[eE]/.test(notation)) {
        const [base, power] = notation.split(/[eE]/);
        return Number(base) * Math.pow(10, Number(power));
    }
    else if (/[puμnmkMG]$/.test(notation)) {
        const exp = { p: -12, u: -9, μ: -9, n: -6, m: -3, k: 3, M: 6, G: 9 };
        const power = exp[notation[notation.length - 1]] as number;
        const base = notation.substring(0, notation.length - 1);

        return Number(base) * Math.pow(10, power);
    }
    else {
        return Number(notation);
    }
}

/** 简写数字单位 */
export type NumberRank = 'G' | 'M' | 'k' | '' | 'm' | 'μ' | 'u' | 'n' | 'p';

/** 简写数字快捷选项下拉列表 */
export type SelectList = {
    label: string;
    value: string;
}[];

/** 简写数字对应的中文 */
const unitMap = {
    'p': '皮',
    'n': '纳',
    'u': '微',
    'm': '毫',
    '': '',
    'k': '千',
    'M': '兆',
    'G': '吉',
};

/** 生成简写数字单位快捷选择列表选项 */
export function createSelectList(label: string, isChinese?: boolean): SelectList;
export function createSelectList(units: NumberRank[], label: string, isChinese?: boolean): SelectList;
export function createSelectList(units: NumberRank[] | string, label?: string | boolean, isChinese = false) {
    // 未输入单位列表
    if (!isArray(units)) {
        isChinese = Boolean(label);
        label = units;
        units = ['G', 'M', 'k', '', 'm', 'u', 'n', 'p'];
    }

    const unitFilted: Exclude<NumberRank, 'μ'>[] = units.map((unit) => unit === 'μ' ? 'u' : unit);

    return unitFilted.map((unit) => ({
        label: isChinese
            ? `${unitMap[unit]}${label}`
            : `${unit}${label}`,
        value: unit,
    }));
}

/** 解析输入数字 */
export function splitNumber(str: string) {
    const matcher = /^([\d.]+)([GMkmunp]?)$/;
    const match = matcher.exec(str);

    if (!match) {
        throw new Error(`Number Error: ${str}`);
    }

    return {
        number: match[1],
        rank: (match[2] || '') as NumberRank,
    };
}

/** 数字标记类 */
export class MarkNumber {
    /** 标记值 */
    private readonly SignTransfer: number;
    /** 高位数 */
    private readonly High: number;
    /** 底位数 */
    private readonly Low: number;

    /**
     * 构造函数
     * @param sign 做标记的数
     * @param allowBit 允许的低位有效位数
     */
    constructor(sign: number, allowBit: number) {
        this.SignTransfer = sign;
        this.Low = Math.pow(2, allowBit) - 1;
        this.High = (Math.pow(2, 64 - allowBit) - 1) << allowBit;
    }

    /** 生成标记数字 */
    getMarkNumber(origin: number) {
        // 超过标记范围
        if (origin > this.Low) {
            throw new Error('(Solver) 数字标记超过了最大范围');
        }

        return this.SignTransfer | origin;
    }

    /** 检查格式是否正确 */
    checkMarkNumber(mark: number) {
        return !(this.SignTransfer ^ (mark & this.High));
    }

    /** 从标记数字中得到原来的数字 */
    getOriginNumber(mark: number) {
        return mark & this.Low;
    }
}
