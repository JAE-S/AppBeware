export const VIEW_ALL_CATEGORIES = 'VIEW_ALL_CATEGORIES';
export const VIEW_SINGLE_CATEGORY = 'VIEW_SINGLE_CATEGORY';

export function viewAllCategories(allCategories) {
    return {
        type: VIEW_ALL_CATEGORIES,
        allCategories: allCategories
    }
}

export function viewSingleCategory(singleCategory) {
    return {
        type: VIEW_SINGLE_CATEGORY,
        singleCategory: singleCategory
    }
}
