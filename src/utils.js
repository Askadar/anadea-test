export const loadHistory = () => {
    try {
        let state = localStorage.getItem('JobUp-History');
        if (!state || state.length === 0)
            throw new Error('Empty storage')
        return { History: JSON.parse(state) };
    } catch (e) {
        console.log(e);
        localStorage.removeItem('JobUp-History');
        return undefined;
    }
}
export const saveHistory = (state) => {
    localStorage.setItem('JobUp-History', JSON.stringify(state));
}
