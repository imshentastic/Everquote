export const fetchNotebooks = data => {
    // debugger
    return $.ajax({
        
        url: `/api/notebooks`,
        method: `GET`,
        data
    });
};