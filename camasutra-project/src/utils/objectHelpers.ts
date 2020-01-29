export const updateObjectInArray = <T>(items: Array<T>, itemId: number, objPropName: string, newObjProps: Object): Array<any> => {
    return items.map((i: Object) => {
        // @ts-ignore
        if (i[objPropName] === itemId) {
            return {...i, ...newObjProps}
        }
        return i;
    })
};
