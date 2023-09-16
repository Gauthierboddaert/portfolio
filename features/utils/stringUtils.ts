const isUndefinedOrEmpty =  (value: string|undefined): boolean => {
    return undefined === value || '' === value
}