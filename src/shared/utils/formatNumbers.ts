/**
 * Добавление 0 к началу числа
 *
 * @param digit Вводное число
 * @returns Строка форматированного числа
 */
export const addZeroBeforeDigit = (digit: number): string =>
	digit.toString().padStart(2, '0');
