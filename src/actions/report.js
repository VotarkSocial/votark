import * as types from '../types/report'

export const toggleReport = () => ({
    type: types.REPORT
})

export const startSendingReport = (content,type) => ({
    type: types.SEND_REPORT_STARTED,
    payload: {
        content,
        type
    },
});

export const completeSendingReport = () => ({
    type: types.SEND_REPORT_COMPLETED,
});
export const failSendingReport = (error) => ({
    type: types.SEND_REPORT_FAILED,
    payload: {
        error,
    },
});