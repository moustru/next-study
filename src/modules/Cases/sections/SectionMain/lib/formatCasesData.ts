import type { CaseDataModel, CaseUIModel } from '../types';
// Убрать нахуй
/**
 * Подмешивает в объект с данными информацию о UI карточки
 *
 * @param casesData массив с данными карточек
 * @param casesUI массив с информацией по UI карточек
 * @returns Форматированный массив
 */
export const getCasesWithUIData = (
	casesData: CaseDataModel[],
	casesUI: CaseUIModel[]
) => {
	return casesData.map((caseItem, i) => Object.assign(caseItem, casesUI[i]));
};
